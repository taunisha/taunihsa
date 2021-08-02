
    $('#vedcontent').hide(); // hide content while rendering

    $(document).ready(function()
    { // When page is fully loaded...
      $('.precontainer').hide(); // hide preloader
      $('#vedcontent').show(); // and show content

         // Script for Service Page starts here
   $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  $(window).scroll( function(){

    //document.getElementsByTagName("nav").toogleClass("xyz", 150);
    //$('#menubar').toogleClass("navbg", $(this).scrollTop() > 50);
    $('#menubar').toggleClass("navbg", ($(window).scrollTop() > 150));
    // if($(this).scrollTop() > 50){
    //   $('#menubar').addClass("navbg");
    // }
    
    

  }
  );

        
    });