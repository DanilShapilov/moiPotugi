$( ".expandable" ).click(function(){
  $(this).toggleClass('not-expanded');
  $(this).next(".expandable-wrapper" ).toggle('slow',this.display)
})