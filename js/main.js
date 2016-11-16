$(document).ready(function() {

    /*Делает анимация при скролле
    $('.section').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn', 
        offset: 100    
    });  */  

    // Добавляем кнопку на вверх
    $(window).scroll(function(){
        if ( $(document).scrollTop() > 0 ) {
            $('#scrollup').fadeIn('fast');
        } else {
            $('#scrollup').fadeOut('fast');
        }
    });

    // Скролим к самой шапке
    $("#scrollup").click(function () {
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: 0}, 1500);
        return false;
    });

    // Всплывающие окна для изображений
    $(".fancybox").fancybox();
    
    
    
    // $('.box').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     autoplay:true,
    //     nextArrow: '<a href="javascript:void(0);" class="arrow_next">></a>',
    //     prevArrow: '<a href="javascript:void(0);" class="arrow_prev"><</a>'
    // });
    
    // $(".menu a").click(function () {
    //     elementClick = $(this).attr("href");
    //     destination = $(elementClick).offset().top;
    //     $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500);
    //     return false;
    // });
    // $(".close").click(function(){
    //     $(".bg").slideUp();
    // });
    // $("form").submit(function(){
    //     var dat, fm, valid_name, valid_phone;
    //     fm = $(this);
    //     dat = fm.serialize();
    //     valid_name = fm.find('.validname');
    //     valid_phone = fm.find('.validphone');
    //     valid_name.css("border","1px solid #999");
    //     valid_phone.css("border","1px solid #999");
    //     if(valid_name.val().length>3 && valid_phone.val().length>3){
    //         $.post("mail.php", {dat:dat},function(data) {
    //             alert("Спасибо за заявку! Сотрудник компании свяжется с Вами в ближайшее время."); 
    //         });
    //     return false;
    //     }else{
    //         if(valid_name.val().length<3){
    //             valid_name.css("border","1px solid #EB1616");
    //             console.log('1');
    //         }            
    //         if(valid_phone.val().length<3){
    //             valid_phone.css("border","1px solid #EB1616");
    //             console.log('2');
    //         }
    //         return false; 
    //     }
    // });
});
$(document).mouseup(function (e) {
    var container = $(".bg");
    if (container.has(e.target).length === 0){
        container.fadeOut(600);
    }
});