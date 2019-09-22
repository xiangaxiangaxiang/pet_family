'use strict';
var _pf = require('util/pf.js');

var _product = {
	//获取商品列表
	getProductList : function(listParam, resolve, reject){
        _pf.request({
            url     : _pf.getServerUrl('/product/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    //获取商品详细信息
	getProductDetail : function(productId, resolve, reject){
        _pf.request({
            url     : _pf.getServerUrl('/product/detail.do'),
            data    : {
            	productId : productId
            },
            success : resolve,
            error   : reject
        });
    }
};

module.exports = _product;


