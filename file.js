$(document).ready(function(){
   $('nav span.icon').click(function(){
      
       $('nav .contaner .list ul').slideToggle();
       
   });
    
    $(window).scroll(function(){
       
        if($(this).scrollTop() > 40){
            $('nav').css('background-color','white')
        }
        else{
            $('nav').css('background-color','transparent')
        }
        
    });
    
    $('.projects .row .box').hover(function(){
        $(this).find('.text').fadeIn();
        
    },function(){
                                   

          $(this).find('.text').fadeOut();                    
        
    
        
        
    });
    
    
    $(' nav .contaner .list ul li').click(function(){
       
       
        
        var index=$(this).index();
        
        if(index == 0){
         
        $("body , html").animate({
            scrollTop:$('header').offset().top
        });
        
        }
        
        if(index == 1){
         
        $("body , html").animate({
            scrollTop:$('div.about').offset().top
        });
        
        }
        
        if(index == 2){
         
        $("body , html").animate({
            scrollTop:$('div.skills').offset().top
        });
        
        }
        
        if(index == 3){
         
        $("body , html").animate({
           scrollTop:$('div.projects').offset().top
        });
        
        }
        
        if(index == 4){
         
        $("body , html").animate({
            scrollTop:$('div.contact').offset().top
        });
        
        }
        
        $(this).css('color','#0075f6');
        $(this).siblings().css('color','black')
        
      
        
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});