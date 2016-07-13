var _PLAY_PROGRESS_SLIDER_; //播放进度条
var _VOLUME_PROGRESS_BAR_; //音量进度条

/**
 * 初始化播放控件
 * @param {Object} options 进度初始化参数
 */
function initAudioControl(options) {
	_PLAY_PROGRESS_SLIDER_ = $('#play-progress').slider(options);
	_VOLUME_PROGRESS_BAR_ = $('#volume-progress-bar').slider({
		max: 100,
		min: 0,
		step: 1,
		value: 100,
		tooltip: 'hide',
		orientation: "vertical",
		reversed: true
	});

	_PLAY_PROGRESS_SLIDER_.on('slide slideStop', function(slideEvt) {
		sound.setPosition(slideEvt.value);
	});

	_VOLUME_PROGRESS_BAR_.on('slide slideStop', function(slideEvt) {
		var _this_i = _AUDIO_CONTROL_BARS_.find('.volume-bar').find('i');

		if(slideEvt.value == 0) {
			_this_i.removeClass('icon-volume-up').removeClass('icon-volume-down').addClass('icon-volume-off');
		} else if(slideEvt.value <= 50) {
			_this_i.removeClass('icon-volume-up').removeClass('icon-volume-off').addClass('icon-volume-down');
		} else {
			_this_i.removeClass('icon-volume-down').removeClass('icon-volume-off').addClass('icon-volume-up');
		}
		sound.setVolume(slideEvt.value);
	});
}

//播放控制条包装器
var _AUDIO_CONTROL_WRAPPER_ = $('.audio-control-wrapper');
//资源下载进度--未下载的进度条
var _NO_LOAD_PROGRESS_ = _AUDIO_CONTROL_WRAPPER_.find('.load-progress-wrapper .no-load-progress');
//资源下载进度--下载的进度条
var _LOADED_PROGRESS_ = _AUDIO_CONTROL_WRAPPER_.find('.load-progress-wrapper .loaded-progress');

//控制台工具
var _AUDIO_CONTROL_BARS_ = _AUDIO_CONTROL_WRAPPER_.find('.audio-control-bars');

//声音控制台鼠标移上、移开事件
_AUDIO_CONTROL_BARS_.find('.volume-bar').hover(function() {
	_AUDIO_CONTROL_WRAPPER_.find('.volume-progress-bar').show();
}, function() {
	_AUDIO_CONTROL_WRAPPER_.find('.volume-progress-bar').hide();
}).click(function() {
	var _this_i = $(this).find('i');
	if(_this_i.hasClass('icon-volume-up') || _this_i.hasClass('icon-volume-down')) {
		sound.mute(); //静音
		_this_i.removeClass('icon-volume-up').removeClass('icon-volume-down').addClass('icon-volume-off');
	} else {
		sound.unmute(); //取消静音
		_this_i.removeClass('icon-volume-off').removeClass('icon-volume-down').addClass('icon-volume-up');

	}

});

//声音控制条鼠标移上、移开事件
_AUDIO_CONTROL_WRAPPER_.find('.volume-progress-bar').hover(function() {
	$(this).show();
}, function() {
	$(this).hide();
});

//播放暂停事件
_AUDIO_CONTROL_BARS_.find('.play-bar').click(function() {
	var _this = $(this);
	var _this_i = _this.find('i');

	//开始播放
	if(_this_i.hasClass('icon-play-circle')) {
		_this_i.removeClass('icon-play-circle').removeClass('icon-large').addClass('icon-pause');
		sound.play();
	} else { //暂停播放
		_this_i.removeClass('icon-pause').addClass('icon-play-circle').addClass('icon-large');
		sound.pause();
	}
});

