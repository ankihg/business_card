//item class

var items = [];

function Item(tmp) {
 this.name = tmp.name;
 this.imgSrc = tmp.imgSrc;
 this.date = tmp.date;
 this.about = tmp.about;
 this.url = tmp.url;
 this.tags = tmp.tags;
}

Item.prototype.toHTML = function() {
  // DID: Use handlebars to render your articles.
  //       - Get your template from the DOM.
  //       - Now "compile" your template with Handlebars.

  // var dataCategory = this.category;
  // var dataAuthor = this.author;

  var itemTemplate = $('#item-post').html();
  var compiledTemplate = Handlebars.compile(itemTemplate);


  // DONE: If your template will use properties that aren't on the object yet, add them.
  //   Since your template can't hold any JS logic, we need to execute the logic here.
  //   The result is added to the object as a new property, which can then be referenced by key in the template.
  //   For example, you might want to display how old a post is, or say "(draft)" if it has no publication date:

  var htmlBody = $(this.about).html();
  this.id = this.name.split(' ')[0];
   var dataSource = {
     id: this.id,
     name: this.name,
     url: this.url,
     imgSrc: this.imgSrc,
     about: htmlBody,
     date: this.date
   }

var html = compiledTemplate(dataSource);

/*var $item = $('#'+this.id);
alert($item.text());
$item.html('plz');
this.displayFirstPara($item);*/

// this.displayFirstPara(html);

return html;
  // DID: Use the function that Handlebars gave you to return your filled-in html template for THIS article.
}

/*Item.prototype.toHTML = function() {
 //alert(this.name.concat(" to html"))
 var $newItem = $('.template').clone();
 $newItem.addClass('item');

 $newItem.css('display', 'block');
 $newItem.css('border-style', 'solid');
 $newItem.css('border-color', 'blue');
 $newItem.css('margin', '1%');
 $newItem.css('padding', '1%');
 $newItem.css('overflow-y', 'scroll');


 $newItem.removeClass('template');
 $newItem.addClass('populated');

  $newItem.data('name', this.name);
  $newItem.data('imgSrc', this.imgSrc);
  $newItem.data('date', this.date);
  $newItem.data('about', this.about);
  $newItem.data('url', this.url);
  $newItem.data('tags', this.tags);
  //$newItem.addTagsAsClasses();

// this.relDate = parseInt((new Date() - new Date(this.date))/60/60/24/1000);
 this.relDate = parseInt((new Date() - new Date(this.date))/60/60/24/1000);

 $newItem.find('a').attr('href', this.url);

 $newItem.find('h1').text(this.name);

$newItem.find('img').attr('src', this.imgSrc);
$newItem.find('img').css('width', '48%');
$newItem.find('img').css('display', 'inline');

$text = $newItem.find('.text');


$text.html(this.about);

this.displayFirstPara($text);

$text.css('width', '50%');
$text.css('float', 'right');
$text.css('display', 'inline');

$newItem.find('.dat').text('published '+this.relDate+' days ago');



return $newItem;
 //return "<a href='"+this.url+"' target='_blank'>"+'<div class="item"> <img src='+this.imgSrc+'> <p><strong>'+this.name+'</strong><br>  '+this.relDate+' days ago <br><br>'+this.about+"</p></div></a>";
}*/



Item.prototype.displayFirstPara = function($text) {
  $fPar = $text.find('p').eq(0);
  $text.html($fPar.html());

  $button = $('<button/>');
  $button.text('+');
  $button.css('color', 'blue');
  $button.css('font-size', '20px');
  $button.css('display', 'block');
  $button.css('margin', '5%');
  var item = this;
  $button.on('click', function(e) {
   item.displayFull($text);
  })

 $text.append($button);
}

Item.prototype.displayFull = function($text) {
  $text.html(this.about);
};

rawData.sort(function(a,b) {
  return (new Date(b.date)) - (new Date(a.date));
});

rawData.forEach(function(ele) {
  items.push(new Item(ele));
});

items.forEach(function(a){
  $('#items').append(a.toHTML())
});

items.forEach(function(i){
  var $item = $('#'+i.id).find('.text');
  i.displayFirstPara($item);
});
