var processor = require('./languageProcessor');

var results = processor('hello world');

results.forEach(function(result) {
  console.log(`Input string: \n >> ${result.str} \n`);
  result.terms.forEach(function(term) {
    console.log(term);
  });
  console.log('\n');
});
