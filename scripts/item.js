//item class

alert('welcome');

var items = [];

function Item(tmp) {
 this.name = tmp.name;
 this.about = tmp.about;


}

Item.prototype.toHTML = function() {
 alert(this.name.concat(" to html"))

 return '<h3>'+this.name+'</h3><p>'+this.about+"</p>";
}

rawData.forEach(function(ele) {
  items.push(new Item(ele));
});

items.forEach(function(a){
  $('#items').append(a.toHTML())
});
