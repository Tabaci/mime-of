
const expect = require('chai').expect
const resolve = require('./../lib/index.js').resolve

describe('resolve-mime', function () {
	describe('#resolve (ext)', function () {
		it('should resolve to a file extensions respective MIME type when called', function () {
			// JSON
			let json
			
			json = resolve('json')
			expect(json).to.equal('application/json')
			
			json = resolve('.json')
			expect(json).to.equal('application/json')
			
			// JavaScript
			let javascript
			
			javascript = resolve('js')
			expect(javascript).to.equal('application/javascript')
			
			javascript = resolve('.js')
			expect(javascript).to.equal('application/javascript')
			
			/* TODO: add one test per file extension available to make sure none 
			 *       are wrong. Also make sure to document the 'sources' as for 
			 *       why the given file extenson has the MIME type.
			 *
			 *       On many occasions, there are multiple MIME types set as for 
			 *       one file extension (e.g. application/javascript, 
			 *       application/x-javascript). For some, slightly more obscure, 
			 *       file extensions, there may be entries in the MIME types 
			 *       object that are not up to date with the current standards.
			 */
		})
	})
})
