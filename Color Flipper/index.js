const btn = document.getElementById("btn");
const span = document.getElementById("span");
const shadowElements = document.getElementsByClassName("shadow-elements");
const colors = ["#7d3c98", "#17a589", "#ec7063", "#0e6655", "#f4d03f"];

btn.addEventListener("click", function() {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  span.textContent = colors[randomNumber];

  for(i = 0; i < shadowElements.length; i++) {
    shadowElements[i].classList.add("border-elements");
  }

});

function getRandomNumber(){
  return (Math.floor(Math.random() * colors.length));
}