/*  
 *  JavaScripts
 */


/*
 *  when a page is rendered 
 */  
$(window).load(function() {
  
  // FlexSlider
  $('.flexslider').flexslider();

  // Drop Menu
  $('.dropmenu select').change(function(){
    var urlpath = "/" + $(this).val();
    $(location).attr('href',urlpath);    
  });
  
});


/*
 *  When all assets such as images have been completely received
 */
$(document).ready(function(){ 

  // Nice Menu mobile fix
  $('nav ul.nice-menu > li > ul').css("visibility", "hidden");
  $('nav ul.nice-menu > li.menu-2709 > a').click(function(){
    var visibility = $('nav ul.nice-menu > li.menu-2709 > ul').css("visibility");
    if (visibility == "hidden") {$('nav ul.nice-menu > li.menu-2709 > ul').css("visibility", "visible");}
    else {$('nav ul.nice-menu > li.menu-2709 > ul').css("visibility", "hidden");}
    return false
  });
});

