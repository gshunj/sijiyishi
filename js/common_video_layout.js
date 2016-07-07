/**
 * 视频列表布局
 */
$(function() {
	//视频div包装对象
	var _VIDEOS_WRAPPER_ = $('.videos-wrapper');
	//视频列
	var _VIDEOS_ = _VIDEOS_WRAPPER_.find('.videos');
	//视频列个数
	var _VIDEOS_LENGTH_ = _VIDEOS_.length;
	//视频div包装对象 初始高度
	var _VIDEOS_WRAPPER_HEIGHT_ = 0;
	//视频列显示优先级
	var _VIDEOS_WRAPPER_Z_INDEX_ = 10000;
	//每个视频列间距10px
	var _VIDEOS_MARGIN_TOP_ = 10;

	//第一个视频列定义高度
	var _VIDEOS_FIRST_HEIGHT_ = 0;
	_VIDEOS_.each(function(inx, val) {
		var _this = $(val)
		if (inx == 0) {
			_VIDEOS_FIRST_HEIGHT_ = _this.height(); //初始化第一个视频列高度
		}

		if (inx == (_VIDEOS_LENGTH_ - 1)) {
			_VIDEOS_WRAPPER_HEIGHT_ = _VIDEOS_WRAPPER_HEIGHT_ + _this.height(); //增加视频div包装对象高度
		} else {
			_VIDEOS_WRAPPER_HEIGHT_ = _VIDEOS_WRAPPER_HEIGHT_ + _this.height() + _VIDEOS_MARGIN_TOP_;
		}

		_this.css('z-index', _VIDEOS_WRAPPER_Z_INDEX_--); //设置优先级
		if (inx > 0) {
			_this.css('margin-top', (_VIDEOS_FIRST_HEIGHT_ * inx + _VIDEOS_MARGIN_TOP_) + 'px'); //设置视频列间距
		}
	});
	_VIDEOS_WRAPPER_.height(_VIDEOS_WRAPPER_HEIGHT_); //视频div包装对象高度

	_VIDEOS_.find('.video').hover(function() {
		var _this = $(this);
		_this.find('.content-div .desc').show();
	}, function() {
		var _this = $(this);
		_this.find('.content-div .desc').hide();
	});
});