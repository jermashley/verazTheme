$(document).ready(function() {
    console.log('Eh?');
});

window.toggleNav = function() {

    $(document).ready(function() {
        console.log('The navigation hamburger is ready to consume. No ketchup needed.');
    });

    $('.nav--toggle').click(function() {
        $('#mainContent').toggleClass('lockScroll');
        $('.nav').toggleClass('nav--expanded');
        $('.nav--list').removeClass('list--expanded');
    });

}

window.toggleNavList = function() {

    $(document).ready(function() {
        console.log('The navigation list is ready to toggle.');
    });

    $('.nav--button').click(function() {
        
        var anchorId = $(this).data('link');

        $('.nav--list').toggleClass('list--expanded');
        
        $('.nav--list').delay(750).animate({

            scrollTop: $('#' + anchorId).offset().top - 100

        }, 500, 'easeOutCubic');

        $('#' + anchorId).find('.nav--listGroupItems').toggleClass('items-expanded', 250);

        console.log('You clicked on #' + anchorId);
        
    });

    $('.nav--listToggle').click(function() {
        $('.nav--list').toggleClass('list--expanded');
    });

}

window.autoToggleNavGroup = function() {

    $(this).next().find('.groupToggle').toggleClass('rotate-180');

    $(this).next().find('.groupToggle').closest('.nav--listGroup').find('.nav--listGroupItems').toggleClass('items-expanded');

}

window.toggleNavGroup = function() {

    $(document).ready(function() {
        console.log('The navigation group is ready to toggle.');
    });

    $('.groupToggle').click(function() {
        $(this).toggleClass('rotate-180');
        $(this).closest('.nav--listGroup').find('.nav--listGroupItems').toggleClass('items-expanded', 250);
    });

}

window.mobileQuote = function() {

    $(document).ready(function() {
        console.log('The mobile quote is ready to toggle.');
    });

    $('.quote--small').click(function() {
        $('.quote--large').toggleClass('quote--expanded');
    });

    $('.quote--largeToggle').click(function() {
        $('.quote--large').toggleClass('quote--expanded');
    });

}

toggleNav();
toggleNavList();
toggleNavGroup();
mobileQuote();
