/**
 * Created by maxueshan on 2017/12/14.
 */
/*
* 搜索框
*
* 包含: 输入框 按钮
* 外部传入: 如placeholder onPress onChangeText
*       使用 ...this.props 将外部传入的属性设置给TextInput 和TouchableOpacity
*
* */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity

 } from 'react-native';


class SearchBar extends Component{

    render(){
        return(
            <View style={styes.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        {...this.props}  //onPress 通过外部传入
                    />
                </View>
                <TouchableOpacity style={styles.btn} {...this.props}>
                    <Text style={styles.seachText}>搜索</Text>
                </TouchableOpacity>


            </View>
        )
    }

}

let styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        height:44,
        marginTop:10

     },
    inputContainer:{
        flex:1,
        marginLeft:5,
    },
    input:{
        flex:1,
        height:44,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#CCC',
        paddingLeft:5
    },
    btn:{
        width:55,
        height:44,
        marginLeft:5,
        marginRight:5,
        backgroundColor:'#23BEFF',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'

    },
    seachText:{
        flex:1,
        color:'#fff',
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        lineHeight:44
    }

});


module.exports = SearchBar;





















