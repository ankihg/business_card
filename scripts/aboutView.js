var aboutView = {};

aboutView.handle = function() {
 $('#about').on('click', function() {
   var title = 'ABOUT ME'
   var txt = 'welcome. my name is annika. i come from the san francisco east bay and now i live in seattle. i like to program, study language, and play music.';

   var r = Math.random()*5;
   if (r < 1) {
     title = 'OM MIG';
     txt = 'välkommen. jag heter annika. jag kommer från san francisco bay area och nu bor jag i seattle. jag gillar att programmera, studera språk, och spela musik.'
   } else if (r < 2) {
        title = 'DE ME';
        txt = 'bienvenido. me llamo annika. soy del área de la bahía de san francisco y ahora vivo en seattle. me gusta programar, estudiar idioma, y tocar música.'
    } else if (r < 3) {
      title = 'DE MOI';
      txt = "bienvenue. je m'appelle annika. je suis de la région de la baie de san francsico y maintenant j'habite à seattle. j'aime programmer, étudier langue, y joeur de la musique.";
    } else if (r < 4) {
      title = 'PRI MIN';
      txt = 'bonvena. mi nomigxas annika. mi venas de la regiono de la golfo de san francisko kaj nun mi logxas en seatlo. mi sxatas programi, studi lingvon, kaj ludi muzikon.';
    }

   $('#about').find('h1').text(title);
   $('#about').find('p').text(txt);
 })
};

$(document).ready(function() {
  aboutView.handle();
});
