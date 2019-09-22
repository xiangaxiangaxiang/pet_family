'use strict';
var _pf = require('util/pf.js');

var _order = {
	//获取商品列表
	getProductList : function(resolve, reject){
        _pf.request({
            url     : _pf.getServerUrl('/order/get_order_cart_product.do'),
            success : resolve,
            error   : reject
        });
    },
    //创建订单
    createOrder : function(orderInfo,resolve,reject){
    	_pf.request({
            url     : _pf.getServerUrl('/order/create.do'),
            data    : orderInfo,
            success : resolve,
            error   : reject
        });
    },
    //获取订单列表
    getOrderList : function(listParam,resolve,reject){
    	_pf.request({
            url     : _pf.getServerUrl('/order/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
   	//获取订单详情
   	getOrderDetail : function(orderNumber,resolve,reject){
   		_pf.request({
            url     : _pf.getServerUrl('/order/detail.do'),
            data    : {
            	orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
   	},
   	//取消订单
   	cancelOrder : function(orderNumber,resolve,reject){
   		_pf.request({
            url     : _pf.getServerUrl('/order/cancel.do'),
            data    : {
            	orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
   	}
};

module.exports = _order;


