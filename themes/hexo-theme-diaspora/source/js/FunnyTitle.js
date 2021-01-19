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
        document.title = '( (๑＞ڡ＜)☆oh我的老baby你还知道回来呢~';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});