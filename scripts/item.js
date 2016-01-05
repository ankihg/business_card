//item class

var items = [];

function Item(tmp) {
 this.name = tmp.name;
 this.imgSrc = tmp.imgSrc;
 this.date = tmp.date;
 this.about = tmp.about;
 this.url = tmp.url;
}

Item.prototype.toHTML = function() {
 //alert(this.name.concat(" to html"))
 var $newItem = $('.template').clone();
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


// this.relDate = parseInt((new Date() - new Date(this.date))/60/60/24/1000);
 this.relDate = parseInt((new Date() - new Date(this.date))/60/60/24/1000);

 $newItem.find('a').attr('href', this.url);

 $newItem.find('h1').text(this.name);

$newItem.find('img').attr('src', this.imgSrc);
$newItem.find('img').css('width', '48%');
$newItem.find('img').css('display', 'inline');


$newItem.find('span').html(this.about);
$newItem.find('span').css('width', '50%');
$newItem.find('span').css('float', 'right');
$newItem.find('span').css('display', 'inline');

$newItem.find('.dat').text('published '+this.relDate+' days ago');
$newItem.find('.dat').css('float', 'left');


$newItem.removeClass('template');

return $newItem;
 //return "<a href='"+this.url+"' target='_blank'>"+'<div class="item"> <img src='+this.imgSrc+'> <p><strong>'+this.name+'</strong><br>  '+this.relDate+' days ago <br><br>'+this.about+"</p></div></a>";
}

rawData.sort(function(a,b) {
  return (new Date(b.date)) - (new Date(a.date));
});

rawData.forEach(function(ele) {
  items.push(new Item(ele));
});

items.forEach(function(a){
  $('#items').append(a.toHTML())
});
