/**
 * Created by maxueshan on 2017/12/14.
 */
/*
* 工具类
* 功能: 获取屏幕尺寸, loading组件 ,Get请求方法
*
* */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,  //用于获取设备屏幕的宽 高
    ActivityIndicator //菊花指示器
} from 'react-native';

//定义对象

var Util = {
    //1.屏幕尺寸
    windowSize:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height
    },
    //2.基于fetch的get方法, 只负责下载数据,下载后的处理操作在--回调方法中实现
    /*函数
    * successCallBack 成功后的回调
    * failCallBack   失败后的回调
    * */
    getRequest:function (url,successCallBack,failCallBack) {

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((responseData) => {
                successCallBack(responseData)
            })
            .catch((error) => {
                failCallBack(error)
            })


    },

    //3. loading 效果  (直接返回这个组件)
    loading:<ActivityIndicator style={{marginTop:200}}/>

};

module.exports = Util;


















