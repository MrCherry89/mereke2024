$(document).ready(function () {
  // $(".phone-number-input").inputmask({
  //   mask: "+7 (999)-999-999-9",
  // });
  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  // function formatSelection(state) {
  //   if (!state.id) {
  //     return state.text;
  //   }

  //   var $state = $('<span><img class="img-icon" /> <span></span></span>');

  //   $state.find("span").text(state.text);
  //   $state.find("img").attr("src", state.element.dataset.icon);

  //   return $state;
  // }

  // function formatResult(state) {
  //   if (!state.id) {
  //     return state.text;
  //   }

  //   var $state = $('<span><img class="img-icon" /> <span></span></span>');

  //   $state.find("span").text(state.text);
  //   $state.find("img").attr("src", state.element.dataset.icon);

  //   return $state;
  // }

  $(".select-wrap-2 select").select2({
    minimumResultsForSearch: -1,
    // templateSelection: formatSelection,
    // templateResult: formatResult,
  });

  $(".tab-menu > li a").on("click", function (e) {
    e.preventDefault();
    $(".tab-menu > li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-wrap .tab-content").removeClass("active");
    $(".tab-content-wrap .tab-content").eq(index).addClass("active");

    var selectedTab = $(this).closest("li").data("index");

    $("#tab-select").val(selectedTab);
    $("#tab-select").trigger("change");
  });

  $("#tab-select").on("change", function (e) {
    var selectedTab = $(this).val();
    var index = parseInt($(this).val()) - 1;

    $(".tab-menu > li").removeClass("active");
    $(".tab-menu > li").eq(index).addClass("active");
    $(".tab-content-wrap .tab-content").removeClass("active");
    $(".tab-content-wrap .tab-content").eq(index).addClass("active");
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
    ],
  });

  function initializeSlider(sliderClass, sliderWrapClass) {
    $(sliderClass).slick({
      dots: false,
      infinite: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: $(sliderWrapClass + " .slider-navigation-global .slick-prev"),
      nextArrow: $(sliderWrapClass + " .slider-navigation-global .slick-next"),
    });
  }

  initializeSlider(".projects-slider", ".projects-slider-wrap");
  initializeSlider(".projects-slider2", ".projects-slider-wrap2");
  initializeSlider(".projects-slider3", ".projects-slider-wrap3");

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
