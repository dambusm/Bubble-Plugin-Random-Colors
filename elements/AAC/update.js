function(instance, properties, context) {

  var hue;
  var luminosity;
  
  if (properties.hue) {
  hue = properties.hue.toLowerCase();
  }
  
  if (properties.luminosity) {
    luminosity = properties.luminosity.toLowerCase();
  }
  
  
  var color = randomColor({
    count: properties.num_colors,
    hue: hue,
    luminosity: luminosity,
    seed: properties.seed
  });
  
 // console.log(color);
  instance.publishState('color', color);

}