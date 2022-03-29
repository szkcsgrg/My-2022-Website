$(".burger").removeClass("burger-active");
$("nav").removeClass("navigation");
function burgerO(){
    $(".navigation-menu").toggleClass("d-none");
    $(".burger").toggleClass("burger-active");
    $("nav").toggleClass("navigation");
}
