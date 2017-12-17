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
    RefeshControl,
    Image

} from 'react-native';

/*
* 使用本地数据xx.json
*
* */

//从文件中读取数据, 执行了JSON.parse()方法,将json格式格式的字符串,转换为json格式对象
var movieData = require("./data.json");
//获取所有movies数据,属性movies是一个数组
var movies = movieData.movies;

var  MovieList = React.createClass({

    render:function () {
        //创建电影列表组件,根据movies中元素的个数,创建对应的组件
        //遍历数组,没当获取一个movie对象,就创建一个组件对象

        //定义一个空数组, 存储显示电影信息的组件
        var moviesRows = [];
        //遍历
        for (var i in movies){
            //获取movie对象
            var movie = movies[i];
            //创建组件(图像movie.posters.thumbnail,电影名称movie.title,上映时间movie.year)
            var row = (
                <View style={styles.row} key={i}>
                    <Image
                        source={{uri:movie.posters.thumbnail}}
                        style={styles.thumbnail}
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={style.year}>{movie.year}</Text>
                    </View>
                </View>
            );

            //将创建的组件存储到数组中
            moviesRows.push(row);

        }


        return(
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    {
                        //根据数据源的多少,展示多少条数据
                        //数组(所有子组件), 直接把数组放在这里就行, 里面存的就是组件
                        moviesRows
                    }
                </ScrollView>
            </View>

        );
    }

});
var  styles = StyleSheet.create({
    row:{
       flexDirection:"row",
        padding:5,
        alignItems:"center",
        backgroundColor:"#F5FCFF"
    },
    thumbnail:{
        width:53,
        height:81,
        backgroundColor:"gray"
    },
    rightContainer:{
        marginLeft:10,
        flex:1
    },
    title:{
        fontSize:18,
        marginTop:3,
        marginBottom:3,
        textAlign:"center"
    },
    year:{
        marginBottom:3,
        textAlign:"center"
    },

    container:{
        flex:1
    },
    scrollView:{
        flex:1,
        marginTop:25,
        backgroundColor:"#F5FCFF"
    }

})

module.exprot = MovieList;





























