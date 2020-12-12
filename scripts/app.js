$(document).ready(function() {
    $('.second-slider').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInUp',
        offset: 300
    });
    $('.pluses-article-right').addClass("hidden pluses-article-right").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInRight',
        offset: 300
    });
    $('.pluses-article').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__fadeInLeft',
        offset: 300
    });
});