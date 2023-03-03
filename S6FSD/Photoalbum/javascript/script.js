var catPost = document.querySelector('.cat1');
var mainPage= document.querySelector('#main-page');
var instagramPost = document.querySelector('#instagram-post');
var body= document.querySelector('body');
var imgPopup = document.querySelector('.img-pop');
catPost.addEventListener('click', function() {
    console.log('cat post clicked');
    mainPage.classList.add('blurred');
    instagramPost.style.display = 'block';
    body.style.overflow = 'hidden';
    imgPopup.src=catPost.src;
});

var closeButton = document.querySelector('#close-button');
closeButton.addEventListener('click', function() {
    instagramPost.style.display = 'none';
    mainPage.classList.remove('blurred');
    body.style.overflow = 'auto';
});
/* 
var instagramPost = document.querySelector('.instagram-post');
var mainPage = document.querySelector('#main-page');
var body = document.querySelector('body');
closeButton.addEventListener('click', function() {
  instagramPost.style.display = 'none';
  mainPage.classList.remove('blurred');
  body.style.overflow = 'auto';
});

instagramPost.addEventListener('click', function(e) {
  e.stopPropagation();
});

mainPage.addEventListener('click', function() {
  instagramPost.style.display = 'none';
  mainPage.classList.remove('blurred');
  body.style.overflow = 'auto';
});

instagramPost.addEventListener('click', function(e) {
  e.stopPropagation();
}); */



        
        
        
        
        
        