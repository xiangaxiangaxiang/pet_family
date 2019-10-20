'use strict';
var _pf = require('util/pf.js');

var _payment = {
	//获取支付信息
	getPaymentInfo : function(orderNumber,resolve, reject){
        _pf.request({
            url     : _pf.getServerUrl('/order/pay.do'),
            data    : {
            	orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    },
    //获取订单状态
	getPaymentStatus : function(orderNumber,resolve, reject){
        _pf.request({
            url     : _pf.getServerUrl('/order/query_order_pay_status.do'),
            data    : {
            	orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    }
   
};

module.exports = _payment;

