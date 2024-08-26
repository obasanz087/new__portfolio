
  $(function() {
    $('.menu_btn').click(function() {
        $(this).addClass('active');
        
 
        if ($(this).hasClass('active')) {
            $('.btn_inner').addClass('active');
            $('.nav_wrapper_sp').addClass('active');
        } else {
            $('.btn_inner').removeClass('active');
            $('.nav_wrapper_sp').removeClass('active');
        } 
      
    });
});
$(function() {
    $('.nav_close').click(function() {
       $('.btn_inner').removeClass('active');
       $('.btn_menu').removeClass('active');
       $('.nav_wrapper_sp').removeClass('active');

    });
  });

