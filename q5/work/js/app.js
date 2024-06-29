$(function () {
  $(".dropdwn li").on("mouseover", function () {
    $(this).children("ul").slideDown(400);

    $(".dropdwn li").on("mouseleave", function () {
      $(this).children("ul").slideUp(400);
    });
  });
});
