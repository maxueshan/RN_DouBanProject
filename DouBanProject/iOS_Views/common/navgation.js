/**
 * Created by maxueshan on 2017/12/14.
 */
/*
*  自定义 导航器
*
*  外部传入:
*       component 需要展示的页面组件
*       route对象, 必须添加component属性,如果需要传值,则添加passProps属性
*
* */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    NavigatorIOS

} from 'react-native';

class Navigation extends Component{
    render(){
        //创建route 对象,约定格式
        var rootRoute = {
            component:this.props.component,  //外部传入
            passProps:{

            }
        };

        return(
            <NavigatorIOS
                initialRoute={rootRoute}

                {/*renderScene={(route, navigator) => {*/}
                    {/*var Component = route.component;*/}
                    {/*return(*/}
                        {/*<View style={{flex:1}}>*/}
                            {/*<Component*/}
                                {/*navigator={navigator}*/}
                                {/*route={route}*/}
                                {/*{...route.passProps}*/}
                            {/*/>*/}
                        {/*</View>*/}
                    {/*)*/}

                {/*}}*/}

            />

        )
    }
}



module.exports = Navigation;

























