$( function() {
  $( "#range-slider" ).slider({
    range: true,
    min: 0,
    max: 15000,
    values: [ 5000, 10000 ],
    slide: function( event, ui ) {
      $( "#range-slider_amount" ).val( "₽" + ui.values[ 0 ] + " - ₽" + ui.values[ 1 ] );
    }
  });
  $( "#range-slider_amount" ).val( "₽" + $( "#range-slider" ).slider( "values", 0 ) +
    " - ₽" + $( "#range-slider" ).slider( "values", 1 ) );
} );