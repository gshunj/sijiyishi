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
        } else if (!_this.hasClass('btn-success')) {
            _this_type_tag.find('.tag').each(function (inx, val) {
                $(val).removeClass('btn-success');
            });
            _this.addClass('btn-success');
        }
    });
});