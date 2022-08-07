const panel = document.getElementById('panel');
const page = document.getElementById('main-page');
const heroContent = document.querySelector('.hero-content');
const hero = document.querySelector('.hero');
const br = document.getElementById('brCust');
const br2 = document.getElementById('brCust2');
const br3 = document.getElementById('brCust3');
const br4 = document.getElementById('brCust4');
const newsletter = document.getElementById('news');
var body = document.body,
    html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );
var height2 = document.documentElement.scrollHeight;
var height3 = document.documentElement.clientHeight;
var reqHeight = height/3;
var reqHeight2 = height2/3;
var reqHeight3 = height3/3;

history.scrollRestoration = 'manual';
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
}

function closePanel(){
  const {bottom} = panel.getBoundingClientRect();
  panel.style.marginBottom = 0 + "px";
  panel.addEventListener("transitionend", () => panel.replaceWith());
  
  setTimeout(() => {
    panel.style.marginBottom = `${-bottom}px`;
    panel.style.transform = `translateY(${-bottom}px)`;
  }, 0);
}

function myFunction(){
  if(window.innerWidth !== undefined && window.innerHeight !== undefined) { 
    var w = window.innerWidth;
    var h = window.innerHeight;
  } else {  
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
  }
  var width = w;
  if(width<=605){
      br.classList.remove("brCust");
  }
  else{
      br.classList.add("brCust");
  }
}

window.addEventListener("resize",function(){
  if(window.innerWidth<420){
    br2.classList.remove('brCust2');
  }
  else br2.classList.add('brCust2');
})

var scrollFunc = function(){
    var y = window.scrollY;
    if(y>reqHeight3){
      newsletter.classList.add('news-animation');
    }
};

let closed = localStorage.getItem('news-closed');
if(closed){
    news.classList.add('news-animation2');
}

function closeNews(){
    news.classList.add('news-animation2');
    setTimeout(news.classList.remove('news-animation'),1000);
}
  
window.addEventListener("scroll",scrollFunc);