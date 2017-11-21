$(document).ready(function() {
    console.log('Eh?');
});

window.toggleUserActions = function() {

    $(document).ready(function() {
        console.log('Ready to toggle the user actions menu.');
    });

    $('.userToggle').click(function(e) {

        e.stopPropagation();
        
        $('.userInfo').toggleClass('expanded', 250);

        $('.userActions').toggleClass('expanded', 250);

        $(document).keyup(function(e){
            
            if(e.keyCode === 27)

                $('.userInfo').toggleClass('expanded', 250);
            
                $('.userActions').toggleClass('expanded', 250);

        });

    });

    $(document).click(function() {

        if($('.userInfo').hasClass('expanded') || $('.userActions').hasClass('expanded')) {

            $('.userInfo').toggleClass('expanded', 250);
            
            $('.userActions').toggleClass('expanded', 250);

        }
        
    });

    $('.user--button').click(function() {

        console.log('You clicked on a user action button.');

    });

}

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

        $(document).keyup(function(e){
            
            if(e.keyCode === 27)

            $('.nav--list').toggleClass('list--expanded');

        });

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

window.toggleSearch = function() {

    $('.search--button').click(function() {
        $(this).closest('.search').find('.search--full').toggleClass('expanded');
    });

    $('.search--fullToggle').click(function() {
        $(this).closest('.search--full').toggleClass('expanded');
    });

}

window.toggleLayoutTheme = function() {

    console.log('You changed the layout theme!');

    $('.logo').click(function() {
        $('#app').toggleClass('largeCompanyCardLayout');
    });

}

toggleNav();
toggleNavList();
toggleNavGroup();
mobileQuote();
toggleLayoutTheme();
toggleUserActions();
toggleSearch();
