var intialPath = `M 10 100 Q 250 100 490 100`;
var path = `M 10 100 Q 250 100 490 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  //dets does have the data of all movement in x or y acess
  path = `M 10 100 Q ${dets.x} ${dets.y} 490 100`;

  gsap.to("svg path",
    {
      attr:{ d: path },
      duration: 0.3,
      ease: "elastic.out(1,0.3)",
    });
});
string.addEventListener("mouseleave", function () {
  gsap.to("svg path",
    {
      attr:{ d: intialPath },
      duration: 1.5,
      ease: "elastic.out(1,0.3)",
    });
});
