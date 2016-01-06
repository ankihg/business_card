var itemView = {};

itemView.handleMainNav = function() {

 $('.main-nav .tab').on('click', function(e) {
   e.preventDefault();
   var content = $(this).attr('data-content');

   if (content == 'about') {
     $('section.populated').css('display', 'none');
   } else if (content == 'items') {
     $('section.populated').css('display', 'block');
   }
 })

}

$(document).ready(function() {
  itemView.handleMainNav();
})
