$(document).ready(function() {
  console.log("ready");
  $("#responsiveCarat").click(function() {
    if ($("#responsiveCarat").hasClass("rotateCarat")) {
      $("#responsiveCarat").addClass("rotateCaratAgain");
      $("#responsiveCarat").removeClass("rotateCarat");
    } else {
      if ($("#responsiveCarat").hasClass("rotateCaratAgain")) {
        $("#responsiveCarat").removeClass("rotateCaratAgain");
      }
      $("#responsiveCarat").addClass("rotateCarat");
    }
  });
});
