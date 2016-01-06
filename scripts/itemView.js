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
 });

};

itemView.populateFilter = function() {
  $('section.populated').each(function() {
     // DONE: Similar to the above, but...
     //       Avoid duplicates! We don't want to append the category name if the select
     //       already has this category as an option!
     //var val = $(this).attr('data-name');
     var val = $(this).data('tags');
     val.forEach(function(tag) {
       optionTag = '<option value="' + tag + '">' + tag + '</option>';
       if ($('#tag-filter option[value="' + tag + '"]').length === 0) {
         $('#tag-filter').append(optionTag);
       }
     });

 });
};

$(document).ready(function() {
  itemView.handleMainNav();
  itemView.populateFilter();
});
