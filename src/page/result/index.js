'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _pf = require('util/pf.js');

$(function(){
	var type = _pf.getUrlParam('type') || 'default',
	$element = $('.'+type+'-success');
	if(type === 'payment'){
		var orderNumber = _pf.getUrlParam('orderNumber'),
			$orderNumber = $element.find('.order-number');
		$orderNumber.attr('href',$orderNumber.attr('href')+orderNumber);
	}
	//现实对应的元素
	$element.show();
})
