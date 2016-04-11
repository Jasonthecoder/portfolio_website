(function(){

var
  defaultProps = {
    minHue: 0,
    maxHue: 360,
    minSaturation: 40,
    maxSaturation: 70,
    minLightness: 40,
    maxLightness: 70
  },
  warmProps = {
    minHue: -10,
    maxHue: 70,
    minSaturation: 40,
    maxSaturation: 70,
    minLightness: 40,
    maxLightness: 70
  },
  coolProps = {
    minHue: 120,
    maxHue: 260,
    minSaturation: 40,
    maxSaturation: 70,
    minLightness: 40,
    maxLightness: 70
  },
  currentSetting = defaultProps;

  function createColors(colorProp) {
    var html = "";
    var colorObject;
    currentSetting = colorProp;
    for ( var i = 1; i <= 100; i++ ) {
      colorObject = new Color(currentSetting);
      colorHTML = colorObject.toHTML()
      html += "<div class='number' style='background: " + colorHTML + "; '>" + i + "</div>";
    }
    $("#colorOutput").html(html);
  }  

  $(createColors);
  
  $("#all_lightest").on("click", function(){
    createColors({
      minHue: 0,
      maxHue: 360,
      minSaturation: 40,
      maxSaturation: 70,
      minLightness: 70,
      maxLightness: 90
    });
  });
  $("#all_lighter").on("click", function(){
    createColors({
      minHue: 0,
      maxHue: 360,
      minSaturation: 40,
      maxSaturation: 70,
      minLightness: 60,
      maxLightness: 80
    });
  });
  $("#all").on("click", function(){
    createColors(defaultProps);
  });
  $("#all_darker").on("click", function(){
    createColors({
      minHue: 0,
      maxHue: 360,
      minSaturation: 40,
      maxSaturation: 70,
      minLightness: 30,
      maxLightness: 50
    });
  });
  $("#all_darkest").on("click", function(){
    createColors({
      minHue: 0,
      maxHue: 360,
      minSaturation: 40,
      maxSaturation: 70,
      minLightness: 20,
      maxLightness: 30
    });
  });

  $("#warm_lightest").on("click", function(){
    createColors({
      minHue: -10,
      maxHue: 70,
      minSaturation: 40,
      maxSaturation: 70,
      minLightness: 70,
      maxLightness: 90
    });
  });
  $("#warm_lighter").on("click", function(){
    createColors({
      minHue: -10,
      maxHue: 70,
      minSaturation: 40,
      maxSaturation: 70,
      minLightness: 60,
      maxLightness: 80
    });
  });
  $("#warm").on("click", function(){
    createColors(warmProps);
  });
  $("#warm_darker").on("click", function(){
    createColors({
      minHue: -10,
      maxHue: 70,
      minSaturation: 40,
      maxSaturation: 70,
      minLightness: 30,
      maxLightness: 50
    });
  });
  $("#warm_darkest").on("click", function(){
    createColors({
      minHue: -10,
      maxHue: 70,
      minSaturation: 40,
      maxSaturation: 70,
      minLightness: 20,
      maxLightness: 30
    });
  });

  $("#cool_lightest").on("click", function(){
    createColors({
      minHue: 120,
      maxHue: 260,
      minSaturation: 40,
      maxSaturation: 70,
      minLightness: 70,
      maxLightness: 90
    });
  });
  $("#cool_lighter").on("click", function(){
    createColors({
      minHue: 120,
      maxHue: 260,
      minSaturation: 40,
      maxSaturation: 70,
      minLightness: 60,
      maxLightness: 80
    });
  });
  $("#cool").on("click", function(){
    createColors(coolProps);
  });
  $("#cool_darker").on("click", function(){
    createColors({
      minHue: 120,
      maxHue: 260,
      minSaturation: 40,
      maxSaturation: 70,
      minLightness: 30,
      maxLightness: 50
    });
  });
  $("#cool_darkest").on("click", function(){
    createColors({
      minHue: 120,
      maxHue: 260,
      minSaturation: 40,
      maxSaturation: 70,
      minLightness: 20,
      maxLightness: 30
    });
  });

})();