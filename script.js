let img = [
  "./images/10.jpg",
  "./images/product-6.jpg",
  "./images/desktop-image-hero-1.jpg",
  "./images/desktop-image-hero-3.jpg ",
  "./images/desktop-image-hero-2.jpg",
];
let text1 = [
  "We are available all across the globe ",
  " Manufactured with the best materials ",
  "Discover innovative ways to decorate",
  " Manufactured with the best materials ",
  "Discover innovative ways to decorate",
];
let text2 = [
  " With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, were in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today ",
  " With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, were in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today ",
  " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  ` We provide unmatched quality, comfort, and style for property owners
 across the country. Our experts combine form and function in bringing
 your vision to life. Create a room in your own style with our
 collection and make your property a reflection of you and what you
 love.`,
  ` We provide unmatched quality, comfort, and style for property owners
 across the country. Our experts combine form and function in bringing
 your vision to life. Create a room in your own style with our
 collection and make your property a reflection of you and what you
 love.`,
];
i = 0;
let right = document.getElementById("right");
right.addEventListener("click", (eo) => {
  document.getElementById("changeimg").src = img[i];
  document.getElementById("textone").innerHTML = text1[i];
  document.getElementById("texttwo").innerHTML = text2[i];
  console.log(i);
  i++;

  if (i == img.length) {
    i = 0;
  }
});
let e = 4;

function ahmed() {
  document.getElementById("changeimg").src = img[e];
  document.getElementById("textone").innerHTML = text1[e];
  document.getElementById("texttwo").innerHTML = text2[e];

  e--;

  if (e < 0) {
    e = 4;
  }
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// t3awed
let index = 1;
const name = setInterval(() => {
  let aymen = "Everything is designed. Few things are designed well. ";
  welcome.innerText = aymen.slice(0, index);

  index++;
  if (index > aymen.length) {
    index = 60;
  }
  if (index > 59) {
    clearInterval(name);
  }
}, 80);

//scrol event

// const one = document.getElementById("beforscrol");
// const addd = () => {
//   if (document.documentElement.scrollTop >= 1400) {
//     one.classList.toggle("opacitybefor");
//     one.classList.add("opacityafter");
//   }
// // };

// window.addEventListener("scroll", addd);

// scrol upbtn
const upbtn = document.getElementById("upbtn");
const upbtn1 = () => {
  if (document.documentElement.scrollTop >= 600) {
    upbtn.classList.toggle("upbtnopacitybefor");
    upbtn.classList.add("upbtnopacityafter");
  }
  if (document.documentElement.scrollTop <= 600) {
    upbtn.classList.toggle("upbtnopacityafter");
    upbtn.classList.add("upbtnopacitybefor");
  }
};

window.addEventListener("scroll", upbtn1);

// //
// const imageprod = document.getElementById("imageprod");
// const imageprod1 = () => {
//   if (document.documentElement.scrollTop >= 3000) {
//     imageprod.classList.toggle("imageprodbefor");
//     imageprod.classList.add("imageprodafter");
//   }
// };

// window.addEventListener("scroll", imageprod1);
