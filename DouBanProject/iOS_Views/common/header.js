/**
 * Created by maxueshan on 2017/12/14.
 */
/*
 * 功能: 封装Header , 导航条
 *
 * 外部传入:
 *         navigator 点击返回按钮 返回上一级页面
 *         initObj(backName,title)
 *
 * */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity

} from 'react-native';

//导入左侧的按钮
import Icon from './left_icon'

class Header extends Component{
    render(){
        //获取对象, 包括backName barTitle (外部传入的 initObj)
        var headerContent = this.props.initObj;

        return(
            <View style={styles.header}>
                <TouchableOpacity style={styles.left_btn} onPress={this._pop} >
                    <Icon/>
                    <Text style={styles.btn_Text}>{headerContent.backName}</Text>
                </TouchableOpacity>

                <View style={styles.title_containter}>
                    <Text style={styles.title} numberOfLines={1}>{headerContent.barTitle}</Text>
                </View>

            </View>
        )
    }

    //返回按钮事件
    _pop(){
        this.props.navigator.pop();
    }



}

let styles = StyleSheet.create({
    header:{
        height:44,
        backgroundColor:'#3497FF',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    left_btn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    btn_Text:{
        color:'#fff',
        fontSize:'17',
        fontWeight:'bold',
    },
    title_containter:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        lineHeight:18,  // 作用  ?????????
        width:200
    }


});

module.exports = Header;













