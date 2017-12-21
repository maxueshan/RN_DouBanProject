/**
 * Created by maxueshan on 2017/12/21.
 */
/*
 *  列表的row
 *
 *  外部传入:
 *          movie   电影对象
 *          onPress事件处理方法,  通过...this.props绑定,需要设置参数(图书id)
 *
 *
 * */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator //菊花指示器
} from 'react-native';





class MovieItem extends Component{

    render(){
        var movie = this.props.movie;
        //遍历: 提取演员姓名
        var actors = [];
        for (var i in movie.casts){
            actors.push(movie.casts[i].name)
        }


        return(
            <TouchableOpacity style={style.container} {...this.props}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        resizeMode='contain'
                        source={{uri:movie.images.medium}}/>
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1} >名称:{movie.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>演员:{actors}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>评分:{movie.rating.average}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>事件:{movie.year}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>标签:{movie.genres}</Text>
                    </View>

                </View>

            </TouchableOpacity>

        );
    }
}
var styles = StyleSheet.create({

    item:{
        flexDirection:'row',
        height:130,
        padding:10
    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:100,
        height:100
    },
    contentContainter:{
        flex:1,
        marginLeft:15
    },
    textContainer:{
        flex:1,
        justifyContent:'center'
    },
    text:{
        color:'black'
    }


});


module.exports = MovieItem;













