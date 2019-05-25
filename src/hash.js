const crypto = require('crypto')
const Component = require('./Component');

const Hash = function () {}

Hash.prototype = new Component()

Hash.prototype.inputChange = function(e) {
    const text = e.target.value

    const md5 = crypto.createHash('md5').update(text, 'utf8').digest('hex')
    document.getElementById('md5-output').innerText = md5

    const sha1 = crypto.createHash('sha1').update(text, 'utf8').digest('hex')
    document.getElementById('sha1-output').innerText = sha1

    const sha256 = crypto.createHash('sha256').update(text, 'utf8').digest('hex')
    document.getElementById('sha256-output').innerText = sha256

    const sha512 = crypto.createHash('sha512').update(text, 'utf8').digest('hex')
    document.getElementById('sha512-output').innerText = sha512
}

Hash.prototype.registerEvent = function() {
    document.querySelector('#text-input').addEventListener('change', this.inputChange)
}

Hash.prototype.render = function () {
    const html = `
    <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
        <h3 class="hash-heading">Input</h3>
        <textarea rows="2" id="text-input" class="form-control text-input" placeholder="Enter text and see it hashed..."></textarea>
    </div>
    </div>

    <!-- MD5 row -->
    <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h3 class="hash-heading">MD5</h3>
        <pre id="md5-output" class="hash-output"> </pre>
    </div>
    </div>

    <!-- SHA-1 row -->
    <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h3 class="hash-heading">SHA-1</h3>
        <pre id="sha1-output" class="hash-output"> </pre>
    </div>
    </div>

    <!-- SHA-256 row -->
    <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h3 class="hash-heading">SHA-256</h3>
        <pre id="sha256-output" class="hash-output"> </pre>
    </div>
    </div>

    <!-- SHA-512 row -->
    <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h3 class="hash-heading">SHA-512</h3>
        <pre id="sha512-output" class="hash-output"> </pre>
    </div>
    </div>`

    return html
}

module.exports = new Hash();
