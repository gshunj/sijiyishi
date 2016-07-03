/**
 * Created by jiangguoshun on 16/7/2.
 */
$(function () {
    $('.main-content-wrapper').css('top', ($('.top-header-wrapper').height() - 3));
    // $('a').click(function () {
    //     $(this).find('span').css('color','rgb(255,255,255)');
    // });
});

function _HIDE_TOP_SIDEBAR_() {
    $('.top-header-wrapper .sidebar').addClass('hid');
}


function _SHOW_TOP_SIDEBAR_() {
    $('.top-header-wrapper .sidebar').removeClass('hid');
}

$(function () {
    $('.top-header-wrapper .show-top-header-sidebar-a').click(function () {
        _SHOW_TOP_SIDEBAR_();
    });

    $('.top-header-wrapper .sidebar .side-close-btn').click(function () {
        _HIDE_TOP_SIDEBAR_();
    });
    $('.top-header-wrapper .sidebar .left-side').click(function () {
        _HIDE_TOP_SIDEBAR_();
    });
});
