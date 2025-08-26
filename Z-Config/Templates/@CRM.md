<%*
const templater = tp.app.plugins.plugins["templater-obsidian"].settings;
const templateFolder = templater.templates_folder;
const templatePrefix   = "Entity/Template - CRM - ";
const templateBasePath = `${templateFolder}/${templatePrefix}`;

// Define record types 
const GROUPS = {
  "Contact": {
    base: "2-Areas/@Contacts",
    types: ["individual", "team", "organisation"],
    prompt: "What type of contact is this?"
  },
  "Creator": {
    base: "3-Reference/@Creators",
    types: ["author", "publisher"],
    prompt: "What type of creator is this?"
  }
};

/** -------- Helpers -------- **/
const cap = (s) => tp.user.capitalise(s);
const normalisePath = (p) => tp.obsidian.normalizePath(p);

/** -------- Flow -------- **/
// 1) Choose group
const groupName = await tp.system.suggester(
  Object.keys(GROUPS),
  Object.keys(GROUPS),
  false,
  "What are you creating?"
);
if (!groupName) { new Notice("Cancelled", 3000); return; }

const group = GROUPS[groupName];

// 2) Choose type from that group
const contact_type = await tp.system.suggester(group.types, group.types, false, group.prompt);
if (!contact_type) { new Notice("Cancelled", 3000); return; }

// 3) Ask for name
const contact_name = await tp.system.prompt("What's the " + contact_type + "'s name?", "", true, false);
if (!contact_name) { new Notice("No name provided", 4000); return; }

// 4) Compute destination + template
const destination = normalisePath(`${group.base}/${cap(contact_type)}s`);
const templatePath = normalisePath(templateBasePath + cap(contact_type));
const tfile = tp.file.find_tfile(templatePath);

if (!tfile) {
  new Notice(`Template not found: ${templatePath}`, 6000);
  return;
}

// 5) Prevent duplicates, then create
const targetPath = `${destination}/${contact_name}.md`;
if (await tp.file.exists(targetPath)) {
  new Notice(`${cap(contact_type)} "${contact_name}" already exists`, 5000);
  return;
} else {
  await tp.file.create_new(tfile, contact_name, true, destination);
}
-%>
