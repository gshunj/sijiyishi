/**
 * Created by jiangguoshun on 16/7/3.
 */


var SELF_ALERT_TYPES = {primary: 'primary', success: 'success', info: 'info', warning: 'warning', danger: 'danger'};

$(function () {
    $('.-self-alert-div-a-class-').click(function () {
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
        setTimeout(function () {
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
jQuery.fn.slideLeftHide = function (speed, callback) {
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
jQuery.fn.slideLeftShow = function (speed, callback) {
    this.animate({
        width: "show",
        paddingLeft: "show",
        paddingRight: "show",
        marginLeft: "show",
        marginRight: "show"
    }, speed, callback);
};



