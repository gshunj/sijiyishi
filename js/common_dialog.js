/**
 * Created by jiangguoshun on 16/7/8.
 */


function _RESET_SHOW_DIALOG_MODULE_WRAPPER_FUN_() {
    var _SHOW_DIALOG_MODULE_WRAPPER_ = $('.show-dialog-module-wrapper');
    _SHOW_DIALOG_MODULE_WRAPPER_.show();

    _SHOW_DIALOG_MODULE_WRAPPER_.find('.dialog-items .dialog-item').each(function (inx, val) {
        $(_SHOW_DIALOG_MODULE_WRAPPER_.find('.dialog-time-wrapper .time-items .time-item')[inx]).height($(val).height());
    });

    _SHOW_DIALOG_MODULE_WRAPPER_.find('.dialog-time-wrapper .time-background').height(_SHOW_DIALOG_MODULE_WRAPPER_.find('.dialog-items').height());

}

$(function () {
    //回复点击事件
    $('.show-dialog-module-wrapper .show-dialog-wrapper .dialog-items-wrapper .dialog-items .dialog-item .comment-bars .bars ul .reply-bar').click(function () {
        var _this = $(this);
        var _this_i = _this.find('i');
        var _this_reply = _this.closest('.dialog-item').find('.reply');
        if (_this_i.is(':hidden')) {
            _this_i.show();
            _this_reply.show();
        } else {
            _this_i.hide();
            _this_reply.hide();
        }
        _RESET_SHOW_DIALOG_MODULE_WRAPPER_FUN_();
    });

    //监控输入框的高度变化
    $('.show-dialog-module-wrapper .show-dialog-wrapper .dialog-items-wrapper .dialog-items .dialog-item .reply .textarea-auto-height').bind('input propertychange', function () {
        _RESET_SHOW_DIALOG_MODULE_WRAPPER_FUN_();
    });

    //点赞点击事件
    $('.show-dialog-module-wrapper .show-dialog-wrapper .dialog-items-wrapper .dialog-items .dialog-item .comment-bars .bars ul .like-bar').click(function () {
        var _this = $(this);
        var _this_i = _this.find('i');
        if (_this_i.hasClass('undertone')) {
            _this_i.removeClass('undertone').addClass('thick');
        } else {
            _this_i.removeClass('thick').addClass('undertone');
        }
    });

    //举报点击事件
    $('.show-dialog-module-wrapper .show-dialog-wrapper .dialog-items-wrapper .dialog-items .dialog-item .comment-bars .bars ul .report-bar').click(function () {
        // var _this = $(this);
        _SHOW_REPORT_WRAPPER_FUN_();//在video.js中定义 可参考
    });
});
