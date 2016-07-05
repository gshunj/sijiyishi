/**
 * Created by jiangguoshun on 16/7/3.
 */

var SELF_ALERT_TYPES = {
	primary: 'primary',
	success: 'success',
	info: 'info',
	warning: 'warning',
	danger: 'danger'
};

$(function() {
	$('.-self-alert-div-a-class-').click(function() {
		_SELF_ALERT_DIV_CLOSE_();
	});
});

function _SELF_ALERT_DIV_CLOSE_() {
	$('.-self-alert-div-class-').alert('close');
}

function _ALERT_TIME_OUT_(options) {
	_SELF_ALERT_DIV_CLOSE_();
	var type = "info";
	if (options.type) {
		type = options.type;
	}
	var position = 'top:0';
	if (options.position) {
		position = options.position;
	}
	var height = '60px';
	if (options.height) {
		height = options.height;
	}
	var width = '100%';
	if (options.width) {
		width = options.width;
	}
	var msg = options.msg;
	var colseA = "";
	if (options.hasClose == true) {
		colseA = '<a href="#" class="close -self-alert-div-a-class-" data-dismiss="alert"> &times; </a>';
	}

	$('body').append('<div class="alert alert-' + type + ' fade in -self-alert-div-class-" style = "position: fixed;width: ' + width + ';height: ' + height + ';' + position + ';font-size: 16px;letter-spacing: 3px;text-align: center;line-height: 30px;opacity:0.9;" ><strong>!</strong>' + msg + colseA + '</div>');

	if (options.time) {
		setTimeout(function() {
			_SELF_ALERT_DIV_CLOSE_();
		}, options.time);
	}

}

/**
 * 根据bootstrap提示框扩展的提示功能
 * @param options {type:SELF_ALERT_TYPES.info,position:top:0,height:60px,width:100%,msg:'!请输入...',hasClose:true,time:3000}
 */
function selfAlert(options) {
	_ALERT_TIME_OUT_(options);
}

/**
 * jQuery扩展插件 - 向右划出
 * @param speed
 * @param callback
 */
jQuery.fn.slideLeftHide = function(speed, callback) {
	this.animate({
		width: "hide",
		paddingLeft: "hide",
		paddingRight: "hide",
		marginLeft: "hide",
		marginRight: "hide"
	}, speed, callback);
};
/**
 * jQuery扩展插件 - 向左滑入
 * @param speed
 * @param callback
 */
jQuery.fn.slideLeftShow = function(speed, callback) {
	this.animate({
		width: "show",
		paddingLeft: "show",
		paddingRight: "show",
		marginLeft: "show",
		marginRight: "show"
	}, speed, callback);
};

/**
 * 百度分享设置
 */
var _BD_SHARE_COMMON_ = {};
window._bd_share_config = {
	common: {
		//此处放置通用设置
		bdText: _BD_SHARE_COMMON_.bdText,
		bdDesc: _BD_SHARE_COMMON_.bdDesc,
		bdUrl: _BD_SHARE_COMMON_.bdUrl,
		bdPic: _BD_SHARE_COMMON_.bdPic,
		//bdMiniList: [],
		onBeforeClick: function() {
			//点击前事件
		},
		onAfterClick: function() {
			//点击后事件
		}
	},
	share: [
			//此处放置分享按钮设置
			{
				bdSize: 16
			}
		]
		//	,
		//			slide: [
		//				//此处放置浮窗分享设置
		//			],
		//	image: [
		//		//此处放置图片分享设置
		//	],
		//	selectShare: [
		//		//此处放置划词分享设置
		//	]
};

//以下为js加载部分
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];