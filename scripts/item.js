//item class

alert('welcome');

var items = [];

function Item(tmp) {
 this.name = tmp.name;
 this.imgSrc = tmp.imgSrc;
 this.about = tmp.about;


}

Item.prototype.toHTML = function() {
 //alert(this.name.concat(" to html"))

 return '<div class="item"> <img src='+this.imgSrc+'> <p><strong>'+this.name+'</strong><br><br>'+this.about+"</p></div>";
}

rawData.forEach(function(ele) {
  items.push(new Item(ele));
});

items.forEach(function(a){
  $('#items').append(a.toHTML())
});
