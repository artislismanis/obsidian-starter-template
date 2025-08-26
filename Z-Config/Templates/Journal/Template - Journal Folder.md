<%*
// Read Templater plugin settings
const templater = tp.app.plugins.plugins["templater-obsidian"];
const templateFolder   = templater.settings.templates_folder;

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
// Prefer a file match; fall back to folder match
const byFile  = noteTypes.find(nt => moment(title, nt.format, true).isValid());
const byFolder = noteTypes.find(nt => moment(folderName, nt.format, true).isValid());
const match = byFile ?? byFolder;

// Stop processing if path doesn't match any patterns
if (!match) return;

// Get template based on the pattern matched
const templatePath = tp.obsidian.normalizePath(`${templateFolder}/${match.template}`);
const tfile = tp.file.find_tfile(templatePath);

// Apply the template to the matched file
templater.templater.append_template_to_active_file(tfile);
%>
