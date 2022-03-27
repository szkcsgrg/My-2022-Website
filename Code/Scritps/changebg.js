$(function() {
    var Project1 = $('.projectone').height(),
          Project2 = Project1 + $('.projecttwo').height(),
          Project3 = Project2 + $('.projectthree').height(),
          Project4 = Project3 +$('.projectfour').height(),
          Project5 = Project4 + $('.projectfive').height(),
          Project6 = Project5 + $('.projectsix').height();
    $(window).scroll(function () {
       if ($(this).scrollTop() > Project1) {
          $('body').addClass('project1');
       }
       if ($(this).scrollTop() < Project1) {
          $('body').removeClass('project1');
       }
       if ($(this).scrollTop() >Project2) {
          $('body').addClass('project2');
       }
       if ($(this).scrollTop() < Project2) {
          $('body').removeClass('project2');
       }
          if ($(this).scrollTop() > Project3) {
          $('body').addClass('project3');
       }
       if ($(this).scrollTop() < Project3) {
          $('body').removeClass('project3');
       }
       if ($(this).scrollTop() > Project4) {
        $('body').addClass('project4');
     }
     if ($(this).scrollTop() < Project4) {
        $('body').removeClass('project4');
     }
        if ($(this).scrollTop() > Project5) {
        $('body').addClass('project5');
     }
     if ($(this).scrollTop() < Project5) {
        $('body').removeClass('project5');
     }
     if ($(this).scrollTop() > Project6) {
        $('body').addClass('project6');
     }
     if ($(this).scrollTop() < Project6) {
        $('body').removeClass('project6');
     }
    });
 });
 
 
 