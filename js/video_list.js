/**
 * Created by jiangguoshun on 16/7/7.
 */
$(function () {
    //主标签切换事件
    $('.content-wrapper .category-type-tags-wrapper .type-tags .type-tag .tag').click(function () {
        var _this = $(this);
        var _this_type_tag = _this.closest('.type-tag');
        if (_this.hasClass('more-btn')) {
            _this.hide();
            _this_type_tag.find('.more').show();
        } else if (_this.hasClass('put-away-btn')) {
            _this_type_tag.find('.more').hide();
            _this_type_tag.find('.more-btn').show();
        } else if (!_this.hasClass('cur-active')) {
            _this_type_tag.find('.tag').each(function (inx, val) {
                $(val).removeClass('cur-active');
            });
            _this.addClass('cur-active');
        }
    });

    //排序点击事件
    $('.cur-videos-wrapper .cur-videos-header .sort-wrapper .sort').click(function () {
        var _this = $(this);
        var _this_i = _this.find('i');
        if (_this_i.hasClass('undertone')) {
            _this.closest('.sort-wrapper').find('.sort').each(function (inx, val) {
                $(val).find('i').removeClass('thick').addClass('undertone');
            });
            _this_i.removeClass('undertone').addClass('thick');
        } else {
            _this_i.removeClass('thick').addClass('undertone');
        }
    });

    //来源点击事件
    $('.cur-videos-wrapper .cur-videos-header .from-type-wrapper .from-type').click(function () {
        var _this = $(this);
        var _this_i = _this.find('i');
        if (_this_i.hasClass('undertone')) {
            _this.closest('.from-type-wrapper').find('.from-type').each(function (inx, val) {
                $(val).find('i').removeClass('thick').addClass('undertone');
            });
            _this_i.removeClass('undertone').addClass('thick');
        } else {
            _this_i.removeClass('thick').addClass('undertone');
        }
    });

});