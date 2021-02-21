function checkWA() {

if(!sessionStorage.getItem("winsArray")){
  if(document.querySelector("#ticketbuttons").textContent.includes("Page 1 /")) {
document.querySelectorAll(".NTL span").forEach(function (win) {
var winNumber=win.getAttribute("data-id");
        console.log(winNumber,"current");
      var winsArray=[];
      winsArray.push(win.getAttribute("data-id"));
sessionStorage.setItem("winsArray",JSON.stringify(winsArray));
  win.style.color="black";

});
console.log(sessionStorage.getItem("winsArray"), "arrayFinal");
}

  console.log("setted");
}
}

function changeColor() {
  if(document.querySelector("#ticketbuttons").textContent.includes("Page 1 /")) {
checkWA();
document.querySelectorAll(".NTL span").forEach(function (win) {
//  if(!win.textContent.includes("*")){
    if(!sessionStorage.getItem("winsArray").includes(win.getAttribute("data-id"))){
      console.log(win.getAttribute("data-id"), "new");
      var winsArray=JSON.parse(sessionStorage.getItem("winsArray"));
      winsArray.push(win.getAttribute("data-id"));
sessionStorage.setItem("winsArray",JSON.stringify(winsArray));
  win.style.color="#ff3333";
  }
//  }
});
console.log(sessionStorage.getItem("winsArray"), "arrayFinal");
}
}
