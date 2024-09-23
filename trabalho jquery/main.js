$(document).ready(function(){
    $('header button').click(function() {
    $('form').slideDown();
})

$('#botao-cancelar').click(function(){ 
    $('form').slideUp();
})

$('form').on('submit', function(e){
    e.preventDefault();
    const novaTarefa = $('#nova-task').val();
    const novoItem = $('<li> </li>').text(novaTarefa);
    $(novoItem).hide().appendTo('#lista-task').fadeIn(2000);
    $('nova-task').val('');

    $(novoItem).click(function(){
        $(this).toggleClass('line');
    })
 })
})