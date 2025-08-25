// Script relies on Periodc Notes (PN) plugin, expects it to be configured
const pn = app?.plugins?.plugins?.['periodic-notes']?.settings;
if (!pn) throw new Error("Periodic Notes plugin settings not found.");

// Supported date hierarchy levels
const LEVELS = ['years', 'quarters', 'months', 'weeks', 'days'];

// Config factory
const cfg = (baseFolder, urlFormat, labelFormat, labelPrefix = '', labelSuffix = '', urlStyle = 'Wikilinks') => ({
  baseFolder,
  urlFormat,
  labelFormat,
  labelPrefix,
  labelSuffix,
  urlStyle
});

// Period configs - note folder, file naming pattern, default label for navigation menu
const CONFIG = {
  years:    cfg(pn.yearly.folder,    pn.yearly.format,    'YYYY'),
  quarters: cfg(pn.quarterly.folder, pn.quarterly.format, 'YYYY-[Q]Q'),
  months:   cfg(pn.monthly.folder,   pn.monthly.format,   'YYYY-MM'),
  weeks:    cfg(pn.weekly.folder,    pn.weekly.format,    'GGGG-[W]WW'),
  days:     cfg(pn.daily.folder,     pn.daily.format,     'YYYY-MM-DD')
};

// Navigation menu label overrides
const STANDARD_OVERRIDES = {
  quarters: { labelFormat: '[Q]Q' },
  months:  { labelFormat: 'MM' },
  weeks:   { labelFormat: '[W]WW' },
};
const DOWN_OVERRIDES = {
  days:   { labelFormat: 'DD-dd' } 
};

// Create moment date object
const toMoment = (d) => moment.isMoment(d) ? d.clone() : moment(d);

// Join array into string helper (ignores empty parts cleanly)
const joinWith = (arr, sep) => arr.filter(Boolean).join(sep);

// Functions to generate links based on a date and supplied configuration
function makeLink(date, c) {
  const d = toMoment(date);
  const label = `${c.labelPrefix || ''}${d.format(c.labelFormat)}${c.labelSuffix || ''}`;
  const target = `${c.baseFolder}/${d.format(c.urlFormat)}`;

  switch ((c.urlStyle || 'Wikilinks').toLowerCase()) {
    case 'wikilinks': return `[[${target}|${label}]]`;
    case 'markdown':  return `[${label}](${target})`;
    default: throw new Error("Invalid link type. Use 'wikilinks' or 'markdown'.");
  }
}

// Apply relevant configuration / overrides to link generation 
function linkFor(date, level, overrides = {}) {
  return makeLink(date, { ...CONFIG[level], ...overrides });
}

// Calculate date hierarchy level for a date
function subPeriods(anchor, level) {
  const d = toMoment(anchor);
  const out = [];

  switch (level) {
    case 'years': {
      for (let i = 0; i < 4; i++) out.push(d.clone().add(i, 'quarters'));
      break;
    }
    case 'quarters': {
      for (let i = 0; i < 3; i++) out.push(d.clone().add(i, 'months'));
      break;
    }
    case 'months': {
      // ISO weeks that START within this month (Monday-based)
      let weekStart = d.clone().startOf('month').isoWeekday(1); // Monday of that week
      if (weekStart.month() !== d.month()) weekStart.add(7, 'days'); // ensure it's inside the month
      while (weekStart.month() === d.month()) {
        out.push(weekStart.clone());
        weekStart.add(7, 'days');
      }
      break;
    }
    case 'weeks': {
      for (let i = 0; i < 7; i++) out.push(d.clone().add(i, 'days'));
      break;
    }
    case 'days':
      break;
    default:
      throw new Error("Invalid level. Use 'years', 'quarters', 'months', 'weeks', or 'days'.");
  }
  return out;
}

// Build requested date hierarchy
function buildHierarchy(date, level, mode) {
  const d = toMoment(date);
  const idx = LEVELS.indexOf(level);
  if (idx === -1) throw new Error(`Unknown level '${level}'.`);

  const lastIdx = LEVELS.length - 1;

  if (mode === 'standard') {
    // Ancestors only: years › quarters › ... up to (but not including) current level
    const parentIdx = Math.max(0, idx - 1);
    if (idx === 0) {
      // No ancestors at top level; keep your original fallback behavior
      return d.format(CONFIG[level].labelFormat);
    }
    const levelsSlice = LEVELS.slice(0, parentIdx + 1); // inclusive parent
    const links = levelsSlice.map(lvl => linkFor(d, lvl, STANDARD_OVERRIDES[lvl] || {}));
    return links.join(' › ');
  }

  if (mode === 'up') {
    // Exactly one level up
    if (idx === 0) {
      // Already at top; mirror your original non-standard fallback
      return `[[${CONFIG[level].baseFolder}/${CONFIG[level].baseFolder}|${CONFIG[level].baseFolder}]]`;
    }
    const parentLevel = LEVELS[idx - 1];
    return linkFor(d, parentLevel);
  }

  if (mode === 'down') {
    // Exactly one level down (immediate children)
    if (idx === lastIdx) {
      // No lower subdivision
      return '';
    }
    const childLevel = LEVELS[idx + 1];
    const dates = subPeriods(d, level); // children at next level
    const links = dates.map(dt => linkFor(dt, childLevel, DOWN_OVERRIDES[childLevel] || {}));
    return links.join(' ⋮ ');
  }

  throw new Error("Invalid hierarchy mode. Use 'standard', 'up', or 'down'.");
}


// Public API 

/**
 * Create date navigation links for periodic notes
 * @param {string} date  - anchor date 'YYYY-MM-DD'
 * @param {string} level - 'years' | 'quarters' | 'months' | 'weeks' | 'days'
 * @param {string} type  - 'standard' (default) | 'up' | 'down' | 'last' | 'next' | 'link'
 * @return {string}
 */
function dateNav(date, level, type = 'standard') {
  const d = toMoment(date);
  if (!LEVELS.includes(level)) throw new Error(`Unknown level '${level}'.`);

  const base = CONFIG[level];

  switch (type) {
    case 'standard': {
      const prev = linkFor(d.clone().subtract(1, level), level, { labelPrefix: '❮❮ ' });
      const center = buildHierarchy(d, level, 'standard');
      const next  = linkFor(d.clone().add(1, level), level, { labelSuffix: ' ❯❯' });
      return `${prev} ⋮ ${center} ⋮ ${next}`;
    }
    case 'up':    return buildHierarchy(d, level, 'up');
    case 'down':  return buildHierarchy(d, level, 'down');
    case 'last':  return makeLink(d.clone().subtract(1, level), base);
    case 'next':  return makeLink(d.clone().add(1, level), base);
    case 'link':  return makeLink(d, base);
    default:
      throw new Error("Invalid type. Use 'standard', 'up', 'down', 'last', 'next', or 'link'.");
  }
}

module.exports = dateNav;
