$(document).ready(function () {
  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  $(".select-wrap-2 select").select2({
    minimumResultsForSearch: -1,
  });
  $(".select-wrap-3 select").select2({
    minimumResultsForSearch: -1,
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

  $(".map-tab-wrap .tab-menu li button").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".tab-menu").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content2 .tab-content-item").removeClass("active");
    $(".tab-content2 .tab-content-item").eq(index).addClass("active");
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

  $(".sets-slider").slick({
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".sets-slider-wrap .slider-navigation-global .slick-prev"),
    nextArrow: $(".sets-slider-wrap .slider-navigation-global .slick-next"),
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
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: $(sliderWrapClass + " .slider-navigation-global .slick-prev"),
      nextArrow: $(sliderWrapClass + " .slider-navigation-global .slick-next"),
    });

    // Пересчет слайдера при изменении размеров окна
    $(window).on("resize", function () {
      $(sliderClass).slick("setPosition");
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

  function initSlickSlider2() {
    if ($(window).width() < 1025) {
      // Условие для мобильных устройств
      if (!$(".our-mission-slider").hasClass("slick-initialized")) {
        // Проверка, не инициализирован ли уже слайдер
        $(".our-mission-slider").slick({
          dots: true,
          arrows: true,
          slidesToShow: 1,
          slideToScroll: 1,
          variableWidth: true,
          prevArrow: $(".our-mission .slider-navigation-global .slick-prev"),
          nextArrow: $(".our-mission .slider-navigation-global .slick-next"),
        });
      }
    } else {
      if ($(".our-mission-slider").hasClass("slick-initialized")) {
        $(".our-mission-slider").slick("unslick"); // Отключаем слайдер на десктопах
      }
    }
  }

  // Инициализация при загрузке страницы
  initSlickSlider2();

  // Повторная проверка при изменении размера окна
  $(window).resize(function () {
    initSlickSlider2();
  });

  function initSlickSlider3() {
    if ($(window).width() < 1025) {
      // Условие для мобильных устройств
      if (!$(".personal-slider").hasClass("slick-initialized")) {
        // Проверка, не инициализирован ли уже слайдер
        $(".personal-slider").slick({
          dots: true,
          arrows: true,
          slidesToShow: 1,
          slideToScroll: 1,
          variableWidth: true,
          prevArrow: $(".personal .slider-navigation-global .slick-prev"),
          nextArrow: $(".personal .slider-navigation-global .slick-next"),
        });
      }
    } else {
      if ($(".personal-slider").hasClass("slick-initialized")) {
        $(".personal-slider").slick("unslick"); // Отключаем слайдер на десктопах
      }
    }
  }

  // Инициализация при загрузке страницы
  initSlickSlider3();

  // Повторная проверка при изменении размера окна
  $(window).resize(function () {
    initSlickSlider3();
  });

  function initSlickSlider4() {
    if ($(window).width() < 1025) {
      // Условие для мобильных устройств
      if (!$(".personal-slider2").hasClass("slick-initialized")) {
        // Проверка, не инициализирован ли уже слайдер
        $(".personal-slider2").slick({
          dots: true,
          arrows: true,
          slidesToShow: 1,
          slideToScroll: 1,
          variableWidth: true,
          prevArrow: $(".personal2 .slider-navigation-global .slick-prev"),
          nextArrow: $(".personal2 .slider-navigation-global .slick-next"),
        });
      }
    } else {
      if ($(".personal-slider2").hasClass("slick-initialized")) {
        $(".personal-slider2").slick("unslick"); // Отключаем слайдер на десктопах
      }
    }
  }

  // Инициализация при загрузке страницы
  initSlickSlider4();

  // Повторная проверка при изменении размера окна
  $(window).resize(function () {
    initSlickSlider4();
  });

  function initSlickSlider5() {
    if ($(window).width() < 1025) {
      // Условие для мобильных устройств
      if (!$(".project-slider").hasClass("slick-initialized")) {
        // Проверка, не инициализирован ли уже слайдер
        $(".project-slider").slick({
          dots: true,
          arrows: true,
          slidesToShow: 1,
          slideToScroll: 1,
          variableWidth: true,
          prevArrow: $(
            ".project-slider-wrap .slider-navigation-global .slick-prev"
          ),
          nextArrow: $(
            ".project-slider-wrap .slider-navigation-global .slick-next"
          ),
        });
      }
    } else {
      if ($(".project-slider").hasClass("slick-initialized")) {
        $(".project-slider").slick("unslick"); // Отключаем слайдер на десктопах
      }
    }
  }

  // Инициализация при загрузке страницы
  initSlickSlider5();

  // Повторная проверка при изменении размера окна
  $(window).resize(function () {
    initSlickSlider5();
  });

  $(".tab-links a").on("click", function (e) {
    e.preventDefault();

    // Удаляем активный класс у всех табов
    var currentAttrValue = $(this).attr("href");

    // Меняем активные ссылки
    $(".tab-links li").removeClass("active");
    $(this).parent("li").addClass("active");

    // Показываем активный контент и скрываем неактивный
    $(".contacs-us .tab").removeClass("active");
    $(currentAttrValue).addClass("active");
  });

  $(".tab-links2 a").on("click", function (e) {
    e.preventDefault();

    // Удаляем активный класс у всех табов
    var currentAttrValue = $(this).attr("href");

    // Меняем активные ссылки
    $(".tab-links2 li").removeClass("active");
    $(this).parent("li").addClass("active");

    // Показываем активный контент и скрываем неактивный
    $("#support-popup .tab").removeClass("active");
    $(currentAttrValue).addClass("active");
  });

  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
  });

  $(".review-slider .item .more").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".item").find(".texts").addClass("show");
    $(this).hide();
  });

  $(".accordion-list-item .item-heading").on("click", function (e) {
    e.preventDefault();
    if ($(this).find(".icon").hasClass("rotate")) {
      $(this).find(".icon").removeClass("rotate");
    } else {
      $(this)
        .closest(".accordion-list-item")
        .find(".icon")
        .removeClass("rotate");
      $(this).find(".icon").addClass("rotate");
    }
    $(this).closest(".accordion-list-item").removeClass("opened");
    $(this)
      .closest(".accordion-list-item")
      .find(".item-body")
      .removeClass("active");
    $(this)
      .closest(".accordion-list-item")
      .find(".item-body")
      .addClass("active");
    $(this).closest(".accordion-list-item").addClass("opened");
    $(this)
      .closest(".accordion-list-item")
      .find(".item-body:not(.active)")
      .slideUp();
    $(this).closest(".accordion-list-item:not(.opened)").removeClass("active");
    $(this).closest(".accordion-list-item").find(".item-body").slideToggle();
    $(this).closest(".accordion-list-item").toggleClass("active");
  });

  $(".top-scroll").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  // Отслеживание прокрутки и отображение кнопки
  $(window).scroll(function () {
    var sticky = $(".top-scroll"),
      scroll = $(window).scrollTop();

    if (scroll >= 200) sticky.addClass("show");
    else sticky.removeClass("show");
  });

  $('input[name="dates"]').daterangepicker();

  $(function () {
    $('input[name="daterange"]').daterangepicker(
      {
        opens: "left",
      },
      function (start, end, label) {
        console.log(
          "A new date selection was made: " +
            start.format("YYYY-MM-DD") +
            " to " +
            end.format("YYYY-MM-DD")
        );
      }
    );
  });

  AOS.init();
});
