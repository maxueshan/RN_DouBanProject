/**
 * Created by maxueshan on 2017/12/5.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView

} from 'react-native';

/*
*  ListView 数据列表
*
*  ListView最重要的是设置每行显示的组件
*  section,header
*
*  使用ListView.DataSource, 给他传递一个普通的数据,在使用DataSource对象来实例化一个ListView组件
*
*  ListView实现:row/section组件定义,设置数据
*
*  设置ListView数据源:  state
*  将dataSource对象设置为state属性
*
* */

//原始数据: 数组(字符串)
var contents = [
    "你好,Hello",
    "你好,React",
    "你好,Thanks"
]

var MyListView = React.createClass({

    getInitialState:function () {
        //创建dataSource对象
        var ds = new  ListView.DataSource({
            //通过判断决定渲染哪些 行组件, 避免全部渲染,提高效率
            rowHasChanged:(oldRow,newRow) => oldRow!==newRow
        });

        return{
            //设置dataSource时,不直接使用提供的原始数据,使用cloneWithRows对数据源进行复制
            //使用复制后的数据源实例化ListView,好处:当原始数据发生变化,ListView组件的dataSource不会改变
            dataSource: ds.cloneWithRows(contents)//原始数据
        };


    },
    //实现renderRow方法(相当于cell)
    //渲染row组件,参数:每行要显示的数据对象
    _renderRow:function (rowData) {
        return(
            <View style={styles.row}>
                <Text style={styles.content}>{rowData}</Text>
            </View>
        )
    },


    render:function () {

        return(
            <ListView
                style={styes.listView}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            />

        );
    }
});

var styles = StyleSheet.create({
    listView:{
        flex:1,
        marginTop:25
    },
    row:{
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        height:100,
        borderBottomWidth:1,
        borderColor:"#CCCCCC"
    },
    content:{
        flex:1,
        fontSize:20,
        color:"blue",
        lineHeight:100
    }


});















































