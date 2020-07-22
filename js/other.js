jQuery(document).ready(function () {
    /* ========================================================================
     * fancybox
     * ======================================================================== */
    $('.certificatesLevel_list a').fancybox();
    /* ========================================================================
     * owl.carousel
     * ======================================================================== */
    $(".header_top_menu_mobile").on('click', function () {
        $('.header_top_menu').slideToggle();
        return false;
    });
    /* ========================================================================
     * inputmask
     * ======================================================================== */
    $("input[name=fon]").inputmask("+7 (999) 999-99-99");

    $("H1").css('opacity', 1);

    $('.footer_arrow').on('click', function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1500);
    });


    $('.faqLevel_list > div').on('click', function () {
        if ( $(this).attr('class') == "col-3"){
            $(this).attr('class', 'col-6');
        } else $(this).attr('class', 'col-3');
        return false;
    });

    /* ========================================================================
     * Form mail
     * ======================================================================== */
    $('button.needSendForm').on('click', function () {
        console.log($(this).parent('div').attr('class'));
        var needParent = $(this).parent('div'),
            needElemName = $(needParent).find("input[name='fio']").val(),
            needElemFon = $(needParent).find("input[name='fon']").val(),
            needElemInfo;
        console.log('needElemName:', needElemName, 'needElemFon:', needElemFon);
        $('input').removeClass('focused');
        $('.focused_after').remove();
        if (needElemName == '' && needElemFon == ''){
                $(needParent).find("input[name='fio']").addClass('focused');
                $(needParent).find("input[name='fon']").addClass('focused');
                $(".focused").after("<p class='focused_after'>Это поле обязательно для заполнения.</p>");
            } else if (needElemName == ''){
            $(needParent).find("input[name='fio']").addClass('focused');
                $(".focused").after("<p class='focused_after'>Это поле обязательно для заполнения.</p>");
            } else if (needElemFon == '') {
            $(needParent).find("input[name='fon']").addClass('focused');
                $(".focused").after("<p class='focused_after'>Это поле обязательно для заполнения.</p>");
            } else {
            var dataString = '&fio=' + needElemName + '&fon=' + needElemFon + '&type=' + needElemInfo;
            jQuery.ajax({
                type: "POST",
                url: "mail.php",
                data: dataString,
                success: function () {
                    $('.hoverBox').show();
                    $('.hoverBox_content_form').hide();
                    $('.hoverBox_inform').hide();
                    $('.hoverBox_content_thanks').show();
                    setTimeout(function() { $('.hoverBox').hide(); $('.hoverBox_content_thanks').hide(); $('.hoverBox_inform').show();}, 5000);
                }
            });
        }
    });

    $('.needHoverBox').on('click', function () {
        $('.hoverBox').show();
    });

    $('.form_close').on('click', function () {
        $('.hoverBox').hide();
    });

    $(document).mouseup(function (e) {
        var container = $(".hoverBoxTown_inform");
        if (container.has(e.target).length === 0) {
            $('.hoverBoxTown').hide();
        }
    });

    $(document).mouseup(function (e) {
        var container = $(".hoverBox_inform");
        if (container.has(e.target).length === 0) {
            $('.hoverBox').hide();
        }
    });
    $('.header_top_menu_mobile').on('click', function () {
        if($(this).attr('cli') != '1'){
            $('.header_menu').css('top', '0%');
            $(this).attr('cli', '1');
        } else {
            $('.header_menu').css('top', '-100%');
            $(this).attr('cli', '0');
        }

    })
});
/* ========================================================================
 * none
 * ======================================================================== */
$(document).ready(function(){
    $('header a').bind("click", function(e){
        var anchor = $(this);
        console.log($(anchor.attr('href')).offset());
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 130
        }, 1000);
        e.preventDefault();
    });
    return false;
});
$(document).ready(function(){
    window.onload=function(){
        $('.certificatesLevel_list').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            center: true,
            navText: ['&lt;','&gt;'],
            items:1
        });
    }
});