$(function() {
  $.scrollify({
    section : ".scroll-point",
    interstitialSection : ".footer"
  });
});

$('#album-btn, #album-link').click(function() {
  $.scrollify.move("#album");
});