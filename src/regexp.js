const Component = require('./Component');

const Regexp = function () {}

Regexp.prototype = new Component()
module.exports = new Regexp()

Regexp.prototype.render = () => {
    const html = `<webview src="https://regexr.com/"></webview>`
    return html
}