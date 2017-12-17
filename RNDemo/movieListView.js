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

//从文件中读取数据
var movieData = require("./data.json");
//获取所有movies数据,属性movies是一个数组
var movies = movieData.movies;


var MovieList = React.createClass({

    getInitialState:function () {
        //创建dataSource对象
        var ds = new ListView.DataSource({
            rowHasChanged:(oleRow,newRow) => oleRow!==newRow
        });
        return{
             dataSource : ds.cloneWithRows(movies)
        }
    },
    //渲染行组件
    _renderRow:function (movie) {
        return(
            <View style={styles.row}>
                <Image
                    style={styles.thumbnail}
                source={{uri:movie.posters.thumbnail}}//图像的链接
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        )
    },
    //渲染头部
    _renderHeader:function () {
        return(
            <View style={styles.header}>
                <Text style={styles.headerText}>Movies List</Text>
                <View style={styles.separator}></View>
            </View>
        )

    },
    //渲染分割线
    _renderSepatator:function (sectionID:number,rowID:number) {
        return(
            //view作为分割线
            <View style={styles.separator} key={sectionID+rowID}></View>
        )
    },

    render:function () {
        return(
            <ListView
                style={styles.listView}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            renderHeader={this._renderHeader}
            renderSeparator={this._renderSepatator}
            initialListSize={10}   //开始时 渲染多少行
            />

        )
    }
});

var styles = StyleSheet.create({

    listView:{
        marginTop:25,
        flex:1,
        backgroundColor:"#F5FCFF"
    },
    //行组件样式
    row:{
        flexDirection:"row",
        padding:5,
        alignItems:"center",
        backgroundColor:"#F5FCFF"
    },
    thumbnail:{
        width:53,
        height:81,
        backgrounColor:"gray"
    },
    rightContainer:{
        marginLeft:10,
        flex:1,
    },
    title:{
        fontSize:18,
        marginTop:3,
        marginBottom:3,
        textAlign:"center",
    },
    year:{
        marginBottom:3,
        textAlign:"center",
    },
    //header组件样式
    header:{
        height:50,
        backgroundColor:"#F5FCFF"
    },
    headerText:{
        flex:1,
        fontSize:20,
        fontWidth:"bold",
        textAlign:"center",
        lineHeight:44
    },
    //分割线组件样式
    separator:{
        height:1,
        backgrounColor:"CCCCCC"

    }


});




























