const myImage = document.querySelector("img")
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "first_web images/making_waves_discover.png") {
    myImage.setAttribute("src", "first_web images/map_gaoxin.jpg");
  } else {
    myImage.setAttribute("src", "first_web images/making_waves_discover.png");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let button666 = document.getElementById('666');
function setUserName() {
  let myName = prompt("Please enter your name.");
  while (!myName) {
    myName = prompt("you have to set a username.")
  }
  localStorage.setItem("name", myName);
  myHeading.textContent = `welcome, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = "Welcome, ${storedName}";
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
button666.addEventListener("click", ()=>{
  let anwers = prompt ("are you dumb?");

})
document.getElementById("name").innerText=111