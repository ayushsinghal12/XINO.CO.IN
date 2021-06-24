    window.addEventListener('scroll',animation) 
    var year=document.querySelectorAll('.year')
    function animation(){
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