$(document).ready(function(){


    $('.navbar-right li').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    }); 


    $("div.about").hover(function(){
      $("div.about a").text("Get to know the basics of Permaculture!");
      $("div.about a").css("font-size", 32);
      $("div.about a").css("top", 90);
    }, function(){
      $("div.about a").text("What's Permaculture?");
      $("div.about a").css("font-size", 35);
      $("div.about a").css("top", 120);
    });

    $("div.near-you").hover(function(){
      $("div.near-you a").text("Courses, events, meetups! Find out what's going on near-you!");
      $("div.near-you a").css("font-size", 32);
      $("div.near-you a").css("top", 90);
    }, function(){
      $("div.near-you a").text("Permaculture Near You!");
      $("div.near-you a").css("font-size", 35);
      $("div.near-you a").css("top", 120);
    });

    $("div.tutorials").hover(function(){
      $("div.tutorials a").text("Hands-on how-to's for all the best Permie projects!");
      $("div.tutorials a").css("font-size", 32);
      $("div.tutorials a").css("top", 90);
    }, function(){
      $("div.tutorials a").text("Tutorials");
      $("div.tutorials a").css("font-size", 35);
      $("div.tutorials a").css("top", 120);
    });

    $("div.resources").hover(function(){
      $("div.resources a").text("Links, videos and more!");
      $("div.resources a").css("font-size", 32);
      $("div.resources a").css("top", 90);
    }, function(){
      $("div.resources a").text("Resources");
      $("div.resources a").css("font-size", 35);
      $("div.resources a").css("top", 120);
    });




});
