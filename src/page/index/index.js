'use strict';

require('page/common/nav/index.js');
require('./index.css');
require('page/common/header/index.js');
require('util/slider/index.js');

var navSide = require('page/common/nav-side/index.js');
var _pf = require('util/pf.js');
var templateBanner = require('./index.string')

$(function() {
	//渲染banner的HTML
	var bannerHtml = _pf.renderHtml(templateBanner);
	$('.banner-con').html(bannerHtml);
    //初始化banner
    var $slider = $('.banner').unslider({
    	dots: true
    });
    //前一张后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
    	var forward = $(this).hasClass('prev') ? 'prev' : 'next';
    	$slider.data('unslider')[forward]();
    });
});

