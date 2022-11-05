const BannerImg = ["url(images/bimg1.jpg)", "url(images/bimg2.jpg)", "url(images/bimg3.jpg)", "url(images/bimg4.jpg)", "url(images/bimg5.jpg)", "url(images/bimg6.jpg)"];
let imgc = Math.floor(Math.random() * 6);
console.log(imgc);
let x = document.getElementById("banner");
x.style.backgroundImage = BannerImg[imgc];            