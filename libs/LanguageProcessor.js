const nlp = require('nlp_compromise');

var processLanguage = function(value) {
	return nlp.text(value).sentences;
};

module.exports = processLanguage;
