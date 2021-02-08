$('.card').on('click', function(e){
  var target = e.target;


  if(!$(target).hasClass('card')){
    target = $(target).parents('.card')
  }

  var url = $(target).data('url');

  location.href = url;

})