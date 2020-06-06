let filePath = 'rules.txt';
let headerRE = /(- - - .* - - -)/;

$(document).ready(function () {
    loadRules(filePath, headerRE);
});

/* loads rules text into rules section */
function loadRules(filePath, headerRE) {
    let rules = loadFile(filePath, headerRE).split(headerRE);
    console.log(rules);
    rulesDOM = $('#rules');
    rulesDOM.append('<h1 class="centered">Rift Worlds Rules</h1>');
    rules.forEach(function(rule, idx) {
        if (rule.match(headerRE)) {
            /* adds header as <h2> */
            rulesDOM.append('<h2 class="centered">'+rule.replace(/- - -/g, '')+'<h2>');
            /* adds the content of the header as <p>*/
            if ((idx+1) < rules.length) {
                rulesDOM.append('<p>'+rules[idx+1].trim().replace(/\n\n/g, '<br>')+'</p>');
            }
        }
    });

    rulesDOM.append(getReturnButton());
}

/* reads from rules.txt */
function loadFile(filePath, headerRE) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}
