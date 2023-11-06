window.addEventListener('resize', function () {
  // Get the current viewport height
  const viewportHeight = window.innerHeight;

  // Minimum height threshold
  const minHeight = 600; // Adjust this value as needed

  // Check if the viewport height is less than the minimum height
  if (viewportHeight < minHeight) {
    // Do something to prevent elements from moving up, e.g., hide or adjust their position
    // You can add your custom logic here
  }
});

const scrollButton = document.querySelector(".scroll-top");

// Function to toggle the scroll button visibility
function toggleScrollButton() {
  if (window.scrollY > document.querySelector("header").offsetHeight) {
    scrollButton.classList.add("active");
  } else {
    scrollButton.classList.remove("active");
  }
}

// Add a scroll event listener to call the toggleScrollButton function
window.addEventListener("scroll", toggleScrollButton);

// Scroll to the top when the button is clicked
scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Add smooth scrolling behavior
  });
});


var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = "-130px";
        navbar.classList.remove("navbar-white"); // Remove the white background class
    } else {
        // Scrolling up
        navbar.style.top = "0";
        navbar.classList.add("navbar-white"); // Add the white background class
    }

    // Check if the user has scrolled back to the top
    if (scrollTop <= 0) {
        navbar.classList.remove("navbar-white"); // Remove the white background class
    }

    lastScrollTop = scrollTop;
});


$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('nav').toggleClass('active');
     $('.brand').toggleClass('active');
      $('ul').toggleClass('active');
      $('li').toggleClass('active');
      $('.bar').toggleClass('active');
      $('.bar').toggleClass('active');
      $('.bar').toggleClass('active');
  });
});

const cursor = document.querySelector('.cursor');
let e; // Declare e outside of the event listeners

document.addEventListener('mousemove', (event) => {
    e = event; // Store the event object in the variable e
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
});


document.addEventListener('scroll', () => {
    if (e) {
        const scrollY = window.scrollY || window.pageYOffset;
        cursor.style.top = `${scrollY + e.clientY - 10}px`; // Adjust the Y position as needed
    }
});


window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealTwo);

function revealTwo(){
  var reveals = document.querySelectorAll('.reveal-2');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealThree);

function revealThree(){
  var reveals = document.querySelectorAll('.reveal-3');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}


const text = document.querySelector(".circle-text p");
text.innerHTML = text.innerText.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${i * 8.}deg)">${char}</span>`
).join('');


const text2 = document.querySelector(".circle-text-2 p");
text2.innerHTML = text2.innerText.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${i * 8.2}deg)">${char}</span>`
).join('');

const h = document.querySelector("#h");
const b = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    h.style.transform = `
        perspective(90vw)
        rotateX(${ y * 4  + 65}deg)
        rotateZ(${ -x * 12  + 45}deg)
        translateZ(-9vw)
    `;
}

b.addEventListener("pointermove", base);


const adobeLink = document.getElementById("adobeLink");
const adobeIcon = document.getElementById("adobeIcon");

adobeLink.addEventListener("mouseenter", function() {
  adobeIcon.setAttribute("color", "#ffffff"); 
  adobeIcon.style.transition = "color 0.5s"; 
});

adobeLink.addEventListener("mouseleave", function() {
  adobeIcon.setAttribute("color", "#ea6b21"); 
});
