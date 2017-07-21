function setup(){
    createCanvas(2000,2000)
    background("blue")
}

// function mosuedragged(){
//     // Drag the mouse across the page
// // to change its value

// var value = 0;
// function draw() {
//   fill(value);
//   rect(50, 50, 100, 100);
// }
// function mouseDragged() {
//   value = value + 5;
//   if (value > 255) {
//     value = 0;
//   }
  function mouseDragged() {
  triangle(mouseX, mouseY, 50, 50)
  // prevent default
  return false;
};