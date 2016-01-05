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

// this.relDate = parseInt((new Date() - new Date(this.date))/60/60/24/1000);
 this.relDate = parseInt((new Date() - new Date(this.date))/60/60/24/1000);

 return "<a href='"+this.url+"' target='_blank'>"+'<div class="item"> <img src='+this.imgSrc+'> <p><strong>'+this.name+'</strong><br>  '+this.relDate+' days ago <br><br>'+this.about+"</p></div></a>";
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
