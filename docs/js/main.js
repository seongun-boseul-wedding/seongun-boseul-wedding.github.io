$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('#go-to-top').click(function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
});