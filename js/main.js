// $(window).on('scroll', function (event) {
//     var scroll = $(window).scrollTop();
//     if (scroll <= 100) {
//         $(".main-header").removeClass("sticky");
//     } else {
//         $(".main-header").addClass("sticky");
//     }
// });
window.onscroll = () => {
    if (window.scrollY <= 100) {
        document.querySelector('header.main-header').classList.remove('sticky');
    } else {
        document.querySelector('header.main-header').classList.add('sticky');
    }
};