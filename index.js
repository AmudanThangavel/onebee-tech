const buttonRight = document.getElementById("slideRight");
const buttonLeft = document.getElementById("slideLeft");

buttonRight.onclick = function () {
  document.getElementById("container").scrollLeft += 600;
};
buttonLeft.onclick = function () {
  document.getElementById("container").scrollLeft -= 600;
};


