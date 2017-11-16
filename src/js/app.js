$(document).ready(function() {
    console.log('Eh?');
});

window.toggleNavList = function() {
    $(document).ready(function() {
        console.log('The navigation list is ready to toggle.');
    });
    $('.nav--listToggle').click(function() {
        $('.nav--list').toggleClass('expanded');
    });
}

window.toggleNavGroup = function() {
    $(document).ready(function() {
        console.log('The navigation group is ready to toggle.');
    });
    $('.groupToggle').click(function() {
        $(this).closest('.group').toggleClass('expanded');
    });
}

toggleNavList();
toggleNavGroup();