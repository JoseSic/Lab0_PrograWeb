$(document).ready(function () {
    $('#B1').click(function () { 
        $('#titulo').css('font-family','Buxton Sketch');
        $('#descripcion').css('font-family','Buxton Sketch')
        $('#Te').css('font-family','Buxton Sketch')
        $('p').css('font-family','Buxton Sketch')
        $('.nav-item').css('font-family','Buxton Sketch')
    });
    $('#B2').click(function () { 
        $('body').css('background-image','url(img/12.jpg)')
    });

    $('#B3').click(function () { 
        $('#CambioB').modal('show')
    });

    $('#B4').click(function () { 
        $('.container-fluid').css('background-image','url(img/16.jpg)')
        $('body').css('background-image','url(img/16.jpg)')
        $('.modal-header').css('background-image','url(img/16.jpg)')
        
    });

    $('#B5').click(function () { 
        $( "img" ).addClass( "rounded-circle" );
        $( ".card" ).addClass( "rounded-circle" );
    });
});