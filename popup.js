

function nightModeOn(e) {
  chrome.tabs.executeScript(null,
      {code:'document.getElementById("shadow").style.display = "block"; document.getElementById("masthead-positioner").style.zIndex = "100"; document.getElementById("player-api").style.zIndex = "200";'});
}

function nightModeOff(e) {
  chrome.tabs.executeScript(null,
      {code:'document.getElementById("shadow").style.display = "none";'});
}

function topModeOn(e) {
  chrome.tabs.executeScript(null,
      {code:'var x = document.getElementById("but");x.style.display = "inline"; x.classList.add("topButton");'});
}

function topModeOff(e) {
  chrome.tabs.executeScript(null,
      {code:'var x = document.getElementById("but"); x.style.display = "none"; x.classList.remove("topButton");'});
}


document.addEventListener('DOMContentLoaded', function () {
  var ele = document.getElementById('on');
  ele.addEventListener('click', nightModeOn);

  var ele = document.getElementById('off');
  ele.addEventListener('click', nightModeOff);

  var ele = document.getElementById('topOn');
  ele.addEventListener('click', topModeOn);

  var ele = document.getElementById('topOff');
  ele.addEventListener('click', topModeOff);
});
