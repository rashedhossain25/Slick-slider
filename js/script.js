
//jq code

$(document).ready(function(){
//slickslider


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.wrapper'
  });
  
    $('.wrapper').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows:false,
  
      //variable with
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
  
      //auto play
      autoplay: true,
      autoplaySpeed: 2000,
  
      //slider Syncing
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
  
      //responsiveness
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:false
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
      
    });

});