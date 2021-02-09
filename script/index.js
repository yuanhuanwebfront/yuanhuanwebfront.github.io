$('.card').on('click', function(e){
  var target = e.target;


  if(!$(target).hasClass('card')){
    target = $(target).parents('.card')
  }

  var url = $(target).data('url');

  location.href = url;

})

// 回到顶部按钮操作
$('.back-top').on('click', function(e){
  $("html,body").animate({
    scrollTop: 0
  }, 500);
})