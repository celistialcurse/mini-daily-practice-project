var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image= document.querySelector("#image")
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration:0.2
    
    
  });
});

image.addEventListener("mouseenter", function () {

  gsap.to(cursor, {
   scale:3
  })
})
image.addEventListener("mouseleave", function () {

   gsap.to(cursor, {
    scale:1
   })
 })
