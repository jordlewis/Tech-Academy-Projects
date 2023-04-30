// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var show_speed = 1000; // every 1000 == 1 second
var x = setInterval(function () {
    var texty = document.getElementById('reveal');
    texty.style.visibility = (texty.style.visibility == 'hidden' ? '' : 'hidden');
}, show_speed);