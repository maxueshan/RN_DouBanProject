/**
 * Created by maxueshan on 2017/12/11.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TabBarIOS

} from 'react-native';

/*
*  在React Native 实现页面切换,提供两个组件: TabBarIOS 和TabBarIOS.Item
*
* 常用属性:
* selected: 是否选中了某个Tab
* title  标题
* barTintColor Tab栏的背景颜色
* icon 图标
* onPress 点击事件,当某个tab被选中时,需要改变组件的selected={true}设置
* 切换原理:点击tab时触发onPress方法,记录被点击tab的title,在通过title设置tab是否被选中(从而设置selected值 true/false)
*
*
* */

/*
*
* 导入textInput.js
* 导入loadimage.js
* 导入movieList.js movie.json
*
* */
var Page1 = require("./textInput");
var Page2 = require("./loadimage");
var Page3 = require("./movieList");

var LessionTabBarIOS = React.createClass({

    getInitialState:function () {
      return{
          //用于记录显示的页面组件的title
          tab:"Page1"//默认的
      }
    },
    //TabBarIOS.Item 的onPress处理方法
    select:function (tabName) {
      this.setState({
          tab:tabName
      })

    },

   render:function () {
       return(
         <TabBarIOS style={{flex:1}}>
             <TabBarIOS.Item
                 title="Page1"
                 icon={require("image!image1")}//图片直接放在了xcode的.asset 中
                 onPress={this.select.bind(this,"Page1")}
                 selected={this.state.tab==="Page1"}
             >
                 {/*//页面组件*/}
                 <Page1></Page1>
             </TabBarIOS.Item>
             <TabBarIOS.Item
                 title="Page2"
                 //使用系统的图片
                 systemIcon="bookmarks"
                 onPress={this.select.bind(this,"Page2")}
                 selected={this.state.tab==="Page2"}
             >
                 {/*//页面组件*/}
                 <Page2></Page2>
             </TabBarIOS.Item>
             <TabBarIOS.Item
                 title="Page3"
                 icon={require("image!image3")}//图片直接放在了xcode的.asset 中
                 onPress={this.select.bind(this,"Page3")}
                 selected={this.state.tab==="Page3"}
             >
                 {/*//页面组件*/}
                 <Page3></Page3>
             </TabBarIOS.Item>
         </TabBarIOS>
       );
   }

});






















