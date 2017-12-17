/**
 * Created by maxueshan on 2017/12/14.
 */

/*
* 封装WebView, 根据传入的url展示网页信息
* 包含组件: Header, WebView
*
* 外部传入:
*       给Header设置:navigator ,initObj(backName,title)
*       给WebView设置:source
*
*
* */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView

} from 'react-native';

import Header from './header'

class CustomWebView extends Component{

    render(){
        return(
            <View style={{flex:1,backgroundColor:'whtie'}}>
                <Header
                    navigator={this.props.navigator}
                    initObj={{
                        backName:this.props.backName,
                        barTitle:this.props.title
                    }}
                />

                <WebView
                    startInLoadingState={true}
                    contentInset={{top: -44,bottom: -120}} //网页本身有一个头部 尾部--> 隐藏
                    source={{url:this.props.url}}

                />
            </View>
        )

    }
}


module.exports = CustomWebView;




