const Component = require('./Component');

const CodeIf = function () {}

CodeIf.prototype = new Component()
module.exports = new CodeIf()

CodeIf.prototype.render = () => {
    const html = `<webview src="https://unbug.github.io/codelf/"></webview>`
    return html
}