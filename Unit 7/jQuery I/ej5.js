function addLists(){
    let Lista1 = $('<ul><li>Tortilla</li><li>Jamon</li><li>Queso</li>');
    let Lista2 = $('<ul><li>Coca Cola</li><li>Leche</li><li>Te</li>');
    $('body').append(Lista1);
    $('body').append(Lista2);
}

$(document).ready(function(){
    addLists();
    $('ul li:first-child').hide();
});
