$(document).ready(function () {
    $('.hambuger').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $(this).siblings(".navbar").toggleClass("open")
    });
});