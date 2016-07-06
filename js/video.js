/**
 * Created by jiangguoshun on 16/7/6.
 */

$(function () {
    //通过目录按钮打开关闭目录侧边栏
    $('.video-tool-bar-main .catalog').click(function () {
        var catalogExtra = $('.video-tool-bar-wrapper').find('.' + $(this).data('extra'));
        if (catalogExtra.is(":hidden")) {
            catalogExtra.slideLeftShow();
        } else {
            catalogExtra.slideLeftHide();
        }
    });
    //收起目录侧边栏
    $('.video-tool-bar-wrapper .catalog-extra .content .title .title-right').click(function () {
        $('.video-tool-bar-main .catalog').trigger('click');
    });

    //监控视频侧边栏的鼠标悬停事件
    $('.video-tool-bar-main .download,.collection,.share,.play-continuously,.turn-off-the-light').hover(function () {
        $('.video-tool-bar-wrapper').find('.' + $(this).data('extra')).slideLeftShow();
    }, function () {
        $('.video-tool-bar-wrapper').find('.' + $(this).data('extra')).slideLeftHide();
    });

    //分享侧边栏有动画效果 特殊处理
    $('.video-tool-bar-wrapper .share-extra').hover(function () {
        $(this).stop().show();
    }, function () {
        $(this).slideLeftHide();
    });

    //收藏侧边栏 有已收藏和为收藏两种状态 状态切换
    $('.video-tool-bar-main .collection').click(function () {
        var _anohter_this = $('.video-info-wrapper .video-info .bar .collection-bar');
        var _anohter_this_i = _anohter_this.find('i');


        var _this_i = $(this).find('i');
        if (_this_i.hasClass('icon-heart-empty')) {
            _this_i.removeClass('icon-heart-empty');
            _this_i.addClass('icon-heart');

            _anohter_this_i.removeClass('icon-heart-empty');
            _anohter_this_i.addClass('icon-heart');
        } else {
            _this_i.removeClass('icon-heart');
            _this_i.addClass('icon-heart-empty');

            _anohter_this_i.removeClass('icon-heart');
            _anohter_this_i.addClass('icon-heart-empty');
        }
    });

    $('.video-info-wrapper .video-info .bar .collection-bar').click(function () {
        var _anohter_this = $('.video-tool-bar-main .collection');
        var _anohter_this_i = _anohter_this.find('i');

        var _this_i = $(this).find('i');
        if (_this_i.hasClass('icon-heart-empty')) {
            _this_i.removeClass('icon-heart-empty');
            _this_i.addClass('icon-heart');

            _anohter_this_i.removeClass('icon-heart-empty');
            _anohter_this_i.addClass('icon-heart');
        } else {
            _this_i.removeClass('icon-heart');
            _this_i.addClass('icon-heart-empty');

            _anohter_this_i.removeClass('icon-heart');
            _anohter_this_i.addClass('icon-heart-empty');
        }
    });


    //状态切换时改变文字颜色
    $('.video-tool-bar-main .play-continuously,.turn-off-the-light').click(function () {
        var _this_i = $(this).find('i');
        if (_this_i.hasClass('undertone')) {
            _this_i.removeClass('undertone').addClass('thick');
        } else {
            _this_i.removeClass('thick').addClass('undertone');
        }
    });

    //tab标签切换
    $('.video-others-wrapper .tabs .tab').click(function () {
        var _this = $(this);
        if (!_this.hasClass('tab-cur')) {
            $('.video-others-wrapper .tabs').find('.tab').each(function (inx, val) {
                $('.video-others-wrapper .' + $(val).data('tab')).hide();
                $(val).removeClass('tab-cur');

            });
            _this.addClass('tab-cur');
            $('.video-others-wrapper .' + _this.data('tab')).show();

        }
    });
    //评论类型tab切换
    $('.video-others-wrapper .video-comments .mods-wrapper .mods .mod a').click(function () {
        var _this = $(this);
        var _this_mod = _this.closest('.mod');
        if (!_this_mod.hasClass('mod-cur')) {
            _this_mod.closest('.mods').find('.mod').each(function (inx, val) {
                $(val).removeClass('mod-cur').find('.mod-span').removeClass('mod-span-cur');
            });
            _this_mod.addClass('mod-cur').find('.mod-span').addClass('mod-span-cur');
        }
    });
});

//处理文字溢出
$(function () {
    var this_video_desc = $('.video-tool-bar-wrapper .catalog-extra .content>.desc');
    //1 设置所需的长度 字节
    this_video_desc.attr("displayLength", "350");
    //2 调用该插件
    //方式一 溢出与还原切换
    //this_video_desc.un_displayPart();
    //方式二 溢出不还原
    this_video_desc.text_overflow();

    //处理文字溢出
    var this_item_desc = $('.video-tool-bar-wrapper .catalog-extra .content .items .item .item-desc');
    this_item_desc.attr("displayLength", "300");
    this_item_desc.text_overflow();

});


$(function () {
    //监控点击回复事件
    $('.mod-content-wrapper .mod-content-item .comment-info .comment-bars .bars .reply-bar').click(function () {
        var _this = $(this);
        var _this_comment_info = _this.closest('.comment-info');
        var _this_arrow = _this_comment_info.find('.comment-bars').find('.arrow');
        if (!_this_arrow.is(":hidden")) { //不是隐藏的
            _this_arrow.hide();
            _this_comment_info.find('.reply').hide();
        } else {
            _this_arrow.show();
            _this_comment_info.find('.reply').show();
        }

    });

    //监控点赞事件
    $('.mod-content-wrapper .mod-content-item .comment-info .comment-bars .bars .like-bar').click(function () {
        var _this = $(this);
        var _this_i = _this.find('.icon-thumbs-up');
        console.info(_this_i);
        if (!_this_i.hasClass('not-like')) {
            _this_i.addClass('not-like');
        } else {
            _this_i.removeClass('not-like');
        }

    });

    //举报按钮隐藏展示事件
    $('.mod-content-wrapper .mod-content-item .comment-info .comment-bars .bars').hover(function () {
        var _this = $(this);
        _this.find('.report-bar').css('visibility', 'visible');
        _this.find('.report-bar-split').css('visibility', 'visible');
    }, function () {
        var _this = $(this);
        _this.find('.report-bar').css('visibility', 'hidden');
        _this.find('.report-bar-split').css('visibility', 'hidden');
    });

});