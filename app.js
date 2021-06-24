function menuchange(){
    var menubar1=document.querySelector('#bar1')
    var menubar2=document.querySelector('#bar2')
    var menubar3=document.querySelector('#bar3')
    var ul=document.querySelector('ul')
    menubar1.classList.toggle('bar1change')
    menubar2.classList.toggle('bar2change')
    menubar3.classList.toggle('bar3change')
    ul.classList.toggle('ulchange')
    }

    window.addEventListener('scroll',animation) 
    var heading=document.querySelectorAll('#hometext')
    var homepageimg=document.querySelectorAll('#homepage img')
    var aboutustext=document.querySelectorAll('#aboutustext')
    var photosimg=document.querySelectorAll('.photosimg')
    var statsdiv=document.querySelectorAll('#stats div')
    var eventscardscard=document.querySelectorAll('#events #cards .card')
    var year=document.querySelectorAll('.year')
    function animation(){
      for (var i=0;i<heading.length;i++){
        if (elementInViewport(heading[i])){
          heading[i].classList.add('headingS')
        }
      }
      for (var i=0;i<homepageimg.length;i++){
        if (elementInViewport(homepageimg[i])){
          homepageimg[i].classList.add('homepageimgS')
        }
      }
      for (var i=0;i<aboutustext.length;i++){
        if (elementInViewport(aboutustext[i])){
          aboutustext[i].classList.add('aboutustextS')
        }
      }
      for (var i=0;i<photosimg.length;i++){
        if (elementInViewport(photosimg[i])){
          photosimg[i].classList.add('photosimgS')
        }
      }
      for (var i=0;i<statsdiv.length;i++){
        if (elementInViewport(statsdiv[i])){
          statsdiv[i].classList.add('statsdivS')
        }
      }
      for (var i=0;i<eventscardscard.length;i++){
        if (elementInViewport(eventscardscard[i])){
          eventscardscard[i].classList.add('eventscardscardS')
        }
      }
      for (var i=0;i<year.length;i++){
        if (elementInViewport(year[i])){
          year[i].classList.add('yearS')
        }
      }
    }
     function elementInViewport(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
    
        while(el.offsetParent) {
          el = el.offsetParent;
          top += el.offsetTop;
          left += el.offsetLeft;
        }
    
        return (
          top >= window.pageYOffset &&
          left >= window.pageXOffset &&
          (top + height) <= (window.pageYOffset + window.innerHeight) &&
          (left + width) <= (window.pageXOffset + window.innerWidth)
        ); 
      }