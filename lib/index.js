
const mimeTypes = require('./mime_types')

/**
 * Resolves a file extension to its respective MIME type.
 * 
 * @param {string} ext - The file extension
 * 
 * @return {string} MIME type for extension (if applicable), otherwise 
 *         'application/octet-stream', as the file extension given might exist 
 *         as a binary file.
 */
function mimeOf (ext)
{
	// Strip of potential period
	// TODO: use regular expression to strip of multiple periods
	if (ext[0] === '.')
		ext = ext.substring(1)
	
	return mimeTypes[ext] || 'application/octet-stream'
}

module.exports = {
	mimeOf: mimeOf
}
