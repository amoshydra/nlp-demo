const nlp = require('nlp_compromise');
const jQuery = require('jQuery');
const jsonViewer = require('jsonViewer');

const inputForm = document.getElementById('inputForm');
const input = document.getElementById('input');
const output = document.getElementById('result');

inputForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let result = nlp.text(input.value);

  console.log(result.tags()[0]);
  console.log(result);

  jQuery('#json-renderer').jsonViewer(result.sentences);
});
