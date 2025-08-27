<%*
// --- prompts ---
const wins = await tp.system.prompt("What are today's wins?", null, false, true);
const blockers = await tp.system.prompt("What's slowing me down?", null, false, true);
const learning = await tp.system.prompt("What did I learn today?", null, false, true);
const intentions = await tp.system.prompt("What’s one intention for tomorrow?", null, false, true);

const block = [
  `## Daily Reflection`,
  "",
  `**What are today's wins?**`,
  wins,
  "",
  `**What's slowing me down?**`,
  blockers,
  "",
  `**What did I learn today?**`,
  learning,
  "",
  `**What’s one intention for tomorrow?**`,
  intentions,
  ].join("\n");

tR += block
// Optionally, put cursor after the block:
-%>
