$(document).ready(function(){
    console.log('document.ready has been run.');
    $('#selected-plays > li').addClass('horizontal');
    $('#selected-plays li:not(.horizontal)').addClass('sub-level');
    $('a[href^="mailto:"]').addClass('mailto');
    $('a[href$=".pdf"]').addClass('pdflink');
    $('a[href^="http:"][href*="henry"]').addClass('henrylink');

    $('tr:nth-child(odd)').addClass('alt');
    //$('td:contains(Henry)').addClass('highlight');
    //$('td:contains("Henry")').next().addClass('highlight');
    //$('td:contains("Henry")').nextAll().addClass('highlight');
    //$('td:contains("Henry")').nextAll().addBack().addClass('highlight');
    //$('td:contains("Henry")').parent().children().addClass('highlight');
    $('td:contains("Henry")').parent()
        .find('td:eq(1)')
        .addClass('highlight')
        .end()
        .find('td:eq(2)')
        .addClass('highlight');

    $('a').filter(function(){
        return this.hostname && this.hostname != location.hostname;
    }).addClass('external');
});

function loadFun(){
    console.log('window.onload has been run.')
}