/**
 * Created by maxueshan on 2017/12/5.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity

} from 'react-native';

/*
* 在ReactNative中,有两个实现导航功能的组件:Navigator和NavigatorIOS
* Navigator 同支持android和ios ; NavgatorIOS支持ios
* NavigatorIOS 相对有更对的属性和方法,在UI方面有更多的设置,如:backButtonIcon backButtonTitled onLeftButtonPress等等
*
* 如果想实现更多自定义,建议使用Navigator
*
* */

//1.实现导航功能,页面切换
//2.实现导航功能, 传值

/*
*  导航器通过路由对象(route)来分辨不同的场景,每个路由对象都对应一个页面组件,开发者设置什么,导航器显示什么,所以route是导航器中重要的一个对象
*
*  三步操作实现导航功能:
*  1.设置路由对象(告诉导航器要显示哪个页面)
*  创建路由对象,对象的内容自定义,但是必须包含该场景需要展示的页面组件
*
*  2.场景渲染配置(告诉导航器我要什么样的页面跳转效果)
*
*  3.渲染场景(告诉导航器如何渲染页面)
*  利用第一步设置的路由对象进行渲染场景
*
* */

//1.定义第一个页面
var FirstPage = React.createClass({
    //按钮onPress事件处理方法
    pressPush:function () {
        //推出下一级页面
        //参数是路由对象,不要再次写 三个步骤
        var nextRoute = {
            component:SecondPage
        }
        this.props.navigator.push(nextRoute)

    },
    render:function () {
        return(
          <View style={[styles.flex,{backgroundColor:"yellow"}]}>
              <TouchableOpacity style={styles.btn} onPress={this.pressPush}>
                  <Text>点击push下一页</Text>
              </TouchableOpacity>
          </View>
        );
    }


});
//2.第二个页面
var SecondPage = React.createClass({
    pressPop:function () {
        //返回上一界面
        this.props.navigator.pop()
    },
    render:function () {
        return(
            <View style={[styles.flex, {backgroundColor:"cyan"}]}>
                <TouchableOpacity onPress={this.pressPop}>
                    <Text>pop返回上一页</Text>
                </TouchableOpacity>
            </View>
        );

    }

});

//
var  LessoNavigator = React.createClass({
   render:function () {
       var  rootRoute={
         component:FirstPage
       };

       return(
           <Navigator
           /*步骤:
           * 1. initialRoute
           *
           * 指定了默认的页面,也就是启动app之后会看到的第一屏幕(启动页)
           * 对象的属性是自定义的,这个对象中的内容会在renderScene方法中处理
           * 备注:必须包含的属性,component,表示需要渲染的页面组件
           *
           * */
               initialRoute={rootRoute}
               /*
               * 2.configureScene
               * 场景渲染的配置 (跳转效果)
               *
               * 箭头函数
               * */
               configureScene={(route) => {
                   //效果:从右侧向左推出
                   return Navigator.SceneConfigs.PushFromRight;///////////////////////此句没有提示,有问题????
               }}
               /*
               * 3.renderScene
               *
               * 渲染场景
               * 参数:route(第一步创建并设置给导航器的路由对象),navigator(导航器对象)
               * 实现:给需要显示的组件设置属性
               *
               * */

               renderScene={(route, navigator ) => {
                   //从route路由对象中获取页面组件
                   var  Component = route.component;
                   return(
                       <Component
                           navigator={navigator}
                           route={route}
                       />
                   )
               }}




           />

       );
   }

});

var styles = StyleSheet.create({
    flex:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    btn:{
        width:150,
        height:30,
        borderColor:"red",
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center"
    }

});


























