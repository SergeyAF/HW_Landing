$( function() {
    navOpener();

    $( ".tabs" ).tabs();
    $('.slik-slider').slick({
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      dots: true
    });
  } );

  function navOpener () {
    $('.nav-opener').on('click', function(){
      if($('header').hasClass('active')){
        $('header').removeClass('active')    
      }else{
        $('header').addClass('active');
      }
    });
  }