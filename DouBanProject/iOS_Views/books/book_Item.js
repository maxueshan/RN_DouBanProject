/**
 * Created by maxueshan on 2017/12/17.
 */
/*
*  列表的row
*
*  外部传入:
*          book   图书对象
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

class BookItems extends Component{

    render(){
        var book = this.props.book;

        return(
            <TouchableOpacity style={styles.container} {...this.props}>
                {/*左边:图书图像*/}
                <View>
                    <Image
                        style={styles.imageContainer}
                       source={{uti:book.image}}
                    />
                </View>
                {/*右侧:图书信息 */}
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1}>{book.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisher_auther} numberOfLines={1}>{book.publisher}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisher_auther} numberOfLines={1}>{book.auther}</Text>
                    </View>
                    <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                        <Text style={styles.price}>{book.price}</Text>
                        <Text style={styles.pages}>{book.pages}</Text>
                    </View>

                </View>


            </TouchableOpacity>
        )
    }

}
let styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        height:120,
        padding:10
    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:80,
        height:100
    },
    contentContainer:{
        flex:1,
        marginLeft:15,
    },
    textContainer:{
        flex:1,
        justifyContent:'center'
    },
    publisher_auther:{
        color:'#A3A3A3',
        fontSize:13,
    },
    price:{
        color:'#2BB2A3',
        fontSize:16
    },
    pages:{
        marginLeft:10,
        color:'#A7A0A0'
    }




});
module.exports = BookItems;












