var colorProperties = {};

function createColors() {
  var html = "";

  var minHue = document.getElementById("minHue");
  colorProperties["minHue"] = parseInt(minHue.options[minHue.selectedIndex].value);
  
  var maxHue = document.getElementById("maxHue");
  colorProperties["maxHue"] = parseInt(maxHue.options[maxHue.selectedIndex].value);

  var minSaturation = document.getElementById("minSaturation");
  colorProperties["minSaturation"] = parseInt(minSaturation.options[minSaturation.selectedIndex].value);

  var maxSaturation = document.getElementById("maxSaturation");
  colorProperties["maxSaturation"] = parseInt(maxSaturation.options[maxSaturation.selectedIndex].value);

  var minLightness = document.getElementById("minLightness");
  colorProperties["minLightness"] = parseInt(minLightness.options[minLightness.selectedIndex].value);

  var maxLightness = document.getElementById("maxLightness");
  colorProperties["maxLightness"] = parseInt(maxLightness.options[maxLightness.selectedIndex].value);

  (document.documentElement.clientWidth < 800) ? j = 25 : j = 100;
  for (var i = 1; i <= j; i++) {
    var colorObject = new Color(colorProperties);
    var colorHTML = colorObject.toHTML();
    html += "<div class='number' style='background: " + colorHTML + "'>" + i + "</div>"
    var colorDiv = document.getElementById("colorOutput");
    colorDiv.innerHTML = html;
  }
}

createColors();
