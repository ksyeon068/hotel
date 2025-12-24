$(window).on('scroll',function(){

    let scrollTop=$(window).scrollTop();
    //console.log(scrollTop)
    if(scrollTop >=300){
        $('#header').addClass('on');
    }else{
        $('#header').removeClass('on');
    }
});


$('.btnMenu').click(function(){
    $('.mobileHeader').animate({left: '100%'},500);
    $('.mobileMenu').animate({left: "0"},500);
});
$('.close').click(function(){
    $('.mobileHeader').animate({left: 0},500);
    $('.mobileMenu').animate({left: "-100%"},500);
});

let winW=$(window).innerWidth();
let winH=$(window).innerHeight();
let vidW=$('.m-video video').innerWidth();
let vidH=$('.m-video video').innerHeight();
$('.m-video').css({width:'100%', height: winH});
if(winW > vidW){
    $('.m-video video').css({width:'winW', height: 'auto'});
}
if(winH > vidH){
    $('.m-video video').css({width:'auto', height: winH});
}

$(window).resize(resizeFn);
function resizeFn(){
    let winW=$(window).innerWidth();
    let winH=$(window).innerHeight();
    let vidW=$('.m-video video').innerWidth();
    let vidH=$('.m-video video').innerHeight();
    $('.m-video').css({width:'100%', height: winH});
    if(winW > vidW){
        $('.m-video video').css({width:'winW', height: 'auto'});
    }
    if(winH > vidH){
        $('.m-video video').css({width:'auto', height: winH});
    }
}


//비디오 제어
let videoPlay="on"
let soundWuted="off"
$('.m-video video').get(0).autoplay=true;
$('.m-video video').get(0).loop=0;
$('.m-video video').get(0).muted=true;

$('.pauseIcon').click(function(){
    
    if(videoPlay==='on'){
       $('.pauseIcon').find('i').attr('class','fas fa-play')
       $('.m-video video').get(0).pause();
       videoPlay='off';
    }else{
         $('.pauseIcon').find('i').attr('class','fas fa-pause');
         $('.m-video video').get(0).play();
         videoPlay='on';
    }
})

$('.mutedIcon').click(function(){
    if(soundWuted=='off'){
        $('.mutedIcon').find('i').attr('class','fas fa-volume-mute');
        $('.m-video video').get(0).muted=false;
        soundWuted="on";
    }else{
        $('.mutedIcon').find('i').attr('class','fas fa-volume-up');
        $('.m-video video').get(0).muted=true;
        soundWuted="off";
    }
});

let nextTop=$('#section2').offset().top;
$('.nextIcon').click(function(){
    $(window).scrollTop(nextTop);
    return false;
});



//section3
const TrandingWrap=$('.tranding-wrap');
let offset=TrandingWrap.offset().left;
console.log(offset)

TrandingWrap.on({mousemove(e){
    //console.log(e.pageX)
/*     if(e.pageX >= 1920){
        return false;
    }else{ */
        $(this).css({left: -e.pageX})
   /*  } */
}})

let tr=true
$('.currency a').click(function(){
    if(tr===true){
        $('.currencys').css('display','block');
        tr=false;
    }else{
        $('.currencys').css('display','none');
        tr=true;
    }
});