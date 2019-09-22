
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _user = require('service/user-service.js');
var _pf = require('util/pf.js');

//表单里的错误提示
var formError = {
	show : function(errMsg){
		$('.error-item').show().find('.err-msg').text(errMsg);
	},
	hide : function(){
		$('.error-item').hide().find('.err-msg').text('');
	}
};

var page = {
	init : function(){
		this.bindEvent();	
	},
	bindEvent : function(){
		var _this = this;
		//验证username
		$('#username').blur(function(){
			var username = $.trim($(this).val());
			//如果为空则不验证
			if(!username){
				return;
			}
			//异步验证用户名是否存在
			_user.checkUsername(username,function(res){
				formError.hide();
			},function(errMsg){
				formError.show(errMsg);
			});
		});
		//注册按钮的点击
		$('#submit').click(function(){
			_this.submit();
		});
		//如果按下回车键也进行提交
		$('.user-content').keyup(function(e){
			if(e.keyCode === 13){
				_this.submit();
			}
		});
	},
	//提交表单
	submit : function(){
		var formData = {
			username : $.trim($('#username').val()),
			password : $.trim($('#password').val()),
			passwordConfirm : $.trim($('#password-confirm').val()),
			phone : $.trim($('#phone').val()),
			email : $.trim($('#email').val()),
			question : $.trim($('#question').val()),
			answer : $.trim($('#answer').val())
		},
		//表单验证结果
		validateResult = this.formValidate(formData);
		//验证成功
		if(validateResult.status){
			//提交
			_user.register(formData,function(res){
				window.location.href = './result.html?type=register';
			},function(errMsg){
				formError.show(errMsg);
			});
		}
		//验证失败
		else{
			//错误提示
			formError.show(validateResult.msg);
		}
	},
	//表单字段验证
	formValidate : function(formData){
		var result = {
			status : false,
			msg    : ''
		};
		//验证用户名是否为空
		if(!_pf.validate(formData.username,'require')){
			result.msg = '用户名不能为空';
			return result;
		}
		//验证密码是否为空
		else if(!_pf.validate(formData.password,'require')){
			result.msg = '密码不能为空';
			return result;
		}
		//验证密码长度
		else if(formData.password.length < 6){
			result.msg = '密码长度不能少于6位';
			return result;
		}
		else if(formData.password !== formData.passwordConfirm){
			result.msg = '两次输入的密码不一样';
			return result;
		}
		
		
		//验证手机号
		else if(!_pf.validate(formData.phone,'phone')){
			result.msg = '手机格式错误';
			return result;
		}
		//验证邮箱
		else if(!_pf.validate(formData.email,'email')){
			result.msg = '邮箱格式错误';
			return result;
		}
		//验证密码提示问题
		else if(!_pf.validate(formData.question,'require')){
			result.msg = '密码提示问题不能为空';
			return result;
		}
		//验证密码提示问题答案
		else if(!_pf.validate(formData.answer,'require')){
			result.msg = '密码提示问题答案不能为空';
			return result;
		}
		//通过验证
		result.status = 'true';
		result.msg = '验证通过';
		return result;
	}
};
$(function(){
	page.init();
});