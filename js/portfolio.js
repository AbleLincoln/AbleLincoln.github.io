$(document).ready(function() {
  $( 'article .title p.button' ).click(function() {
    $(this).parent().hide();
    $(this).parent().next().fadeIn();
    $(this).parent().parent().animate( {height: '400px'} );
  });
  $( 'article .content p.minimize.button' ).click(function() {
    $(this).parent().hide();
    $(this).parent().prev().fadeIn();
    $(this).parent().parent().animate( {height: '250px'} );
  });
});