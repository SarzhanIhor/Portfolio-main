$(document).ready(function(){
    $('.carousel').slick({
      dots: true,
      arrows: false,
      infinite: true, 
      autoplay: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});