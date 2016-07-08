/**
 * Created by jiangguoshun on 16/7/6.
 */

$(function () {
    //目录中集数的鼠标悬浮事件
    $('.main-content .video-main-wrapper .video-tool-bar-wrapper .catalog-extra .content .items .item').hover(
        function () {
            var _this = $(this);
            _this.closest('.items').find('.item .item-desc').hide();
            _this.find('.item-desc').show();
        }, function () {

        }
    );

    //通过目录按钮打开关闭目录侧边栏
    $('.video-tool-bar-main .catalog').click(function () {
        //还原展开当前的集数介绍
        $('.main-content .video-main-wrapper .video-tool-bar-wrapper .catalog-extra .content .items .item').each(function (inx, val) {
            var _this_val = $(val);
            if (_this_val.find('.item-title .item-title-left').hasClass('cur-item')) {
                _this_val.find('.item-desc').show();
            } else {
                _this_val.find('.item-desc').hide();
            }
        });


        var catalogExtra = $('.video-tool-bar-wrapper').find('.' + $(this).data('extra'));
        if (catalogExtra.is(":hidden")) {
            catalogExtra.slideLeftShow();
            $(this).find('i').removeClass('undertone').addClass('thick');
        } else {
            catalogExtra.slideLeftHide();
            $(this).find('i').removeClass('thick').addClass('undertone');
        }
    });
    //收起目录侧边栏
    $('.video-tool-bar-wrapper .catalog-extra .content .title .title-right').click(function () {
        $('.video-tool-bar-main .catalog').trigger('click');
    });

    //监控视频侧边栏的鼠标悬停事件
    $('.video-tool-bar-main .video-bar').hover(function () {
        var _this = $(this);
        if (_this.hasClass('share') || _this.hasClass('download') || _this.hasClass('comment')) {
            _this.find('i').removeClass('undertone').addClass('thick');
        }
        if (_this.hasClass('catalog')) { //目录不处理
            return;
        }
        $('.video-tool-bar-wrapper').find('.' + $(this).data('extra')).slideLeftShow();
    }, function () {
        var _this = $(this);

        if (_this.hasClass('share') || _this.hasClass('download') || _this.hasClass('comment')) {
            _this.find('i').removeClass('thick').addClass('undertone');
        }
        if (_this.hasClass('catalog')) {
            return;
        }
        $('.video-tool-bar-wrapper').find('.' + $(this).data('extra')).slideLeftHide();
    });

    //分享侧边栏有动画效果 特殊处理
    $('.video-tool-bar-wrapper .share-extra').hover(function () {
        $(this).stop().show();
    }, function () {
        $(this).slideLeftHide();
    });

    //评论侧边被点击 跳到评论位置
    $('.video-tool-bar-main .comment').click(function () {
        $("html,body").animate({
            scrollTop: $('.video-main-info-wrapper .video-others-wrapper').offset().top
        }, 500);
        $('.video-others-wrapper .tabs .comment-tab').trigger('click');
    });
    //点赞侧边栏点击
    $('.video-tool-bar-main .like').click(function () {
        var _this = $(this);

        var _this_i = _this.find('i');
        var _this_span = _this.find('span');
        if (_this_i.hasClass('undertone')) {
            _this_i.removeClass('undertone').addClass('thick');
            _this_span.html(1000);
        } else {
            _this_i.removeClass('thick').addClass('undertone');
            _this_span.html(999);
        }
    });

    //弹幕侧边栏点击
    $('.video-tool-bar-main .barrage').click(function () {
        var _this_i = $(this).find('i');
        if (_this_i.hasClass('undertone')) {
            _this_i.removeClass('undertone').addClass('thick');
        } else {
            _this_i.removeClass('thick').addClass('undertone');
        }
    });

    //收藏侧边栏 有已收藏和为收藏两种状态 状态切换
    $('.video-tool-bar-main .collection').click(function () {
        var _anohter_this = $('.video-info-wrapper .video-info .bar .collection-bar');
        var _anohter_this_i = _anohter_this.find('i');

        var _this_i = $(this).find('i');
        if (_this_i.hasClass('undertone')) {
            _this_i.removeClass('undertone');
            _this_i.addClass('thick');

            _anohter_this_i.removeClass('undertone');
            _anohter_this_i.addClass('thick');
        } else {
            _this_i.removeClass('thick');
            _this_i.addClass('undertone');

            _anohter_this_i.removeClass('thick');
            _anohter_this_i.addClass('undertone');
        }
    });

    //收藏按钮点击事件
    $('.video-info-wrapper .video-info .bar .collection-bar').click(function () {
        var _anohter_this = $('.video-tool-bar-main .collection');
        var _anohter_this_i = _anohter_this.find('i');

        var _this_i = $(this).find('i');
        if (_this_i.hasClass('undertone')) {
            _this_i.removeClass('undertone');
            _this_i.addClass('thick');

            _anohter_this_i.removeClass('undertone');
            _anohter_this_i.addClass('thick');
        } else {
            _this_i.removeClass('thick');
            _this_i.addClass('undertone');

            _anohter_this_i.removeClass('thick');
            _anohter_this_i.addClass('undertone');
        }
    });

    //下载按钮
    $('.video-info-wrapper .video-info .bar .download-bar').hover(function () {
        var _this = $(this);
        _this.find('i').removeClass('undertone').addClass('thick');
    }, function () {
        var _this = $(this);
        _this.find('i').removeClass('thick').addClass('undertone');
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

    layer.config({
        extend: ['../layer-v2.4/skin/moon/style.css'], //加载新皮肤
        skin: 'layer-ext-moon'
    });

    //举报按钮点击事件
    $('.mod-content-wrapper .mod-content-item .comment-info .comment-bars .bars .report-bar').click(function () {
        _SHOW_REPORT_WRAPPER_FUN_();
    });


    //查看对话按钮点击事件
    $('.mod-content-wrapper .mod-content-item .comment-info .comment-bars .bars .dialog-bar').click(function () {
        _RESET_SHOW_DIALOG_MODULE_WRAPPER_FUN_();
        layer.open({
            type: 1,
            title: ["查看对话", 'background-color:rgb(255,255,255);text-align:center;font-weight: 500;'],
            closeBtn: 0,
            shadeClose: true,
            skin: 'layer-ext-moon',
            content: $('.show-dialog-module-wrapper'),
            area: ['520px', '450px'],
            shift: 4,
            scrollbar: false
        });

    });

});

/**
 * 弹出举报框
 * @private
 */
function _SHOW_REPORT_WRAPPER_FUN_() {
    layer.open({
        type: 1,
        title: ["举 报", 'background-color:rgb(255,255,255);text-align:center;font-weight: 500;'],
        closeBtn: 0,
        shadeClose: true,
        skin: 'layer-ext-moon',
        content: $('.report-model-wrapper'),
        area: ['550px', 'auto'],
        shift: 4,
        scrollbar: false
    });
}
