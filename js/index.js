$(document).ready(function() {
    // setInterval(function() {
    //   $('.content').fadeOut(1000, function() {
    //     $('.content').fadeOut(1000).html().fadeOut(1000,  function() {
    //         $('.content').html("FRUIT PULPS").fadeIn(1000)
    //       })
    //   });
    // }, 2000);
 function main_animate(){
     $('.content1').fadeIn(2000,function(){
        $('.content1').html("Hairstylist.")
     }).fadeOut(2000).fadeIn(2000,function(){
        $('.content1').html("Haircutter.")
     }).fadeOut(2000).fadeIn(2000,function(){
        $('.content1').html("Osanyintuyi Damilola Emmanuel.")
     }).fadeOut(2000,function(){
        main_animate()
     })
 }
    
 
main_animate()



  });