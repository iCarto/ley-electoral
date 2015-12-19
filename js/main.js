$( document ).ready(function() {
    $('#region-btns button').prop('disabled', true);
    $('#threshold-btns button').prop('disabled', true);
    
    svgNew();
    svgOld();
    
    $('#region-btns button').prop('disabled', false);
    $('#threshold-btns button').prop('disabled', false);
});
