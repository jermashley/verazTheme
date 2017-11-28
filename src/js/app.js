$(document).ready(function() {
    console.log('Eh?');
});


// Toggle the user menu for password management and logging out.
window.toggleUserActions = function() {

    $(document).ready(function() {
        console.log('Ready to toggle the user actions menu.');
    });

    $('.user--button').click(function() {
        
        console.log('You clicked on a user action button.');
        
    });
        
    // On-click function.
    $('.userToggle').click(function(e) {

        e.stopPropagation();
        
        $('.userInfo').toggleClass('expanded', 250);

        $('.userActions').toggleClass('expanded', 250);

        // Allow esc key to close the user menu.
        $(document).keyup(function(e){
            
            if(e.keyCode === 27)

                $('.userInfo').removeClass('expanded', 250);
            
                $('.userActions').removeClass('expanded', 250);

        });

    });

    // Clicking anywhere outside the user menu closes it.
    $(document).click(function(e) {

        if(!$(e.target).closest('.user').length) {

            $('.userInfo').removeClass('expanded', 250);
            
            $('.userActions').removeClass('expanded', 250);

        }
        
    });

}

// Toggle main navigation from hamburger menu button.
window.toggleNav = function() {

    $(document).ready(function() {
        console.log('The navigation hamburger is ready to consume. No ketchup needed.');
    });

    // Click the hamburger button on mobile to get the drop-down menu.
    $('.nav--toggle').click(function() {

        $('#mainContent').toggleClass('lockScroll');

        $('.nav').toggleClass('nav--expanded');

        $('.nav--list').removeClass('list--expanded');

        $('.nav--button').removeClass('activeMenu');

    });

}

// Toggle a fly-out navigation page from the navigation buttons.
window.toggleNavList = function() {

    $(document).ready(function() {
        console.log('The navigation list is ready to toggle.');
    });

    $('.nav--button').click(function() {

        // Get data-link value from button and store for Id.
        var menuId = $(this).data('link');
        
        console.log('You clicked on #' + menuId);

        // Close currently open fly-out navigation page and remove active nav button style.
        $('.nav').find('.list--expanded').removeClass('list--expanded');
        $('.nav--button').removeClass('activeMenu');

        // Add active nav button style.
        $('.nav--button[data-link="' + menuId + '"]').addClass('activeMenu');

        // Toggle fly-out menu associated with data-link Id stored.
        $('#' + menuId).toggleClass('list--expanded');

        // $('#' + menuId).find('.nav--listGroupItems').not('.items-expanded', function() {
        //     $(this).addClass('items-expanded');
        // });

        // Use the esc key to close the fly-out the menubar.
        $(document).keyup(function(e) {
            
            if(e.keyCode === 27)

            $('#' + menuId).removeClass('list--expanded');

            $('.nav--button[data-link="' + menuId + '"]').removeClass('activeMenu');

        });

        // Close the fly-out menu from the X toggle.
        $('#' + menuId).find('.nav--listToggle').click(function() {

            $('#' + menuId).removeClass('list--expanded');

            $('.nav--button[data-link="' + menuId + '"]').removeClass('activeMenu');
        });
        
    });

}

// Collapse or expand link group within a fly-out menu.
window.toggleNavGroup = function() {

    $(document).ready(function() {
        console.log('The navigation group is ready to toggle.');
    });

    $('.groupToggle').click(function() {

        // Rotate the caret.
        $(this).toggleClass('rotate-180');

        // Toggle the link group inside the fly-out menu.
        $(this).closest('.nav--listGroup').find('.nav--listGroupItems').toggleClass('items-expanded', 250);

    });

}

// Toggle LTL and TL qutoe buttons on mobile.
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

// Toggle search field on mobile.
window.toggleSearch = function() {

    $('.search--button').click(function() {
        $(this).closest('.search').find('.search--full').toggleClass('expanded');
    });

    $('.search--fullToggle').click(function() {
        $(this).closest('.search--full').toggleClass('expanded');
    });

}

// Change the layout of the sidebar - specifically the company logo and company switcher.
window.toggleLayoutTheme = function() {

    $(document).ready(function() {
        console.log('Layout theme is ready to toggle.');
    });

    // Toggle company card/logo layout.
    $('.logo').click(function() {

        console.log('You changed the layout theme!');
        
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
