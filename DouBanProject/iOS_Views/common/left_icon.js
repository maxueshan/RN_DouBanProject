/**
 * Created by maxueshan on 2017/12/14.
 */
/*
* 功能: 封装返回按钮图标 < 箭头
*
* */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';


class Icon extends Component {

    render(){
        return(
            <View>
                <View style={styles.go}>
                </View>
            </View>

        )
    }
}

let styles = StyleSheet.creat({
    go:{
        width:15,
        height:15,
        borderLeftWidth:2,
        borderColor:'#fff',
        marginLeft:10,
        transform:[{rotate:'45deg'}]  //将一个矩形框旋转 45 度
    }


});

module.exports = Icon;
















