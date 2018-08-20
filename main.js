// @todo instead of paragraphs, grab any dom element with > 3 chars of text in it.
function getParagraphs() {
  var paragraphs = document.querySelectorAll("p");
  var results = [];
  var seen = {};
  for (var i  = 0; i < paragraphs.length; ++i) {
    var text = paragraphs[i].textContent;

    results.push({ length: text.length, text: text });
  }
  return results;
};

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  sendResponse(getParagraphs());
});

// @todo loop through results, assign each paragraph into a group
// @todo load colors for lengths & add css class to paragraphs accordingly