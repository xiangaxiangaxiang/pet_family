'use strict';
var _pf = require('util/pf.js');

var _address = {
	//获取地址列表
	getAddressList : function(resolve, reject){
        _pf.request({
            url     : _pf.getServerUrl('/shipping/list.do'),
            data    : {
            	pageSize : 50,
            },
            success : resolve,
            error   : reject
        });
    },
    //获取地址列表
	save : function(addressInfo,resolve, reject){
        _pf.request({
            url     : _pf.getServerUrl('/shipping/add.do'),
            data    : addressInfo,
            success : resolve,
            error   : reject
        });
   },
   //修改地址提交
	update : function(addressInfo,resolve, reject){
        _pf.request({
            url     : _pf.getServerUrl('/shipping/update.do'),
            data    : addressInfo,
            success : resolve,
            error   : reject
        });
   },
   //删除收件人
	deleteAddress : function(shippingId,resolve, reject){
        _pf.request({
            url     : _pf.getServerUrl('/shipping/del.do'),
            data    : {
            	shippingId : shippingId
            },
            success : resolve,
            error   : reject
        });
   },
   // 获取单条收件人信息
    getAddress : function(shippingId, resolve, reject){
        _pf.request({
            url     : _pf.getServerUrl('/shipping/select.do'),
            data    : {
                shippingId : shippingId
            },
            success : resolve,
            error   : reject
        });
    }
   
};

module.exports = _address;
