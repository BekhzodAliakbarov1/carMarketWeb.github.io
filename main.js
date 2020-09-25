$('.navbar').click(function(){
    $('.navbar-infor').toggleClass('navbar-infor-opacity');
})

$('.cards1 .main').on('click',function(){
    $('.cards1 .main').addClass('main-rotate');
    $('.cards1 .last').removeClass('last-rotate-second');
    $('.cards1 .last').addClass('last-rotate-main');
    $('.cards1 .second').removeClass('second-rotate');
})
$('.cards1 .second').on('click', function(){
    $('.cards1 .second').addClass('second-rotate');
    $('.cards1 .last').removeClass('last-rotate-main');
    $('.cards1 .last').addClass('last-rotate-second');
    $('.cards1 .main').removeClass('main-rotate');
})
$('.cards1 .last').on('click', function(){
    $('.cards1 .last').removeClass('last-rotate-main');
    $('.cards1 .last').removeClass('last-rotate-second');
    $('.cards1 .main').removeClass('main-rotate');
    $('.cards1 .second').removeClass('second-rotate');
})


$('.cards2 .main').on('click',function(){
    $('.cards2 .main').addClass('main-rotate');
    $('.cards2 .last').removeClass('last-rotate-second');
    $('.cards2 .last').addClass('last-rotate-main');
    $('.cards2 .second').removeClass('second-rotate');
})
$('.cards2 .second').on('click', function(){
    $('.cards2 .second').addClass('second-rotate');
    $('.cards2 .last').removeClass('last-rotate-main');
    $('.cards2 .last').addClass('last-rotate-second');
    $('.cards2 .main').removeClass('main-rotate');
})
$('.cards2 .last').on('click', function(){
    $('.cards2 .last').removeClass('last-rotate-main');
    $('.cards2 .last').removeClass('last-rotate-second');
    $('.cards2 .main').removeClass('main-rotate');
    $('.cards2 .second').removeClass('second-rotate');
})
