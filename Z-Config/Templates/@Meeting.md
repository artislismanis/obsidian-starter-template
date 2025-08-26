<%* 
// Read Templater plugin settings
const templater = tp.app.plugins.plugins["templater-obsidian"].settings;
const templateFolder   = templater.templates_folder;

// Get meeting template
const templateName = "Journal/Template - Meeting.md"
const templatePath = tp.obsidian.normalizePath(`${templateFolder}/${templateName}`);
const tfile = tp.file.find_tfile(templatePath);

// Get daily config from Periodc Notes plugin
const pn = tp.app.plugins.plugins['periodic-notes'].settings;
const dailyPath = pn.daily.format.substr(0, pn.daily.format.lastIndexOf("\/"))
const dailyBaseFolder = pn.daily.folder

// Get basic meeting details 
const meeting_date = await tp.system.prompt("What's the meeting date?", tp.date.now("YYYY-MM-DD") , true, false)
const meeting_title = await tp.system.prompt("What's the meeting title?", "", true, false)
const note_name  = `${meeting_date} - ${meeting_title}`

let destination = tp.obsidian.normalizePath(`${dailyBaseFolder}/${moment(meeting_date).format(dailyPath)}`)

//If file already exists, stop processing
if (await tp.file.exists(`${destination}/${note_name}.md`)) {
	new Notice("Meeting note already exists", 5000)
	return;
} else {
	await tp.file.create_new(tfile, note_name, true, destination)
}
%>