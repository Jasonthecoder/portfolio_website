/* Random Color Function
 * This function will generate a color of random hue, random saturation,
 * and random lightness. The hue's are completely random while the
 * saturations and the lightnesses are constrained so that the colors
 * are not too washed out by greys, whites, and blacks.
 *
 * The Color.toHTML() function returns the hsl() code for the color.
 * This can be used for CSS color codes.
 *
 * Properties:
 * -----------------------------------------------------
 * Color.minHue ----------> These values constrain the hues.
 * Color.maxHue ----------^
 * Color.minSaturation ---> These values constrain the saturation.
 * Color.maxSaturation ---^
 * Color.minLightness ----> These values constrain the lightness.
 * Color.MaxLightness ----^
 * Color.hue -------------> The hue of the color object
 * Color.saturation ------> The saturation of the color object.
 * Color.lightness -------> The lightness of the color object.
 *
 * Methods:
 * ------------------------------------------------------
 * Color.toHTML()
 *
 *
 */

function Color(colorProp) {
  this.minHue = colorProp.minHue === undefined ? 0 : colorProp.minHue;
  this.maxHue = colorProp.maxHue === undefined ? 360 : colorProp.maxHue;
  this.minSaturation = colorProp.minSaturation === undefined ? 40 : colorProp.minSaturation;
  this.maxSaturation = colorProp.maxSaturation === undefined ? 70 : colorProp.maxSaturation;
  this.minLightness =  colorProp.minLightness === undefined ? 40 : colorProp.minLightness;
  this.maxLightness = colorProp.maxLightness === undefined ? 70 : colorProp.maxLightness;

  this.randomColor();
}

Color.prototype.randomNumber = function(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1) ) + lower;
}

Color.prototype.randomColor = function() {
  this.hue = this.randomNumber(this.minHue, this.maxHue);
  this.saturation = this.randomNumber(this.minSaturation, this.maxSaturation);
  this.lightness = this.randomNumber(this.minLightness, this.maxLightness);
}

Color.prototype.toHTML = function() {
  var html = "hsl(";
  html += this.hue + ", ";
  html += this.saturation + "%, ";
  html += this.lightness + "%)";
  return html;
}