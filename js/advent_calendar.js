$(function () {

  var dateTime = new Date();
  var day = dateTime.getDate();
  $("div.square").each(function () {
    // date check for links
    var date = parseInt($(this).attr('data-date'));
    var path = "";
    if (date <= day) {
      path = $(this).attr('id');
      $(this).wrap($('<a>', {
        href: "node/" + path
      }));

// setting up onclick boolean to local storage for eligible days
      $(this).click(function () {
        localStorage.setItem($(this).attr('id'), "1");
      });
// change the images based on the local storage boolean
      if (localStorage.getItem($(this).attr('id')) === "1") {
        var imgUrl = "";
        $.ajax({
          url: "http://localhost/drupal/web/api/content/" + path + "?_format=json",
          async: false,
          dataType: 'json',
          success: function (json_data) {
            var html = $.parseHTML( json_data[0].body[0].value );
            var source = html[0].childNodes[0].src;
            imgUrl = source;
          }
        });
        $(this).find('img').attr("src", imgUrl);
      }
    }
  });
});




