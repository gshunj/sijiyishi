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


function selfAlert(options) {
    _ALERT_TIME_OUT_(options);
}
