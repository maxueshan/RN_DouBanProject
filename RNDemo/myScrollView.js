/**
 * Created by maxueshan on 2017/12/5.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    RefeshControl

} from 'react-native';

/*
* ScrollView的简单实现
* 实现监测拖拽 ,滑动的相关方法
*
* 1.添加几个子组件(3个)
*
* 2.实现相关方法,并赋给ScrollView
* 3.下拉刷新  refreshControl 菊花
* */

var MyScrollView = React.createClass({
    _onScrollBeginDrag:function () {
        console.log("开始拖拽")
    },
    _onScrollEndDrag:function () {
        console.log("结束拖拽")
    },
    _onMomentumScrollBegin:function () {
        console.log("开始滑动")
    },
    _onMomentumScrollEnd:function () {
        console.log("滑动结束")
    },

    _onRefresh:function () {
        console.log("刷新");
    },

    render:function () {
        return(
            <View style={styles.container}>
                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={true}
                    onScrollBeginDrag={this._onScrollBeginDrag}
                    onScrollEndDrag={this._onScrollEndDrag}
                    onMomentumScrollBegin={this._onMomentumScrollBegin}
                    onMomentumScrollEnd={this._onMomentumScrollEnd}
                    //下拉菊花
                    refreshControl={
                        <RefreshControl
                        refreshing={false}//默认不转
                        tintColor="red"
                        title="正在刷新..."
                        onRefresh={this._onRefresh}
                        />
                    }
                >
                    <View style={styles.view_1}></View>
                    <View style={styles.view_2}></View>
                    <View style={styles.view_3}></View>
                </ScrollView>
            </View>

        );
    }
});

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"cyan"
    },
    scrollView:{
        marginTop:25,
        backgroundColor:"#CCCCCC"
    },
    view_1:{
        margin:15,
        flex:1,
        height:300,
        backgroundColor:"yellow"
    },
    view_2:{
        margin:15,
        flex:1,
        height:300,
        backgroundColor:"blue"
    },
    view_3:{
        margin:15,
        flex:1,
        height:300,
        backgroundColor:"green"
    },



});


module.exprot = myScrollView;































