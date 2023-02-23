document.getElementById("anihead").addEventListener("mouseover", function() 
{
    document.getElementById("anihead").style.color = "red ";
});

document.getElementById("anihead").addEventListener("mouseout", function() {
    document.getElementById("anihead").style.color = "black";
});
var secp=document.getElementsByTagName("p")[1];
secp.addEventListener("click",function()
{
    secp.style.backgroundColor="grey";
    secp.style.color="white";
    secp.innerHTML="(Clicked)Then I started watching Attack on Titan, One Punch Man, Death Note, Jujitsu Kaisen, Demon Slayer, and many more.";
});

var thirdp=document.getElementsByTagName("p")[2];
thirdp.addEventListener("dblclick",function()
{
    thirdp.innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. (Double Clicked)";
});

var lastp=document.getElementsByTagName("p")[4];
lastp.addEventListener("dblclick",function()
{
    lastp.style.fontWeight="bold";
});

var firstp=document.getElementsByTagName("p")[0];
firstp.addEventListener("click",function()
{
    firstp.style.borderStyle="solid";
});

const liElements = document.querySelectorAll('.myList li');

liElements.forEach(li => {
  li.addEventListener('click', function() {
    liElements.forEach(el => {
      el.style.fontStyle = 'italic';
    });
  });
});
window.addEventListener('resize', function() {
    document.title = 'New ANime';
  });

window.addEventListener('resize', function() {
    const newImg = document.createElement('img');
    newImg.src = 'https://media.tenor.com/MzaiHA_y0kIAAAAM/thank-you-thanks.gif';
    document.body.appendChild(newImg);
  });

  window.addEventListener('resize', function() {
    firstp.innerHTML=" "
  });



const img = document.querySelector(".grayscale-on-click");

img.addEventListener('click', function() {
  Caman(img, function() {
    this.greyscale();
    this.render();
  });
});
function setup() {
    const img = loadImage('photo-1464820453369-31d2c0b651af.jpeg', function() {
      createCanvas(img.width, img.height);
      image(img, 0, 0);
    });
    
    img.doubleClicked(function() {
      loadPixels();
      for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] = 255;
      }
      updatePixels();
    });
  }


  