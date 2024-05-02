var typingdesign = new Typed(".textanimation", {
  strings: ["Web Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 3000,
});
var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};
var navbar = document.getElementById("nav-bar");

navbar.addEventListener("click", navclick);
function navclick(event) {
  var navactive = document.querySelectorAll(".active");
  navactive.forEach((tab) => {
    tab.classList.remove("active");
  });
  var content = document.querySelectorAll(".content");
  content.forEach((page) => {
    page.classList.remove("content-active");
  });

  event.target.parentElement.className += "active";
  var id = event.target.href.split("#")[1];
  var page = document.getElementById(id);
  page.classList.add("content-active");
}

function button1() {
  var school = document.getElementById("school");
  var college = document.getElementById("college");
  var btn2 = document.getElementById("btn2");
  var btn1 = document.getElementById("btn1");

  school.style.display = "none";
  college.style.display = "block";
  btn2.style.display = "block";
  btn1.style.display = "none";
}

function button2() {
  var school = document.getElementById("school");
  var college = document.getElementById("college");
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");

  school.style.display = "block";
  college.style.display = "none";
  btn1.style.display = "block";
  btn2.style.display = "none";
}
var bar = document.querySelector(".bar");
var clickbar = document.querySelector("nav ul");
bar.addEventListener("click", () => {
  clickbar.classList.toggle("navulactive");
});
