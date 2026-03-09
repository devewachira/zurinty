jQuery(function ($) {

  /* Modifiable code starts here */

  //document ready run
  $(document).ready(function () {
    // vanilla JS
    // init with element



    if ($('body').hasClass('page-id-2768')) {
      var grid = document.querySelector('.grid');
      var msnry = new Masonry(grid, {
        // options...
        itemSelector: '.grid-item',
        columnWidth: 200,
        gutter: 10
      });

      // init with selector
      var msnry = new Masonry('.grid', {
        // options...
      });
    }

    $('#menu-item-3315 > a ').removeAttr('href');
    $('#menu-item-3316 > a ').removeAttr('href');
    $('#menu-item-3318 > a ').removeAttr('href');
    $('#menu-item-3319 > a ').removeAttr('href');


    jQuery('.threecol_col').click(function () { var linkdiv = jQuery(this).attr('data-linkdiv');  if(linkdiv){ window.location.href = jQuery(this).attr('data-linkdiv'); } });

    var scroll_position = jQuery(window).scrollTop();

    if (scroll_position > 1) {
      jQuery('header').addClass('on_scroll_header');

    } else {
      jQuery('header').removeClass('on_scroll_header');

    }
    $('header #primary-menu > li').click(function () {
      if ($(this).hasClass('open_sub')) {

        $(this).removeClass('open_sub');
      } else {
        $(this).addClass('open_sub');
      }
    });

    var widthWindow = $(window).width();
    if (widthWindow <= 880) {










    }

    $('.toggle').click(function () {
      $('body').toggleClass('openmenu');

    });


$('.clearbtn').click(function () {
       $('.wpp_search_select_field_city_att').val('-1');

      $('.wpp_search_select_field_listing_type').val('-1');

      $('.wpp_search_select_field_collections').val('');

     
      $(".search_b").trigger("click");
     

     

    });

    




    $('.teamContainer').click(function () {
      var justId = $(this).attr('data-bioID');
      var bioID = "#bioID_" + $(this).attr('data-bioID');
      $(bioID).slideToggle();


      $('.exit_bio').each(function () {

        if (justId == $(this).attr('data-bioID')) {
          $(this).addClass('exit_bioview');
        }
      });




    });
    $('.readContainer button').click(function () {
      var justId = $(this).attr('data-bioID');
      var bioID = "#bioID_" + $(this).attr('data-bioID');
      $(bioID).slideToggle();


      $('.exit_bio').each(function () {

        if (justId == $(this).attr('data-bioID')) {
          $(this).addClass('exit_bioview');
        }
      });




    });






    $('.spanexit').click(function () {

      var bioID = "#bioID_" + $(this).attr('data-bioID');
      $(bioID).slideToggle();
      $('.exit_bio').removeClass('exit_bioview');

      console.log('close');

    });


    $('.exit_bio').click(function () {

      var bioID = "#bioID_" + $(this).attr('data-bioID');
      $(bioID).slideToggle();
      $('.exit_bio').removeClass('exit_bioview');
      console.log('hello');
       $('body').removeClass('open_popup');

    });


   $('.portfolio_getquote_section .bgimgContainer img').each(function(){
       
    if ($(this).height() < $(this).parent().height()) {



     
      $(this).addClass('set_height_img');
      $(this).removeClass('set_width_img');
        $(this).parent().removeClass('set_center_img_vertical');

      if ($(this).width() < $(this).parent().width()) {
        $(this).parent().addClass('set_center_img');

       }
    }
});


    $(' .bgimgContainer img').each(function(){

       
    if ($(this).height() < $(this).parent().height()) {



     
      $(this).addClass('set_height_img');
      $(this).removeClass('set_width_img');
        $(this).parent().removeClass('set_center_img_vertical');

      if ($(this).width() < $(this).parent().width()) {
        $(this).parent().addClass('set_center_img');

       }
    }
});

       $(' .bg_video_container video').each(function(){

       
    if ($(this).height() < $(this).parent().height()) {



     
      $(this).addClass('set_height_img');
      $(this).removeClass('set_width_img');
        $(this).parent().removeClass('set_center_img_vertical');

      if ($(this).width() < $(this).parent().width()) {
        $(this).parent().addClass('set_center_img');

       }
    }
});

    

        $('.teamSlider_swiper .swiper-slide img').each(function(){

       
    if ($(this).height() < $(this).parent().height()) {



     
      $(this).addClass('set_height_img');
      $(this).removeClass('set_width_img');
        $(this).parent().removeClass('set_center_img_vertical');

      if ($(this).width() < $(this).parent().width()) {
        $(this).parent().addClass('set_center_img');

       }
    }
});

          $(' section').each(function(){

            var pad_top = parseInt(jQuery(this).css('padding-top'));
            var pad_bottom = parseInt(jQuery(this).css('padding-bottom'));

            var windowwidth = $(window).width();


            if(windowwidth < 880){



            if((pad_top > 100) && (pad_top < 160)){
              jQuery(this).css('padding-top','100px')
            }


            if((pad_bottom > 100) && (pad_bottom < 160) ){ 
              jQuery(this).css('padding-bottom','100px')
            }
          }


          }); 




        $(' .portfolio_Card_outer_container .portfolio_CardContent img').each(function(){

       
    if ($(this).height() < $(this).parent().height()) {



     
      $(this).addClass('set_height_img');
      $(this).removeClass('set_width_img');
        $(this).parent().removeClass('set_center_img_vertical');

      if ($(this).width() < $(this).parent().width()) {
        $(this).parent().addClass('set_center_img');

       }
    }
});

    

const myTimeout = setTimeout(myStopFunction, 500);




function myStopFunction() {
          $(' .bg_video_container video').each(function(){  
       
    if ($(this).height() < $(this).parent().height()) {



     
      $(this).addClass('set_height_img');
      $(this).removeClass('set_width_img');
        $(this).parent().removeClass('set_center_img_vertical');

      if ($(this).width() < $(this).parent().width()) {
        $(this).parent().addClass('set_center_img');

       }
    }
});


console.log($(this).height());
console.log($(this).parent().height());



}







$('.portfolioslider_swiper').each(function(){
  var propSliderId = $(this).attr('id');
  var navNextString = '#' + propSliderId + ' .swiper-button-next';
  var navPrevString = '#' + propSliderId + ' .swiper-button-prev';
  var multswiperString = '#' + propSliderId + '.portfolioslider_swiper';

  var swiper = new Swiper(multswiperString, {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: navNextString,
      prevEl: navPrevString,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false, // Change this to false
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      660: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      990: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }
  });

  swiper.el.addEventListener('mouseenter', function () {
    swiper.autoplay.stop();
  });

  swiper.el.addEventListener('mouseleave', function () {
    swiper.autoplay.start();
  });
});
jQuery(document).ready(function($) {
  $('.text_slider').each(function() {
    var $slider = $(this);
    var sliderId = $slider.attr('id');
    var $swiperContainer = $('#' + sliderId + ' .text_slider_Swiper');

    var isVertical = $slider.hasClass('vertical_textSlider');
    var $pagination = $('#' + sliderId + ' .swiper-pagination');
    var hasPagination = $pagination.length > 0;

    var swiperInstance = new Swiper($swiperContainer[0], {
      direction: isVertical ? 'vertical' : 'horizontal',
      slidesPerView: 1,
      loop: true,
      spaceBetween: 10,
      autoHeight: !isVertical,       // horizontal sliders auto-height
      slideToClickedSlide: true,
      grabCursor: isVertical,        // vertical sliders
      pagination: hasPagination ? {
        el: '#' + sliderId + ' .swiper-pagination',
        clickable: true
      } : false,
      navigation: !hasPagination ? { 
        nextEl: '#' + sliderId + ' .swiper-button-next',
        prevEl: '#' + sliderId + ' .swiper-button-prev'
      } : false
    });
  });
});

 var navNextString = '.videoslider_Slider .swiper-button-next';
  var navPrevString = '.videoslider_Slider .swiper-button-prev';


var videoslider_Slider = new Swiper(".videoslider_Slider", { 
  slidesPerView: 1,
        
       spaceBetween: 65,
        navigation: {
          nextEl: navNextString,
          prevEl: navPrevString,
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        //   dynamicBullets: true,
        // },
       
      }); 





var testimonial_swiper = new Swiper(".testimonial_swiper", { 
  slidesPerView: 3,
        spaceBetween: 50,
       
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
         loop: true,
           breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    // when window width is >= 480px
    560: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    // when window width is >= 640px
    767: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
      });

var testimonial_wide_swiper = new Swiper(".testimonial_wide_swiper", { 
  slidesPerView: 1,
  spaceBetween: 50,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
});

var swiper_slider3 = new Swiper(".portfolio_logoSlider", {
  slidesPerView: 5,
        spaceBetween: 15,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
	  





 var swiper = new Swiper(".timelineslider_swiper", {
      //pagination: '.swiper-pagination',
      slidesPerView: 3,
      spaceBetween: 50, 
      //paginationClickable: true,
      grabCursor: true,
    //  paginationClickable: true,
      nextButton: ".next-slide",
      prevButton: ".prev-slide",
       navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
         breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
     // paginationClickable: true,
      grabCursor: true,
    //  paginationClickable: true,
      nextButton: ".next-slide",
      prevButton: ".prev-slide",
    },
    // when window width is >= 480px
    560: {
      slidesPerView: 2,
      spaceBetween: 50,
//paginationClickable: true,
      grabCursor: true,
//paginationClickable: true,
      nextButton: ".next-slide",
      prevButton: ".prev-slide",
    },
    // when window width is >= 640px
    767: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
    });  


 
 $(".Job_accordian details summary").append('<span class="jobs_sum_button"><span class="jobs_sum_button_text"></span></span>');

$('.Job_accordian details').each(function( index ) {

  var position = $(this).find("summary h3").text();
  console.log(position); 

   console.log($(this).find(".Position_input")); 

$(this).find(".Position_input").val(position); 
$(this).find(".Position_input").text(position); 


 
});

  $(".concact_info_job_position input").val('');




$('.embed_three_col .devider_fourcol_inner div img').wrap('<div class="embed_imgwrap"></div>');
$('.embed_three_col .devider_threecol_inner div img').wrap('<div class="embed_imgwrap"></div>');


$(".devider  p > img").unwrap();
$('.embed_three_col .devider_fourcol_inner div .embed_imgwrap').unwrap();
$('.embed_three_col .devider_threecol_inner div .embed_imgwrap').unwrap();
$('.embed_three_col .devider_threecol_inner .embed_imgwrap img').wrap('<div class="embed_imgwrap"></div>');
$('.media_resource_green_box container').wrapInner('<div class="container_inner"></div>');    


$('.checkmarklist li').wrapInner('<span class=""></span>');     

 var s = skrollr.init({
    forceHeight:false,
    mobileCheck: function() {
      return false;
    }
   
  });  


 jQuery('details summary').click(function(){ 
    jQuery(this).toggleClass('open_accordion');
  });
jQuery('details summary').each(function() {
   var $Wrapper = jQuery(this).nextAll().wrapAll('<div class="det_sum_container"></div>').parent();
   // Hide elements that are not open by default
   if(!jQuery(this).parent('details').attr('open'))
      $Wrapper.hide();
   jQuery(this).click(function(Event) {
      Event.preventDefault();
      if(jQuery(this).parent('details').attr('open')) {
         $Wrapper.slideUp(function() {
            // Remove the open attribute after sliding so, so the animation is visible in browsers supporting the <details> element
            jQuery(this).parent('details').removeAttr('open');
         });
      } else {
         // Add the open attribute before sliding down, so the animation is visible in browsers supporting the <details> element
         jQuery(this).parent('details').attr('open', true);
         $Wrapper.slideDown();
      }
   });
});




    // $('#content').css('padding-top', $('header').css('height'));


window.almComplete = function(alm){
  console.log("Ajax Load More Complete!  sss");  




$('.resource_Card button').click(function(){
   console.log("taco");  
   var  resource_cookie_val = Cookies.get('resource_cookie'); 
    console.log(resource_cookie_val);  
     var data_file = $(this).attr('data-file');
    if(!resource_cookie_val){
      $('.resource_pop_container').slideDown(); 
      $('.resorce_pop_button a').attr('href',data_file);


    }else{

         console.log("download stuff"); 
         window.open(data_file, '_blank');
    }


});

      $(' .blog_Card_img img').each(function(){

       
    if ($(this).height() < $(this).parent().height()) {



     
      $(this).addClass('set_height_img');
      $(this).removeClass('set_width_img');
        $(this).parent().removeClass('set_center_img_vertical');

      if ($(this).width() < $(this).parent().width()) {
        $(this).parent().addClass('set_center_img');

       }
    }
});

            $(' .portfolio_CardContent img').each(function(){

       
    if ($(this).height() < $(this).parent().height()) {



     
      $(this).addClass('set_height_img');
      $(this).removeClass('set_width_img');
        $(this).parent().removeClass('set_center_img_vertical');

      if ($(this).width() < $(this).parent().width()) {
        $(this).parent().addClass('set_center_img');

       }
    }
});
            $(' .resource_Card_img img').each(function(){

       
    if ($(this).height() < $(this).parent().height()) {



     
      $(this).addClass('set_height_img');
      $(this).removeClass('set_width_img');
        $(this).parent().removeClass('set_center_img_vertical');

      if ($(this).width() < $(this).parent().width()) {
        $(this).parent().addClass('set_center_img');

       }
    }
});
                       $(' .Newblog_Card_img img').each(function(){

       
    if ($(this).height() < $(this).parent().height()) {



     
      $(this).addClass('set_height_img');
      $(this).removeClass('set_width_img');
        $(this).parent().removeClass('set_center_img_vertical');

      if ($(this).width() < $(this).parent().width()) {
        $(this).parent().addClass('set_center_img');

       }
    }
});
                         $(' .media_Card_inner button img').each(function(){

       
    if ($(this).height() < $(this).parent().height()) {



     
      $(this).addClass('set_height_img');
      $(this).removeClass('set_width_img');
        $(this).parent().removeClass('set_center_img_vertical');

      if ($(this).width() < $(this).parent().width()) {
        $(this).parent().addClass('set_center_img');

       }
    }
});





$('.resource_pop_container a').click(function(){
  $('.resource_pop_container ').slideUp(); 
});


$('.resource_pop_container .embed_you_x').click(function(){
  $('.resource_pop_container ').slideUp(); 
}); 


document.addEventListener( 'wpcf7submit', function( event ) {
    console.log("Fires only on the wpcf7submit event");
    $('.resource_pop_container .wpcf7').slideUp(); 
    $('.resource_pop_container .button_positions_stack').slideDown(); 
    $('.resource_pop_container h3').text('Thank you! Please download your file below.');
    Cookies.set('resource_cookie','true');  


}, false );


	

/** Scroll animation **/

 // AOS.init( disable: function() {
 //    var maxWidth = 860;
 //    return window.innerWidth < maxWidth;
 //  });

  AOS.init({
  disable: function() {
    var maxWidth = 860;
    return window.innerWidth < maxWidth;
  }
});



/** Scroll animation END **/

var windowHeight = $(window).height();
var HeaderHeight = $('header').css('height');
console.log();
var res = HeaderHeight.replace("px", "");
var headingHeight = windowHeight - res;

$('#multicolumn-block_6009ccd64766a').css('height',headingHeight);

$('#multicolumn-block_601052ee3e3cc').css('height',headingHeight);

$('#multicolumn-block_6010b3585c566').css('height',headingHeight);


$('#multicolumn-block_601085dfd5e1f').css('height',headingHeight);

$('#multicolumn-block_60107788c88f2').css('height',headingHeight);

$('#multicolumn-block_6010fd4b6243b').css('height',headingHeight);








}
  });
	


  //window resize
  $(window).resize(function () {



    // $('#content').css('padding-top', $('header').css('height'));


    var windowHeight = $(window).height();
var HeaderHeight = $('header').css('height');
console.log();
var res = HeaderHeight.replace("px", "");
var headingHeight = windowHeight - res;
$('#multicolumn-block_6009ccd64766a').css('height',headingHeight);

$('#multicolumn-block_601052ee3e3cc').css('height',headingHeight);

$('#multicolumn-block_6010b3585c566').css('height',headingHeight);

$('#multicolumn-block_601085dfd5e1f').css('height',headingHeight);

$('#multicolumn-block_60107788c88f2').css('height',headingHeight);

$('#multicolumn-block_6010fd4b6243b').css('height',headingHeight);





        $(' .portfolio_Card_outer_container .portfolio_CardContent img').each(function(){

       
    if ($(this).height() < $(this).parent().height()) {



     
      $(this).addClass('set_height_img');
      $(this).removeClass('set_width_img');
        $(this).parent().removeClass('set_center_img_vertical');

      if ($(this).width() < $(this).parent().width()) {
        $(this).parent().addClass('set_center_img');

       }
    }
});









  });


  //scroll Function
  $(window).scroll(function () {

    var scroll_position = jQuery(window).scrollTop();

    if (scroll_position > 1) {
      jQuery('header').addClass('on_scroll_header');

    } else {
      jQuery('header').removeClass('on_scroll_header');

    }


  });//scroll Function END 







});//end


document.addEventListener('DOMContentLoaded', function() {

  // Open modal on play button click
  document.querySelectorAll('.playbutton').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var id = btn.getAttribute('data-video');
      var modal = document.getElementById(id);
      var video = modal.querySelector('video');

      if(video && !video.src){
        video.src = video.dataset.src;
        video.load();
      }
      if(video) video.play();

      modal.style.display = 'flex';
      document.body.classList.add('open_popup');
    });
  });

  // Close modal on X button click
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('embed_you_x')) {
      var targetId = e.target.getAttribute('data-videoid');
      var modal = document.getElementById(targetId);
      var video = modal.querySelector('video');

      if(video){
        video.pause();
        video.currentTime = 0;
      }

      modal.style.display = 'none';
      document.body.classList.remove('open_popup');
    }
  });

});
