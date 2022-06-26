// $(".burger").removeClass("burger-active");
// $("nav").removeClass("navigation");
// function burgerO(){
//     $(".navigation-menu").toggleClass("d-none");
//     $(".burger").toggleClass("burger-active");
//     $("nav").toggleClass("navigation");
// }

function burgerO(){
    $(".navigation-menu").toggleClass("d-show");
    $(".navigation-menu").toggleClass("d-not");
    $("nav").toggleClass("navigation");
    $(".burger").toggleClass("burger-active");  
}