//音频资源对象
var sound;
//控制台事件
soundManager.setup({
	url: 'soundmanagerv297a-20150601/swf/',
	flashVersion: 9, // optional: shiny features (default = 8)
	//			pan:80,
	// optional: ignore Flash where possible, use 100% HTML5 mode
	// preferFlash: false,
	onready: function() {
		sound = soundManager.createSound({
			id: 'sound',
			url: 'http://218.90.204.19:8666/file/4e1b3bf0d51221a6cc2309b2740f9201?sdk_id=258&task_id=2064646648392450238&business_id=4097&bkt=p-f08e9a4d9f4b31a18fa1fd7cf18bc20f&xcode=1815ee0b93c9f32a04b779b451aa9a720126a82a11f3933865d75071b4dbd0f7&fid=3660849965-250528-610208476667898&time=1468402958&sign=FDTAXGERLBH-DCb740ccc5511e5e8fedcff06b081203-KURso4zlQDEjBoNYIYp9FxPmu%2BQ%3D&to=sd&fm=Nan,B,T,t&sta_dx=23&sta_cs=352&sta_ft=mp3&sta_ct=7&fm2=Nanjing02,B,T,t&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=14004e1b3bf0d51221a6cc2309b2740f920158fe1c2c00000172fa6c&sl=68091980&expires=8h&rt=pr&r=323932143&mlogid=4516522888177681000&vuk=3660849965&vbdid=416083375&fin=%E6%B2%B3%E5%8D%97%E5%9D%A0%E5%AD%90%E5%A4%A7%E6%98%8E%E5%A5%87%E5%86%A4%E5%AE%89%E6%99%AF%E9%BE%99%E9%99%8D%E9%A6%99%E5%8C%85%E5%85%AC%E9%99%8D%E5%A6%96%E7%AD%8960%E9%A6%96MP3%E6%89%93%E5%8C%85%E4%B8%8B%E8%BD%BD%E8%81%94%E7%B3%BBQ%20Q%202398873325.mp3&fn=%E6%B2%B3%E5%8D%97%E5%9D%A0%E5%AD%90%E5%A4%A7%E6%98%8E%E5%A5%87%E5%86%A4%E5%AE%89%E6%99%AF%E9%BE%99%E9%99%8D%E9%A6%99%E5%8C%85%E5%85%AC%E9%99%8D%E5%A6%96%E7%AD%8960%E9%A6%96MP3%E6%89%93%E5%8C%85%E4%B8%8B%E8%BD%BD%E8%81%94%E7%B3%BBQ%20Q%202398873325.mp3&slt=pm&uta=0&rtype=1&iv=0&isw=0&dp-logid=4516522888177681000&dp-callid=0.1.1&sdk_id=258',
			autoPlay: false, //same as default
			autoLoad: true,
			volume: 100,
			onplay: function() {},
			whileplaying: function() {
				_PLAY_PROGRESS_SLIDER_.slider('setValue', this.position);
				_AUDIO_CONTROL_WRAPPER_.find('.top-wrapper .time-and-play-wrapper .cur-time').html(getShowTime(this.position));
			},
			onload: function(status) {
				if(status) {
					var options = {
						max: sound.duration,
						min: 0,
						step: 1,
						value: 0,
						formatter: function(val) {
							return getShowTime(val);
						}
					};

					initAudioControl(options);

					_AUDIO_CONTROL_WRAPPER_.find('.top-wrapper .time-and-play-wrapper .time-total').html(getShowTime(sound.duration));

				} else {
					var alettOptions = {
						type: SELF_ALERT_TYPES.danger,
						msg: '加载出错',
						hasClose: true,
						time: 2000
					};

					selfAlert(alettOptions)
						//alert('加载出错');
				}

			},
			onfinish: function() {
				//切换播放按钮样式
				_AUDIO_CONTROL_BARS_.find('.play-bar').trigger('click');
			},
			whileloading: function() {

				drawProgressBar();

				//console.info(this.bytesLoaded + "=====" + this.bytesTotal + "=====" + this.duration);
			},
			ondataerror: function() {
				alert('ondataerror')
			}
		});

	},
	ontimeout: function(status) {
		alert(status);
		if(!status.success) {
			alert('The status is ' + status.success + ', the error type is ' + status.error.type);
		}
	}
});

/**
 * 画进度条
 */
function drawProgressBar() {
	//画进度条
	var curBuffered;
	for(var i = 0; i < sound.buffered.length; i++) {
		if(sound.buffered[i].start <= sound.position && sound.buffered[i].end >= sound.position) {
			curBuffered = sound.buffered[i];
			break;
		}
	}
	if(curBuffered) {
		var curWith = _NO_LOAD_PROGRESS_.width() * curBuffered.start / sound.duration +
			(curBuffered.end - curBuffered.start) * _NO_LOAD_PROGRESS_.width() / sound.duration;
		//			console.info(curWith)
		_LOADED_PROGRESS_.animate({
			width: parseInt(curWith + '')
		});
	}

}

/**
 * 获取格式化后的时间
 * * @param {Object} millisecond
 */
function getShowTime(millisecond) {
	var timeTotalCount_h = parseInt((millisecond / 1000 / 60 / 60) + "");
	if(timeTotalCount_h) {
		if(timeTotalCount_h < 10) {
			timeTotalCount_h = '0' + timeTotalCount_h + ":"
		} else {
			timeTotalCount_h = timeTotalCount_h + ":"
		}
	} else {
		timeTotalCount_h = '';
	}
	var timeTotalCount_m = parseInt((millisecond / 1000 / 60) + "");
	if(timeTotalCount_m) {
		if(timeTotalCount_m < 10) {
			timeTotalCount_m = '0' + timeTotalCount_m + ":"
		} else {
			timeTotalCount_m = timeTotalCount_m + ":"
		}
	} else {
		timeTotalCount_m = '00:';
	}
	var timeTotalCount_s = parseInt((millisecond / 1000 % 60) + '');
	if(timeTotalCount_s) {
		if(timeTotalCount_s < 10) {
			timeTotalCount_s = '0' + timeTotalCount_s;
		}
	} else {
		timeTotalCount_s = '00';
	}
	var timeTotalCount = timeTotalCount_h + timeTotalCount_m + timeTotalCount_s;
	return timeTotalCount;
}

//重置播放控制台 样式
$(function() {
	if(_AUDIO_CONTROL_WRAPPER_.data('width')) {
		_AUDIO_CONTROL_WRAPPER_.width(_AUDIO_CONTROL_WRAPPER_.data('width'));
		_AUDIO_CONTROL_WRAPPER_.find('.top-wrapper').width(_AUDIO_CONTROL_WRAPPER_.width());
		_AUDIO_CONTROL_BARS_.width(_AUDIO_CONTROL_WRAPPER_.width());

		_AUDIO_CONTROL_BARS_.find('.play-progress-bar').width(_AUDIO_CONTROL_BARS_.width() - 90);

		_AUDIO_CONTROL_WRAPPER_.find('.load-progress-wrapper').width(_AUDIO_CONTROL_BARS_.find('.play-progress-bar').width());
		_AUDIO_CONTROL_WRAPPER_.find('.load-progress-wrapper .no-load-progress').width(_AUDIO_CONTROL_WRAPPER_.find('.load-progress-wrapper').width());

		//修正声音控件的位置
		_AUDIO_CONTROL_WRAPPER_.find('.volume-progress-bar').css('margin-left', _AUDIO_CONTROL_BARS_.width() - 30);

	}
});