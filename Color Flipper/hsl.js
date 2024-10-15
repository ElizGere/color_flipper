
const btn = document.getElementById("btn");
const span = document.getElementById("span");

btn.addEventListener("click", function() {
  const hue = getHue();
  const saturation = getSaturation();
  const lightness = getLightness();
  const hsl = "hsl(" + hue + "," + saturation + "%," + lightness + "%)";

  document.body.style.backgroundColor = hsl;
  span.textContent = hsl;

  let shadow = "";
    if(lightness >= 80) {
      shadow = lightness - 10;
    } else {
      shadow = lightness + 10;
    }
  const shadowHsl =  "hsl(" + hue + "," + saturation + "%," + shadow + "%)";
      
  const shadowElements = document.getElementsByClassName("shadow-elements");
  for(i = 0; i < shadowElements.length; i++){
    shadowElements[i].style.boxShadow = "8px 8px 16px " + shadowHsl + ",-8px -8px 16px " + shadowHsl;
  }

  const text = document.getElementsByClassName("colored-text");
  for(i = 0; i < text.length; i++) {
    if(lightness <= 30){
      text[i].style.color = "white";
    } else {
      text[i].style.color = "black";
    }
  }
});

function getHue() {
  return (Math.floor(Math.random() * 355));
}

function getSaturation() {
  return (Math.floor(Math.random() * 100));
}

function getLightness() {
  return (Math.floor(Math.random() * 100));
}








