
const expect = require('chai').expect
const mime = require('./../lib/index.js').mime
const mimeTypes = require('./../lib/mime-types')

describe('mime-types', function () {
	it('should not contain multiple entries inside a key', function () {
		for (let [key, ] of Object.entries(mimeTypes))
			expect(key.split(/\s+/)).to.have.lengthOf(1)
	})
})

describe('resolve-mime', function () {
	describe('#mime (ext)', function () {
		it('should resolve a file extensions to its respective MIME type', function () {
			// JSON
			let json
			
			json = mime('json')
			expect(json).to.equal('application/octet-stream')
			
			json = mime('.json')
			expect(json).to.equal('application/json')
			
			// JavaScript
			let javascript
			
			javascript = mime('js')
			expect(javascript).to.equal('application/octet-stream')
			
			javascript = mime('.js')
			expect(javascript).to.equal('application/javascript')
		})
		
		it('should resolve a file name and extension to a MIME type', function () {
			// JSON
			let json
			
			json = mime('file.json')
			expect(json).to.equal('application/json')
			
			// JavaScript
			let javascript
			
			javascript = mime('.js')
			expect(javascript).to.equal('application/javascript')
		})
		
		it('should be case insensitive', function () {
			// JSON
			let json
			
			json = mime('file.JSon')
			expect(json).to.equal('application/json')
			
			json = mime('.jSon')
			expect(json).to.equal('application/json')
			
			// JavaScript
			let javascript
			
			javascript = mime('.JS')
			expect(javascript).to.equal('application/javascript')
			
			javascript = mime('test.Js')
			expect(javascript).to.equal('application/javascript')
		})
		
		it('should return null if not recognized', function () {
			expect(mime('test.cooltext')).to.be.null
		})
	})
})
