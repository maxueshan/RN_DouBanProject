import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

//组件
    var Header = React.creatClass({
        render:function () {
            return(
              <View style={styles.flex}>
                  <Text style={styles.font}>
                      <Text style={styles.font1}>网易</Text>
                      <Text style={styles.font2}>新闻</Text>
                      <Text>有态度</Text>
                  </Text>
              </View>
            );
        }

    });


//样式
var styles = StyleSheet.create({
    flex:{
        marginTop:25,
        height:40,
        borderBottomWidth:1,
        borderBottomColor:"yellow",
        alignItems:"center"
    },
    font:{
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center"
    },
    font1:{
        color:"red"
    },
    font2:{
        color:"#FFF",
        backgroundColor:"#CD1D1C"

    }
})

//导出模块
module.exports = Header;














