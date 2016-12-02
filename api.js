var Nightmare = require('nightmare')
var path = require('path')

const renderHtml = path.normalize(path.join(__dirname, './measure.html'))

module.exports = (input) => {
  /* Nightmare Options */
  var nightmare = Nightmare({
    plugins: true,
    allowDisplayingInsecureContent: true,
    allowRunningInsecureContent: true
  })
  /* Open page in nightmare and read svg result */

  return Promise.resolve(nightmare
    .goto(path.join('file://', renderHtml))
    .evaluate(function (text) {
      return measureText(text)
    }, [input])
    .end())
}
