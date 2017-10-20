$(document).ready(function(){
    $('a[href^="#"]').on('click',function(e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});

var logoHeight = $('#photo').height();
    if (logoHeight < 104) {
        var margintop = (104 - logoHeight) / 2;
        $('#photo').css('margin-top', margintop);
    }
}
