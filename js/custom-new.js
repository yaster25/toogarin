 $(document).ready(function(){
     
     if($('.blog-item__text').length){
         $(".blog-item__text").dotdotdot({
            //height:60
        });         
     }
     if($('.article-nav__name').length){
         $(".article-nav__name").dotdotdot({
            //height:60
        });         
     }
     
     if($('#aside-blog').length){  
        
          var stickySidebar = new StickySidebar('#aside-blog', {
            topSpacing: 20,
            bottomSpacing: 20,
            containerSelector: '.section-blog-aside .wrapper',
            innerWrapperSelector: '.blog-aside'
          });
         
     }

     if($('#aside-article').length){  
        
          var stickySidebar = new StickySidebar('#aside-article', {
            topSpacing: 20,
            bottomSpacing: 20,
            containerSelector: '.section-article',
            innerWrapperSelector: '.aside-article-inner'
          });
         
     }
     
     if ($('.js-blog-slider').length) {
        $('.js-blog-slider').slick({
            dots: false,
            arrows:false, 
            infinite: true,           
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide:true, 

            responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2                  
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
    }
     
     
     $('[data-fancybox]').click(function() {  
          $.fancybox.close(); 
     });
     
    $('[data-fancybox]').fancybox({
        touch:false
    });
     
          
     

     
     
 });