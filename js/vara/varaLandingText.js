console.log("Test")
// var vara = new Vara("#name-text", "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json", [{
//     text: "Kasia",
//     x: 20,
//     y: 20,
//     id: "fetch",
//     strokeWidth: 2
// }], {
//     fontSize: 46
// });
// vara.ready(function () {
//     var parent = document.querySelector("#name-text");
//     var svg = parent.querySelector("svg");
//     svg.setAttribute("width", parent.clientWidth);
//     svg.setAttribute("height", parent.clientHeight);
//     var container = vara.get("fetch").container;
//     vara.setPosition(container, {
//         x: 10,
//         y: 50,
//     }, {
//         x: true,
//         y: true
//     })
// })

var fontSize = 50;
if(window.screen.width < 700) 
  fontSize = 32;
else if(window.screen.width < 1200)
  fontSize= 56;
var vara = new Vara(
  "#hello",
  "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json",
  [
    {
      text: "Hello! I'm Katarzyna",
        y: 200,
    //   fromCurrentPosition: { y: false },
       duration: 3000
    },
    // {
    //   text: "Hi there,",
    //   y: 150,
    //   id: "no_erase",
    //   delay: 2000
    // },
    {
      text:
        "and I'm a developer.",
    //   y: 50,
    //   x: 50,
      //duration: 4000
    },
    // {
    //   text: "Check out my Github page",
    //   color: "#421e82",
    //   id: "github"
    // }
  ],
  {
    strokeWidth: 2,
    color: "white",
    fontSize: fontSize,
    textAlign: "center"
  }
);

