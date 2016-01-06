var aboutView = {};

aboutView.handle = function() {
 $('#about').on('click', function() {
   var title = 'ABOUT ME'
   var txt = 'welcome. my name is annika. i come from the san francisco east bay and now i live in seattle. i like to program, study language, and play music.';

   var r = Math.random()*3;
   if (r < 1) {
     title = 'OM MIG';
     txt = 'välkommen. jag heter annika. jag kommer från san francisco bay area och nu bor jag i seattle. jag giller att programmera, studera språk, och spela musik.'
   } else if (r < 2) {
        title = 'DE ME';
        txt = 'bienvenido. me llamo annika. soy del área de la bahía de san francisco y ahora vivo en seattle. me gusta programar, estudiar idioma, y tocar música.'
      }

   $('#about').find('h1').text(title);
   $('#about').find('p').text(txt);
 })
};

$(document).ready(function() {
  aboutView.handle();
});
