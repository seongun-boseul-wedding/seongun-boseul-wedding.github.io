$(window).resize(function(){resizeYoutube();});
$(function(){resizeYoutube();});
function resizeYoutube(){ $("iframe").each(function(){ if( /^https?:\/\/www.youtube.com\/embed\//g.test($(this).attr("src")) ){ $(this).css("width","100%"); $(this).css("height",Math.ceil( parseInt($(this).css("width")) * 480 / 854 ) + "px");} }); }

function copyToClipBoard(copyValue) {
    const tempElement = document.createElement('textarea');
    document.body.appendChild(tempElement);
    tempElement.value = copyValue;
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
}

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('#go-to-top').click(function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
});


$('#mm').on('click', function () {
    copyToClipBoard(52932852102101);
    alert("복사되었습니다")
 });

 $('#mf').on('click', function () {
    copyToClipBoard(100019616514);
    alert("복사되었습니다")
 });

 $('#m').on('click', function () {
    copyToClipBoard(110306105382);
    alert("복사되었습니다")
 });

 $('#fm').on('click', function () {
    copyToClipBoard(17439256078723);
    alert("복사되었습니다")
 });

$('#ff').on('click', function () {
    copyToClipBoard(43802170616);
    alert("복사되었습니다")
 });

 $('#f').on('click', function () {
    copyToClipBoard(110464028453);
    alert("복사되었습니다")
 });
