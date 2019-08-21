// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

$(function(){
//WOW & Animate css plugin
  new WOW().init();

//trigger the nicescroll
  $("body").niceScroll({
  cursorcolor:"#00a8ff",
  cursorwidth:"8px",
  cursorborder:"#00a8ff"
  });

//typed js
  var typed = new Typed(".typed", {
  strings: ["I Am Mohamed Abd El Khalek", "Front-End Developer"],
  smartBackspace: true,
  typeSpeed:30,
  backSpeed:30,
  loop: true,
  loopCount: Infinity
  });

//fit text
  $('.about-me').fitText(2.2,{
    minFontSize: '35px',
     maxFontSize: '55px' 
  });

   $('.card-title').fitText(1.2,{
    minFontSize: '25px',
    maxFontSize: '40px' 
  });

  $('.header h3').fitText(1.5,{
    minFontSize: '15px',
    maxFontSize: '25px' 
  });

  $('.skills h1').fitText(2.2,{
    minFontSize: '30px',
    maxFontSize: '40px' 
  });

  $('.services h1').fitText(2.2,{
    minFontSize: '30px',
    maxFontSize: '40px' 
  }); 
  
  $('.services .items h4').fitText(2.2,{
    minFontSize: '20px',
    maxFontSize: '30px' 
  }); 

  $('.work h1').fitText(1.2,{
    minFontSize: '25px',
    maxFontSize: '40px' 
  });

  $('.work .modal .modal-title').fitText(1.6,{
    minFontSize: '20px',
    maxFontSize: '30px' 
  });

  $('.work .modal .modal-body h4').fitText(1.6,{
    minFontSize: '15px',
    maxFontSize: '20px' 
  });

  $('.contact h1').fitText(2,{
    minFontSize: '30px',
    maxFontSize: '40px' 
  });

//owlCarousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive : {
    // breakpoint from 0 up
    0 : {
      items:1
    },
    // breakpoint from 480 up
    768 : {
      items:2
    },
    // breakpoint from 768 up
    992 : {
      items:3
    }
}

  }); 

});