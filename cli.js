var api = require('./api.js')

var text = process.argv[2]

api(text)
.then((dimensions) => console.log(JSON.stringify(dimensions)))

