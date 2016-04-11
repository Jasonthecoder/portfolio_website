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
  currentSetting,
  tempProps;

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
    tempProps = defaultProps;
    tempProps.minLightness = 70;
    tempProps.maxLightness = 90;
    createColors(tempProps);
  });
  $("#all_lighter").on("click", function(){
    tempProps = defaultProps;
    tempProps.minLightness = 60;
    tempProps.maxLightness = 80;
    createColors(tempProps);
  });
  $("#all").on("click", function(){
    tempProps = defaultProps;
    tempProps.minLightness = 40;
    tempProps.maxLightness = 70;
    createColors(tempProps);
  });
  $("#all_darker").on("click", function(){
    tempProps = defaultProps;
    tempProps.minLightness = 30;
    tempProps.maxLightness = 50;
    createColors(tempProps);
  });
  $("#all_darkest").on("click", function(){
    tempProps = defaultProps;
    tempProps.minLightness = 20;
    tempProps.maxLightness = 40;
    createColors(tempProps);
  });

  $("#warm_lightest").on("click", function(){
    tempProps = warmProps;
    tempProps.minLightness = 70;
    tempProps.maxLightness = 90;
    createColors(tempProps);
  });
  $("#warm_lighter").on("click", function(){
    tempProps = warmProps;
    tempProps.minLightness = 60;
    tempProps.maxLightness = 80;
    createColors(tempProps);
  });
  $("#warm").on("click", function(){
    tempProps = warmProps;
    tempProps.minLightness = 40;
    tempProps.maxLightness = 70;
    createColors(tempProps);
  });
  $("#warm_darker").on("click", function(){
    tempProps = warmProps;
    tempProps.minLightness = 30;
    tempProps.maxLightness = 50;
    createColors(tempProps);
  });
  $("#warm_darkest").on("click", function(){
    tempProps = warmProps;
    tempProps.minLightness = 20;
    tempProps.maxLightness = 40;
    createColors(tempProps);
  });

  $("#cool_lightest").on("click", function(){
    tempProps = coolProps;
    tempProps.minLightness = 70;
    tempProps.maxLightness = 90;
    createColors(tempProps);
  });
  $("#cool_lighter").on("click", function(){
    tempProps = coolProps;
    tempProps.minLightness = 60;
    tempProps.maxLightness = 80;
    createColors(tempProps);
  });
  $("#cool").on("click", function(){
    tempProps = coolProps;
    tempProps.minLightness = 40;
    tempProps.maxLightness = 70;
    createColors(tempProps);
  });
  $("#cool_darker").on("click", function(){
    tempProps = coolProps;
    tempProps.minLightness = 30;
    tempProps.maxLightness = 50;
    createColors(tempProps);
  });
  $("#cool_darkest").on("click", function(){
    tempProps = coolProps;
    tempProps.minLightness = 20;
    tempProps.maxLightness = 40;
    createColors(tempProps);
  });

})();