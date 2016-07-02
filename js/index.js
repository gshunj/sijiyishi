/**
 * Created by jiangguoshun on 16/7/2.
 */
$(function () {
    var _LIVE_VIDEO_ITEM_HEIGHT_ = 'auto';
    var _LIVE_VIDEO_ITEM_HEIGHT_CONTENT_DIV_TITLE_HEIGHT_ = 'auto';

    $('.live-video-item').mouseover(function () {
        var _this = $(this);
        _this.find('.desc').show();
        _LIVE_VIDEO_ITEM_HEIGHT_ = _this.css('height');
        _this.css('height', "auto");

        _LIVE_VIDEO_ITEM_HEIGHT_CONTENT_DIV_TITLE_HEIGHT_ = _this.find('.content-div .title').css('height');

        _this.find('.content-div .title').css('height', "auto").css('white-space', 'normal');
    });
    $('.live-video-item').mouseout(function () {
        var _this = $(this);
        _this.find('.desc').hide();
        _this.css('height', _LIVE_VIDEO_ITEM_HEIGHT_);
        _this.find('.content-div .title').css('height', _LIVE_VIDEO_ITEM_HEIGHT_CONTENT_DIV_TITLE_HEIGHT_).css('white-space', 'nowrap');
    });

});
