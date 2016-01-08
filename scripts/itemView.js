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

itemView.handleFilter = function() {
  $('#tag-filter').on('change', function() {
    itemView.clearItems();
    if ($(this).val()=='') {
      itemView.displayAll();
    } else {
      itemView.displayTag($(this).val());
    }
  });
};

itemView.clearItems = function() {
  $('section.populated').remove();
};

itemView.displayTag = function(tag) {
  items.forEach(function(i){
   if (i.tags.indexOf(tag) >= 0) {
     i.make();
    //$('#items').append(i.toHTML());
  }
 });
};

itemView.displayAll = function() {
  items.forEach(function(i){
    i.make();
    //$('#items').append(i.toHTML());
 });
};

$(document).ready(function() {
  itemView.handleMainNav();
  itemView.populateFilter();
  itemView.handleFilter();
});
