
const mimeTypes = require('./mime-types')
const path = require('path')

/**
 * Resolves a file extension to its respective MIME type.
 * 
 * @param {string} ext - The file extension
 * 
 * @return {string} MIME type for extension (if applicable), otherwise 
 *         'application/octet-stream', as the file extension given might exist 
 *         as a binary file.
 */
function mime (input)
{
	let ext
	
	if (input[0] === '.')
		ext = input.substring(1)
	else
	{
		ext = path.parse(input).ext
		
		if (ext === '')
			return 'application/octet-stream'
		
		ext = ext.substring(1)
	}
	
	ext = ext.toLowerCase()
	
	return mimeTypes[ext] || null
}

module.exports = {
	mime: mime
}
