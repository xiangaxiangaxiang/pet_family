'use strict';
require('./index.css');
var _pf = require('util/pf.js');
//通用页面头部 
var header = {
	init: function() {
		this.onLoad();
		this.bindEvent();
	},
	onLoad : function(){
		var keyword = _pf.getUrlParam('keyword');
		//如果keyword存在则回填输入框
		if(keyword){
			$('#search-input').val(keyword);
		};
	},
	bindEvent: function() {
		var _this = this;
		$('#search-btn').click(function(){
			_this.searchSubmit();
		});
		//输入回车后，做搜索提交
		$('#search-input').keyup(function(e){
			//13是回车键
			if(e.keyCode === 13){
				_this.searchSubmit();
			}
		});
	},
	//搜索提交
	searchSubmit : function(){
		var keyword = $('#search-input').val();
		//如果提交的时候有keyword，正常跳转到list页
		if(keyword){
			window.location.href = './list.html?keyword='+keyword;
		}else{
			//如果keyword为空跳转回去首页
			_pf.goHome();
		}
	}
};

header.init();