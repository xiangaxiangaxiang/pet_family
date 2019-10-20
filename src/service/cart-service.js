'use strict';
var _pf = require('util/pf.js');

var _cart = {
	//获取购物车数量
	getCartCount: function(resolve, reject) {
		_pf.request({
			url: _pf.getServerUrl('/cart/get_cart_product_count.do'),
			success: resolve,
			error: reject
		});
	},
	//添加到购物车
	addToCart: function(productInfo, resolve, reject) {
		_pf.request({
			url: _pf.getServerUrl('/cart/add.do'),
			data: productInfo,
			success: resolve,
			error: reject
		});
	},
	//获取购物车列表
	getCartList: function(resolve, reject) {
		_pf.request({
			url: _pf.getServerUrl('/cart/list.do'),
			success: resolve,
			error: reject
		});
	},
	//选中商品
	selectProduct: function(productId, resolve, reject) {
		_pf.request({
			url: _pf.getServerUrl('/cart/select.do'),
			data: {
				productId: productId
			},
			success: resolve,
			error: reject
		});
	},
	//取消选中商品
	unselectProduct: function(productId, resolve, reject) {
		_pf.request({
			url: _pf.getServerUrl('/cart/un_select.do'),
			data: {
				productId: productId
			},
			success: resolve,
			error: reject
		});
	},
	//取消全部选中商品
	unselectAllProduct: function(resolve, reject) {
		_pf.request({
			url: _pf.getServerUrl('/cart/un_select_all.do'),
			success: resolve,
			error: reject
		});
	},
	//全部选中商品
	selectAllProduct: function(resolve, reject) {
		_pf.request({
			url: _pf.getServerUrl('/cart/select_all.do'),
			success: resolve,
			error: reject
		});
	},
	//更新商品数量
	updateProduct: function(productInfo, resolve, reject) {
		_pf.request({
			url: _pf.getServerUrl('/cart/update.do'),
			data: productInfo,
			success: resolve,
			error: reject
		});
	},
	//删除指定商品
	deleteProduct: function(productIds, resolve, reject) {
		_pf.request({
			url: _pf.getServerUrl('/cart/delete_product.do'),
			data: {
				productIds : productIds
			},
			success: resolve,
			error: reject
		});
	}
};

module.exports = _cart;