$(document).ready(function () {
  // $(".phone-number-input").inputmask({
  //   mask: "+7 (999)-999-999-9",
  // });
  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $(".drop-menu").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });

  $(".banner-slider").slick({
    dots: true,
    infinite: true,
    arrows: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".banner-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".banner-slider-wrap .slider-navigation .slick-next"),
  });

  $(".review-slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
    prevArrow: $(".review-slider-wrap .slider-navigation-global .slick-prev"),
    nextArrow: $(".review-slider-wrap .slider-navigation-global .slick-next"),
  });
  $(".news-slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
    prevArrow: $(".news-slider-wrap .slider-navigation-global .slick-prev"),
    nextArrow: $(".news-slider-wrap .slider-navigation-global .slick-next"),
  });

  $(".partners-slider").slick({
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $(".partners-slider-wrap .slider-navigation-global .slick-prev"),
    nextArrow: $(".partners-slider-wrap .slider-navigation-global .slick-next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // Дополнительная логика для линии прогресса
  $(".fond-items-slider").on(
    "afterChange",
    function (event, slick, currentSlide) {
      var totalSlides = slick.slideCount;
      var progressPercentage = ((currentSlide + 1) / totalSlides) * 100;
      $(".fond-items-slider-wrap .custom-pagination-info::after").css(
        "width",
        progressPercentage + "%"
      );
    }
  );

  function initSlickSlider() {
    if ($(window).width() < 1025) {
      // Условие для мобильных устройств
      if (!$(".fond-items-slider").hasClass("slick-initialized")) {
        // Проверка, не инициализирован ли уже слайдер
        $(".fond-items-slider").slick({
          dots: true,
          arrows: true,
          slidesToShow: 1,
          slideToScroll: 1,
          variableWidth: true,
          prevArrow: $(
            ".fond-items-slider-wrap .slider-navigation-global .slick-prev"
          ),
          nextArrow: $(
            ".fond-items-slider-wrap .slider-navigation-global .slick-next"
          ),
        });
      }
    } else {
      if ($(".fond-items-slider").hasClass("slick-initialized")) {
        $(".fond-items-slider").slick("unslick"); // Отключаем слайдер на десктопах
      }
    }
  }

  // Инициализация при загрузке страницы
  initSlickSlider();

  // Повторная проверка при изменении размера окна
  $(window).resize(function () {
    initSlickSlider();
  });

  $(".tab-links a").on("click", function (e) {
    e.preventDefault();

    // Удаляем активный класс у всех табов
    var currentAttrValue = $(this).attr("href");

    // Меняем активные ссылки
    $(".tab-links li").removeClass("active");
    $(this).parent("li").addClass("active");

    // Показываем активный контент и скрываем неактивный
    $(".tab").removeClass("active");
    $(currentAttrValue).addClass("active");
  });

  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
  });
});
