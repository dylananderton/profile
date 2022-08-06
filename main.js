const panel = document.getElementById('panel');
const page = document.getElementById('main-page');
const heroContent = document.querySelector('.hero-content');
const hero = document.querySelector('.hero');
const br = document.getElementById('brCust');

function closePanel(){
  panel.classList.add('panel-animation');
  page.classList.add('page-animation');
  setTimeout(panel.style.transform = "translateY(-1000px)",1000);
  setTimeout(page.style.top = "0",1000);
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