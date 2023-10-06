$(document).ready(function () {
    // Handle navigation clicks and inject content
    $('.nav-link').click(function () {
        var pageToLoad = $(this).data('page');
        $('#content').load(pageToLoad);
    });
});
