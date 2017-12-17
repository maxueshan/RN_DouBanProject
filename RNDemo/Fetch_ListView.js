/**
 * Created by maxueshan on 2017/12/12.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView,
    Image

} from 'react-native';

//练习二 电影列表(网络请求数据)
/*
* 展示电影列表
* 逻辑:
* 未获得数据时:显示等待页面
* 获得数据时:  显示电影列表页面
*
* 需要给state添加一个属性,用于记录下载状态
*
*  http://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample
* */

var MovieList = React.createClass({
    getInitialState:function () {
        //ListView相关
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2 });

        //
        return{
            load:false //数据是否下载成功的标识
        };
    },
    //下载数据
    getData:function () {
        let url = "http://www"
      fetch(url)
          .then((response) => {
              return response.json()
          })
          .then((responseData) => {
              //刷新组件,重新渲染组件,展示ListView
              //得到新的数据, 更新dataSource
              this.setState({
                  loaded:true,
                  //ListView
                  dataSource:this.state.dataSource.cloneWithRows(responseData.movies)
              });

          })
          .catch((error) => {
              alert(error)
          })

    },
    render:function () {
        //如果未请求到数据,显示 "等待加载" 页面
        if(!this.state.loaded){
            return this.renderLoadingView();
        }

        //电影列表
        return(
            <ListView
                style={styles.listView}
                dataSource={this.state.dataSource}
                initialListSize={10}  //多少行
                renderHeader={this._renderHeader}
                renderRow={this._renderRow}
                renderSeparator={this._renderSeparator}
            />

        );
    },
    //组件挂载完成
    componentDidMount:function () {
        //组件挂载后,开始下载数据
        this.getData();
    },

    //等待加载页面
    renderLoadingView:function () {
        return(
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading movies...</Text>
            </View>
        );
    },
    //渲染row
    _renderRow:function (movie) {
        return(
            <View style={styles.rowContainer}>
                <Image
                style={styles.rowImage}
                source={{uri:movie.url}}
                />
                <View style={styles.rowTextContainer}>
                    <Text style={styles.rowTitle}></Text>
                 </View>
            </View>
        )
    },
    //渲染头部
    _renderHeader:function () {
        return(
            <View style={styles.header}>
                <Text style={styels.headerText}>List 头部</Text>
                <View style={styles.headerSeparator}></View>
            </View>
        )
    },
    //渲染分割线
    _renderSeparator:function (sectionID:number,rowID:number) {
        var style = {
            height:1,
            backgrounColor:"#CCCCCC"
        };
        return(
            <View style={style} key={sectionID+rowID}></View>
        )

    }




});

var  styels = StyleSheet.create({
//loading
    loadingContainer:{
        flex:1,
        marginTop:25,
        backgrounColor:'cyan',
        justifyContent:'center',
        alignItems:'center'
    },
    loadingText:{
        fontSize:22,
        textAlign:'center',
        marginLeft:11,
        marginRight:22

    },
    //ListView Row
    rowContainer:{
        flexDirection:"row",
        padding:5,
        alignItems:"center",
        backgrounColor:"#F5FCFF"
    },
    rowImage:{
        width:33,
        height:81,
        backgrounColor:"gray"
    },
    rowTextContainer:{
        flex:1,
        marginLeft:10,
    },
    rowTitle:{
        marginTop:3,
        fontSize:18,
        textAlign:"center"
    },
    //ListView Header
    header:{
        height:44,
        backgrounColor:"#F5FCFF"
    },
    headerText:{
        flex:1,
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center"
    },
    headerSeparator:{
        height:1,
        backgrounColor:"black"

    },
    //ListView
    listView:{
        marginTop:25,
        backgrounColor:"#F5FCFF"

    }


});


































