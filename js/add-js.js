$(document).ready(function () {

  var JSCCommon = {

    tabscostume: function tabscostume(tab) {
      $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
        $(this).closest('.' + tab).find('.' + tab + '__content').find(".form-wrap__input").val('').removeAttr("required");
        $(this).closest('.' + tab).find('.' + tab + '__content').eq($(this).index()).find(".form-wrap__input").attr("required", "required");
        $(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
        $(this).closest('.' + tab).find('.' + tab + '__content2').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active'); // берем значение с активного таба

        var specific = $('.tabs__btn.active').text(); // устанавливаем значение активного таба в форму

        $(".form-wrap__model").val($(this).text());
        $(".section-title__model").text($(this).text());
      });
    },
  };


  $('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");


  smoothScroll('.ancor-add-js');

  JSCCommon.tabscostume('tabs');

  var gets = function () {
    var a = window.location.search;
    var b = new Object();
    var c;
    a = a.substring(1).split("&");

    for (var i = 0; i < a.length; i++) {
      c = a[i].split("=");
      b[c[0]] = c[1];
    }

    return b;
  }(); // form

  //form
  $("form").submit(function (e) {
    e.preventDefault();
    var th = $(this);
    var data = th.serialize();
    th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
    th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
    th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
    th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
    $.ajax({
      url: 'action.php',
      type: 'POST',
      data: data
    }).done(function (data) {
      $.magnificPopup.close();
      $.magnificPopup.open({
        items: {
          src: '#modal-thanks', // can be a HTML string, jQuery object, or CSS selector
          type: 'inline'
        }
      });

      setTimeout(function () {
        // Done Functions
        th.trigger("reset"); // $.magnificPopup.close();
        // ym(53383120, 'reachGoal', 'zakaz');
        // yaCounter55828534.reachGoal('zakaz');
      }, 4000);
    }).fail(function () {});
  });


  $('.modal-pop-up').magnificPopup({
    type:'inline'
  });

  $('.custom-input-time__input').change(function () {
    $(this).parents('form').find('.toggle-wrap-input-js').toggle().toggleClass('active');
  });

  $('.modal-pop-up').click(function () {
    var clickedFromInp = document.querySelector('.hidden-clicked-from');
    if (!clickedFromInp) return

    clickedFromInp.value = this.parentElement.parentElement.querySelector('.catalogTable__name').innerHTML;
    //console.log(clickedFromInp);
    //
  })

  //additional funcs
  //additional funcs
  //additional funcs

  function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }
  //smooth scroll
  function smoothScroll(qSelector){
    let elements = document.querySelectorAll(qSelector);
    if (elements.length === 0) return

    for (let elem of elements){
      elem.addEventListener('click', function () {
        event.preventDefault();

        let destinyID = this.getAttribute('href'); //this.attributes.href.nodeValue
        let destinyElem = document.querySelector(destinyID);
        if (!destinyElem) return

        let destinyTop = getCoords(destinyElem).top;

        window.scrollTo({
          top: destinyTop,
          behavior: "smooth"
        });

      });
    }
  }
  function getCoords(elem) { // crossbrowser version
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
  }

});