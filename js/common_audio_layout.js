/**
 * 从新初始化每一列的宽度
 */
$(function () {
//音频div包装对象
    var _AUDIOS_WRAPPER_ = $('.audios-wrapper');
    var _AUDIOS_WRAPPER_WIDTH_ = _AUDIOS_WRAPPER_.data('width');

    _AUDIOS_WRAPPER_.width(_AUDIOS_WRAPPER_WIDTH_);
    var _AUDIOS_ITEM_ = _AUDIOS_WRAPPER_.data('item');

    //每个音频
    var _AUDIO_ = _AUDIOS_WRAPPER_.find('.audios .audio');
    var _AUDIO_WIDTH_ = (_AUDIOS_WRAPPER_WIDTH_ - (_AUDIOS_ITEM_ * 2) - ((_AUDIOS_ITEM_ - 1) * 20)) / 4;
    _AUDIO_.width(_AUDIO_WIDTH_);
    //每个音频的图片

    //修正图片的宽度
    var _AUDIO_IMG_ = _AUDIOS_WRAPPER_.find('.audios .audio .img-div img');
    _AUDIO_IMG_.width(_AUDIO_WIDTH_);

    //修正 完结等提示的左移位置
    var _AUDIO_TIP_WRAPPER_ = _AUDIOS_WRAPPER_.find('.audios .audio .img-div .tip-wrapper');
    _AUDIO_TIP_WRAPPER_.css('margin-left', (_AUDIO_WIDTH_ - 20) + 'px');

});


/**
 * 音频列表布局
 */
$(function () {
    //音频div包装对象
    var _AUDIOS_WRAPPER_ = $('.audios-wrapper');
    //音频列
    var _AUDIOS_ = _AUDIOS_WRAPPER_.find('.audios');
    //音频列个数
    var _AUDIOS_LENGTH_ = _AUDIOS_.length;
    //音频div包装对象 初始高度
    var _AUDIOS_WRAPPER_HEIGHT_ = 0;
    //音频列显示优先级
    var _AUDIOS_WRAPPER_Z_INDEX_ = 10000;
    //每个音频列间距10px
    var _AUDIOS_MARGIN_TOP_ = 10;

    //第一个音频列定义高度
    var _AUDIOS_FIRST_HEIGHT_ = 0;
    _AUDIOS_.each(function (inx, val) {
        var _this = $(val)
        if (inx == 0) {
            _AUDIOS_FIRST_HEIGHT_ = _this.height(); //初始化第一个音频列高度
        }

        if (inx == (_AUDIOS_LENGTH_ - 1)) {
            _AUDIOS_WRAPPER_HEIGHT_ = _AUDIOS_WRAPPER_HEIGHT_ + _this.height(); //增加音频div包装对象高度
        } else {
            _AUDIOS_WRAPPER_HEIGHT_ = _AUDIOS_WRAPPER_HEIGHT_ + _this.height() + _AUDIOS_MARGIN_TOP_;
        }

        _this.css('z-index', _AUDIOS_WRAPPER_Z_INDEX_--); //设置优先级
        if (inx > 0) {
            _this.css('margin-top', (_AUDIOS_FIRST_HEIGHT_ * inx + _AUDIOS_MARGIN_TOP_ * inx) + 'px'); //设置音频列间距
        }
    });
    _AUDIOS_WRAPPER_.height(_AUDIOS_WRAPPER_HEIGHT_); //音频div包装对象高度

    _AUDIOS_.find('.audio').hover(function () {
        var _this = $(this);
        _this.find('.content-div .desc').show();
    }, function () {
        var _this = $(this);
        _this.find('.content-div .desc').hide();
    });
});