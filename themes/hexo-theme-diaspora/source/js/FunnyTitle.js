// 浏览器搞笑标题
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/boom.png");
        document.title = '(╯‵□′)╯︵┻━┻你给爷回来！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/img/boom.png");
        document.title = '( (๑＞ڡ＜)☆让我看看是哪个小可爱点进来惹~';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});