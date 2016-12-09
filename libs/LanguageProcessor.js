const nlp = require('nlp_compromise');

var LanguageProcessor = function(value) {
  return nlp.text(value).sentences;
}

module.exports = LanguageProcessor;
