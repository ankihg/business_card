//item class

var items = [];

function Item(tmp) {
 this.name = tmp.name;
 this.imgSrc = tmp.imgSrc;
 this.date = tmp.date;
 this.about = tmp.about;
 this.url = tmp.url;
 //this.tags = tmp.tags;
}

Item.prototype.toHTML = function() {
 //alert(this.name.concat(" to html"))
 var $newItem = $('.template').clone();
 $newItem.addClass('item');

 $newItem.css('display', 'block');
 $newItem.css('border-style', 'solid');
 $newItem.css('border-color', 'blue');
 $newItem.css('margin', '1%');
 $newItem.css('padding', '1%');


  $newItem.data('name', this.name);
  $newItem.data('imgSrc', this.imgSrc);
  $newItem.data('date', this.date);
  $newItem.data('about', this.about);
  $newItem.data('url', this.url);
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



$newItem.removeClass('template');

return $newItem;
 //return "<a href='"+this.url+"' target='_blank'>"+'<div class="item"> <img src='+this.imgSrc+'> <p><strong>'+this.name+'</strong><br>  '+this.relDate+' days ago <br><br>'+this.about+"</p></div></a>";
}



Item.prototype.displayFirstPara = function($text) {
  $fPar = $text.find('p').eq(0);
  $text.html($fPar);

  $button = $('<button/>');
  $button.text('more plz');
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
