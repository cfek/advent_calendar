(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.advent_calendar = {
    attach: function (context, settings) {

  
/* Do not edit above */
/************************/
  var dateTime = new Date();
  var day = dateTime.getDate();
      // See https://drupal.stackexchange.com/questions/292008/why-does-this-simple-javascript-execute-multiple-times for details of below row changes
  $('.da-thumbs li', context).once('advent_calendar').each(function () {
    // date check for links
    var date = parseInt($(this).text());
    //var path = "";
  var path = $(this).attr('class').split("-")[1];
if (date <= day) {
// setting up onclick boolean to local storage for eligible days
      $(this).click(function () {
        localStorage.setItem($(this).attr('class'), "1");
      });
    }
// change the images based on the local storage boolean
    if (localStorage.getItem($(this).attr('class')) === "1" && path.length > 0 ) {
        var imgUrl = '';
        var niceUrl = '';
        $.ajax({
          url: "/data/content/" + path + "?_format=json",
          async: false,
          dataType: 'json',
          success: function (json_data) {
            imgUrl = json_data[0].field_image;
            niceUrl = json_data[0].view_node;
                    
          }
        });
        $(this).html('<a href="' + niceUrl + '"><h2>' + date + '</h2>' + '<img src='+  imgUrl +'></a>');
      }
   });
  }
 };
})(jQuery, Drupal,drupalSettings);




