
$(document).ready(function(){

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Coding with Girls')
    .pauseFor(2500)
    .deleteChars(5)
    .typeString('Grit')
    .pauseFor(2500)
    .deleteChars(4)
    .typeString('Growth')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('Guts')
    .pauseFor(2500)
    .deleteChars(4)
    .typeString('Grace')
    .pauseFor(5000)
    .start();

});
