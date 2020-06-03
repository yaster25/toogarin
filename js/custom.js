$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */

 $(document).ready(function(){
     
      $(document).on("click", ".mobile-open", function (e) {
         $(this).next().slideToggle(300);
     });
     
     $(".menu-trigger").click(function(){         
         $(this).addClass('active');
         $('#fixed-panel').addClass('active');
         $('body').addClass('overflow');        
        return false;
    });  
     
     $('.fixed-panel__close').click(function(){         
         $(".menu-trigger").removeClass('active');
         $('#fixed-panel').removeClass('active');
         $('body').removeClass('overflow');        
        return false;
     });
     
     $('.scroll').click(function() {
         
          var target = $(this.hash);
          if (target.length) {
             var tt=target.offset().top;
           
            $('html, body').animate({
              scrollTop: tt
            }, 1500);
 
              
            return false;
          }

      });
     
     
     $('.item-pricelist__subtitle').matchHeight();
     $('.item-pricelist__text').matchHeight();
     $('.item-profit').matchHeight();
     //$('.vacancy-text__list').matchHeight();
     $('.block-price-seo .item-pricelist__title').matchHeight();
     $('.item-process__title').matchHeight();
     
   
     if ($('.js-slider-project').length) {
         
          $('.js-slider-project')
            .on('init', function(event, slick){
              
              if($(window).innerWidth()>991){
                 var h_slider=$('.section-projects').innerHeight();
                  var h_window=$(window).innerHeight();

                  if(h_slider>h_window){
                      var dif=h_slider-h_window;
                      var dif2=50-dif/2;
                      if(dif2>=0){
                            $('.section-projects').css('padding',dif2 );
                            //$('.section-projects').css('padding-bottom', dif2);
                      }else{
                          dif2=5;
                           $('.section-projects').css('padding',dif2 );
                           // $('.section-projects').css('padding-bottom', dif2);
                      }

                  }  
              }
              
              
             
                
               
            })
         
        $( window ).resize(function() {
              if($(window).innerWidth()>991){
                    $('.section-projects').css('padding-top','50px' );
                    $('.section-projects').css('padding-bottom', '50px');
                        var h_slider=$('.section-projects').innerHeight();
                        var h_window=$(window).innerHeight();

                          if(h_slider>h_window){
                              var dif=h_slider-h_window;
                              var dif2=50-dif/2;
                              if(dif2>=0){
                                    $('.section-projects').css('padding',dif2 );
                                    //$('.section-projects').css('padding-bottom', dif2);
                              }else{
                              dif2=5;
                               $('.section-projects').css('padding',dif2 );
                              //  $('.section-projects').css('padding-bottom', dif2);
                          }

                          }
                  }
                else{
                    $('.section-projects').css('padding','');
                }
            });
         
        
         $('.js-slider-project').on('init', function(event, slick){
            var bg=$('.slick-current').find('.item-case').attr('data-bg');            
            $('.section-projects').css('background-image', 'url('+bg+')');
        });
         
        $('.js-slider-project').slick({
            dots: true,
            arrows:false, 
            infinite: true,           
            slidesToShow: 1,
            slidesToScroll: 1,
        });
         
        $('.js-slider-project').on('afterChange', function(event, slick, currentSlide){
            var bg=$('.slick-current').find('.item-case').attr('data-bg');            
            $('.section-projects').css('background-image', 'url('+bg+')');
        });
         
    }
     
     var wow = new WOW({   
         offset:       20, 
         mobile:       false

      });
     wow.init();
     
    
      if ($('.js-slider-reviews').length) {
        $('.js-slider-reviews').slick({
            dots: true,
            arrows:false, 
            infinite: true,           
            slidesToShow: 3,
            slidesToScroll: 3,

            responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2                  
              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                    slidesToScroll: 1
              }
            }
          ]
        });
    }
     
     
    $(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content

	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});
     
     
      $('.portfolio-item').click(function() {          
          if($(this).hasClass('active')){
              $('.portfolio-item').removeClass('active');
          }else{
               $('.portfolio-item').removeClass('active');
              $(this).addClass('active');
          }         
          return false;
          
      });
     
     $('.js-portfolio-more').click(function() {          
         $(this).parents('.tab_content').find('.hidden').fadeIn();
         $(this).fadeOut();         
          return false;          
      });
     
     $('.aside-block__title').click(function() {          
            $(this).next('.aside-block__list').slideToggle();
            return false;          
      });
     
     
     if ($('.top-mobile-slider').length) {         
        $('.top-mobile-slider').slick({
            dots: true,
            arrows:false, 
            infinite: true,           
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true
            
        });
    }
     
     
     $('.item-mobile-num').hover(function() {
         
         if(!$(this).hasClass('active')){
             $('.item-mobile-num').removeClass('active');
             $('.block-mobile-num__col').removeClass('active');
            $(this).addClass('active');
             
             
             $('.block-mobile-num__col').width('calc(25% - 160px)');
             $(this).parents('.block-mobile-num__col').width('640px');
            $(this).parents('.block-mobile-num__col').addClass('active');
             
             if(window.innerWidth<992){
                 $('.block-mobile-num__col').width('calc(25% - 110px)');
                 $(this).parents('.block-mobile-num__col').width('440px');
             }
              if(window.innerWidth<768){
                 $('.block-mobile-num__col').width('calc(25% - 60px)');
                 $(this).parents('.block-mobile-num__col').width('240px');
             }
             if(window.innerWidth<640){
                 $('.block-mobile-num__col').width('100%');
                 $(this).parents('.block-mobile-num__col').width('100%');
             }
             
             
         }
         return false;
    });
     
     $(window).resize(function() {
        $('.item-mobile-num').removeClass('active');
        $('.block-mobile-num__col').removeClass('active');
          $('.block-mobile-num__col').css('width','');
    });
     

     
     if ($('.top-main-slider').length) {         
        $('.top-main-slider').slick({
            dots: true,
            arrows:false, 
            infinite: true,           
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true
            
        });
    }
     
     
     $('.item-main-num').hover(function() {
         
         if(!$(this).hasClass('active')){
             $('.item-main-num').removeClass('active');           
             $(this).addClass('active');
             var id=$(this).attr('data-id');
            $('.block-main-num__bg').fadeOut();
             $('.block-main-num__bg-'+id).fadeIn();
         }
         return false;
    });
     
     $('.js-btn-form-map').click(function() {         
        $('.block-form-map-contact').hide();
        $('.block-form-map-map').fadeIn();
         
         return false;
    });
     
     $('.block-form-map__close').click(function() {
         $('.block-form-map-contact').fadeIn();
        $('.block-form-map-map').hide();
         return false;
    });

     
     $('.nav-item_parent').hover(function() {
        var this_nav='';
        this_nav=$(this).find('.nav-subnav-w').html();
         $('.header-subnav').html('');
        $('.header-subnav').stop().html(this_nav).slideDown();
         $(this).addClass('hover');      
         return false;
     },  function() {

          var hovered = $(".header-subnav:hover").length;
            if(hovered){
            }else{
                $('.header-subnav').stop().slideUp();
                $('.nav-item_parent').removeClass('hover');
            }        
         return false;
    });
     
     
     
     
     $('.header-subnav').hover(function() {
     },  function() {   
          $('.header-subnav').stop().slideUp();
          $('.nav-item_parent').removeClass('hover');
         return false;
    });
    
     
     if($('.js-scrollbox').length){
         $('.js-scrollbox').mCustomScrollbar();
     }
     
     $('.js-popup-start-project').click(function() {     
         $.fancybox.open({
                src  : '#popup-start-project',
                type : 'inline',
                opts : {
                    touch :false,
                    afterShow : function( instance, current ) {
                        
                    }
                }
        });
         return false;
     });
     
     
    $('.js-popup-start-consult').click(function() {     
         $.fancybox.open({
                src  : '#popup-start-consult',
                type : 'inline',
                opts : {
                    touch :false,
                    afterShow : function( instance, current ) {
                        
                    }
                }
        });
         return false;
     });
    $('.js-popup-thank').click(function() {  
          $.fancybox.close();
         $.fancybox.open({
                src  : '#popup-thank',
                type : 'inline',
                opts : {
                    touch :false,
                    afterShow : function( instance, current ) {
                        console.info( 'done!' );
                    }
                }
        });
         return false;
     });
     
    $('.js-close-popup').click(function() {  
          $.fancybox.close();         
         return false;
     });
     
     
    $(".vacancy-content").hide(); //Hide all content
    $("ul.vacancy-tabs li:first").addClass("active").show(); //Activate first tab
    $(".vacancy-content:first").show(); //Show first tab content

    //On Click Event
    $("ul.vacancy-tabs li").click(function() {
        $("ul.vacancy-tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".vacancy-content").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });
     
     $(".vacancy-content ul.vacancy-subtabs li").click(function() {
        $(this).parents(".vacancy-subtabs").find('li').removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(this).parents(".vacancy-content").find(".vacancy-subcontent").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });
     

     
     if ($('.slider-example-audit').length) {
        $('.slider-example-audit').slick({
            dots: true,
            arrows:true, 
            infinite: true,           
            slidesToShow: 1,
            slidesToScroll: 1,
            appendArrows: $('.slider-example-nav'),
            appendDots: $('.slider-example-nav'),
        });
    }
     
     if ($('.slider-reviews-smm').length) {
        $('.slider-reviews-smm').slick({
            dots: true,
            arrows:false, 
            infinite: true,           
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
     
     
     
 });




(function($) {
    
    $(document).ready(function() {
       // "use strict";
        var officeMap = function() {

            var map;
            var geoLocation = new google.maps.LatLng(55.726375,37.399429);
           // var geoLocation = new google.maps.LatLng(55.7260346,37.3973107);

            var style = [{
                featureType: "all",
                elementType: "all",
                stylers: [{
                        saturation: -100,
                        visibility: "on"
                    } // <-- THIS
                ]
            }];

            var mapOptions = {
                zoom: 16,
                scrollwheel: false,
                center: geoLocation,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'officeMap']
                },
                disableDefaultUI: true
            };

            map = new google.maps.Map(document.getElementById("officeMap"), mapOptions);

            var mapType = new google.maps.StyledMapType(style, {
                name: "Р§/Р‘"
            });
            map.mapTypes.set('officeMap', mapType);
            map.setMapTypeId('officeMap');
            var marker = new google.maps.Marker({
                position: geoLocation,
                map: map,
                title: 'TOOGARIN.RU',
                label: {
                    color: '#000000',
                    text: 'Горбунова улица, 2',
                  },
                icon: {
                labelOrigin: new google.maps.Point(100, 22),
                url: 'img/map-marker.png',
                size: new google.maps.Size(25, 44),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(25, 44),
              },
            });
  
        };
        
        if($('#officeMap').length){
            officeMap();
        }
    });
    
   
})(jQuery);

   var xCategories = ['Ноя 17', 'Дек 17', 'Янв 18', 'Фев 18', 'Мар 18', 'Апр 18', 'Май 18'];

if($('#highcart').length){
  var chart = new Highcharts.Chart({
    chart: {
        type: 'area',
       // margin: [0,0,80,0],
        spacing:[0,0,0,0],
        backgroundColor:'#F2f2f2',
        borderColor:'#e1e1e1',
        renderTo: 'highcart',
    },
    title: {
     text: '',
        enabled: false
    },
    subtitle: {
        //text: 'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
           // 'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
          //  'armscontrol.org</a>'
    },
    xAxis: {
       gridLineWidth:1, 
        lineWidth: 0,
       // allowDecimals: false,
        // categories: ['Ноя 17', 'Дек 17', 'Янв 18', 'Фев 18', 'Мар 18', 'Апр 18', 'Май 18'],
        labels: {
                formatter: function() {
                    return xCategories[this.value];
                }
            },
       startOnTick: false,
            endOnTick: false,
            minPadding: 0,
            maxPadding: 0,
            
            gridLineWidth: 1
    },
   
    credits: {
        enabled: false
    },
    yAxis: {
       min: 0,
                title: {
                    text: ''
                },

                labels: {
                    enabled: false
                },
                minorTickLength: 0,
                tickLength: 0
    },
    legend:{
        itemStyle:{
        color:'#747474',
        fontSize:'14px',
        fontWeight:'normal',
      
        }
    },

    exporting: {
        enabled: false,
            buttons: {
                
                contextButton: {
                    menuItems: [{
                        text: 'Export to PNG (small)',
                        onclick: function () {
                            this.exportChart({
                                width: 250
                            });
                        }
                    }, {
                        text: 'Export to PNG (large)',
                        onclick: function () {
                            this.exportChart();
                        },
                        separator: false
                    }]
                }
            }
        },
    tooltip: {
       // pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
           // pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'Яндекс',
        color:'#79ca4f',
        fillOpacity:0.9,
        data: [
            50, 30, 40, 60, 70, 80, 70
        ]
    },{
        name: 'Google',
        color:'#ffca10',
              fillOpacity:0.9,
        data: [
            10, 20, 30, 20, 30, 40, 30
        ]
    },{
        name: 'Rambler',
        color:'#e86065',
        fillOpacity:0.9,
        data: [
          5, 15, 15, 10, 5, 15, 25
        ]
    },{
        name: 'Mail.ru',
        //color:'#ffca10',
        fillOpacity:0.9,
        data: [
            10, 10, 5, 10, 15, 10, 15
        ]
    },{
        name: 'Bing',
        //color:'#ffca10',
        fillOpacity:0.9,
        data: [
           5, 10, 5, 10, 3, 10, 20
        ]
    }]
});

   
}


