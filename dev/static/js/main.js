(function () {
    $('.tasks-content__accordions').slimScroll({
        height: '543px',
        right: '4px',
        size :'4px',
        alwaysVisible: true,
        borderRadius:'8px',
        color: '#A1A7B3',
        distance: '4px',
        opacity: '1',
        railOpacity: 1
    });

    $(".accordion").on("click", function () {
        $(this).toggleClass("collapsed open");
        $(this).next().toggleClass("toggle");
    });

    $(".contact-form__show-password").click(function(){
        if('password' == $('.show-pass').attr('type')){
            $('.show-pass').prop('type', 'text');
        }else{
            $('.show-pass').prop('type', 'password');
        }
    });
}());