import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public formErrors = {
    'userName': '',
    'nickName': '',
    'email': '',
    'password': '',
    'confirmPassword': '',
    'formError': '',
    'vcode': ''
    };

  validationMessages = {
    'userName': {
      'required': '用户名必须输入。',
      'minlength': '用户名4到32个字符。'
    },
    'nickName': {
      'required': '昵称必须输入。',
      'minlength': '昵称2到32个字符。'
    },
    'email': {
      'required': '邮箱必须输入。',
      'pattern': '请输入正确的邮箱地址。'
    },
    'password': {
      'required': '密码必须输入。',
      'minlength': '密码至少要8位。'
    },
    'confirmPassword': {
      'required': '重复密码必须输入。',
      'minlength': '密码至少要8位。',
      'validateEqual': "两次输入的密码不一致。"
    },
    'vcode': {
      'required': '验证码必须输入。',
      'minlength': '4位验证码',
      'maxlength': '4位验证码'
    },
  };
  constructor() { }

  ngOnInit() {
  }

}
