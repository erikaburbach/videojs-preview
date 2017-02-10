(function() {

  function nth_occurrence (string, char, nth) {
    var first_index = string.indexOf(char);
    var length_up_to_first_index = first_index + 1;

    if (nth == 1) {
        return first_index;
    } else {
        var string_after_first_occurrence = string.slice(length_up_to_first_index);
        var next_occurrence = nth_occurrence(string_after_first_occurrence, char, nth - 1);

        if (next_occurrence === -1) {
            return -1;
        } else {
            return length_up_to_first_index + next_occurrence;
        }
    }
}

function redirect(details) {
  var url=details.url;
  if (url.indexOf("://players.brightcove.net/") != -1 && url.indexOf("_default/index.") != -1 ){
    url =  url.replace("players.brightcove.net","preview-players.brightcove.net/v1/accounts");

    var middleHash =nth_occurrence(url,'/',6);
    var firstPart= url.slice(0,middleHash);
    var lastPart = url.slice(middleHash)
    url = (firstPart + "/players" + lastPart);

  url = url.replace("_default/index.min.js","/preview/embeds/default/master/index.js");
  url = url.replace("_default/index.js","/preview/embeds/default/master/index.js");
  url = url.replace("_default/index.html","/preview/embeds/default/master/index.html");
  return { redirectUrl: url }


}
}

chrome.webRequest.onBeforeRequest.addListener(
  redirect,{urls:["*://*.brightcove.net/*"]}, ["blocking"]
);

})();
