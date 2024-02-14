// JQuery 

$(document).ready(function () {
    $('#show').click(function () {
        $('#para').toggleClass('show');
    });
});

$(document).ready(function() {
    $('#option').click(function() {
        $(this).toggleClass('fa-times');
        $('.menu').toggleClass('toggle-menu');
    });
});