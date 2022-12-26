$(function () {

  $(".star").rateYo({
    starWidth: "13px",
    normalFill: "#d6d6d6",
    ratedFill: "#FFA858",
    spacing: "5px",
    readOnly: true
  });

  $(".reviews__star").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#FFA858",
    spacing: "5px",
    readOnly: true
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

});