define(function(require) {
  var $ = require("jquery");
  var zip = "";

  $("#zip").on('click', function() {
    zip = $('#searchField').val();
    console.log("zip", zip);
      if (zip.length !== 5) {
      console.log("Please enter a 5-digit code.");
      //zip = "";
     }


  });
  //return function getZipCode() {


  //}

});