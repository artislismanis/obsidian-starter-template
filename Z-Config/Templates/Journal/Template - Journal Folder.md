<%*
// Read Templater plugin settings
const templaterPlugin = app.plugins.plugins["templater-obsidian"];
const templateFolder   = templaterPlugin.settings.templates_folder;

// Map Templater templates to Periodic Notes file naming pattern for each period
const noteTypes = [
  { format: "YYYY-MM-DD", template: "Journal/Template - Daily Note.md" },
  { format: "GGGG-[W]WW", template: "Journal/Template - Weekly Note.md" },
  { format: "YYYY-MM",   template: "Journal/Template - Monthly Note.md" },
  { format: "YYYY-[Q]Q", template: "Journal/Template - Quarterly Note.md" },
  { format: "YYYY",      template: "Journal/Template - Yearly Note.md" },
];

// Get path details
const title      = tp.file.title;
const folderPath = tp.file.folder(true) || "";
const folderName = folderPath.split("/").pop() || "";

// Check if path elements match the defined patterns 
const match = noteTypes.find(nt =>
  moment(title, nt.format, true).isValid() ||
  moment(folderName, nt.format, true).isValid()
);

// Stop processing if path doesn't match any patterns
if (!match) return;

// Get template based on the pattern matched
const templatePath = `${templateFolder}/${match.template}`;
const tfile = app.vault.getAbstractFileByPath(templatePath);

if (!tfile) {
  const msg = `Template not found\n${templatePath} does not exist.`;
  new Notice(msg);
  console.error(msg);
  return;
}

// Apply the template to the matched file
templaterPlugin.templater.append_template_to_active_file(tfile);
%>
