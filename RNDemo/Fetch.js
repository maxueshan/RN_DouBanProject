/**
 * Created by maxueshan on 2017/12/12.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity

} from 'react-native';

//在React Native中,使用fetch实现网络请求


/* fetch 是一个封装程度更高的网络API, 使用了Promise
* Promise 是异步编程的一种解决方案
* Promise 对象代表一个异步操作,有三种状态:Pending(进行中) Resolved(已完成) Rejected(已失效)
*
* Promise 实例生成以后,可以分别制定'完成' 和'失败'状态的回调函数,实现方式:链式调用方法
*
* 语法:
* fetch(参数)
* .then(完成的回调函数)
* .catch(失败的回调函数)
*
* fetch(url,opts)
* .then((response) => {
*   //网络请求成功,执行该回调函数,得到响应对象,通过response可以获取请求的数据
*   //json text等
*
*   return response.text();
*   //或 return response.json();
* })
* .then((resonseData) => {
* //处理请求得到的数据
* })
* .catch((error) => {
* //网络请求失败,执行该回到函数,得到错误信息
* })
*
*
*
* */

//练习一, 使用get 和post方式获取数据

//将事件放在组件外部
function getRequest(url) {
    var opts = {
        method:"GET"
    }
    fetch(url,opts)
        .then((response) => {
            return response.text();  //返回一个带有文本的对象
        })
        .then((responseText) => {
            alert(responseText)
        })
        .catch((error) => {
            alert(error)
        })

}
//Post方法, 需要请求体body
/*
* FromData
* 主要用于序列化表单以及创建与表单格式相同的数据
*
* var data = new FormData();
* data.append("name","hello");
* append方法接收两个参数,键和值(key,value),分别表示表单字段的名字 和 字段的值,可添加多个
*
* 在jQuery中,"key1=value1&key2=valu2" 作为参数传入对象框架,会自动分装成FormData形式
* 在Fetch 中,进行post进行post请求,需要自动创建FormData对象传给body
*
* */
function postRequest(url) {
    //将"key1=value1&key2=valu2" 形式封装整FromData形式
    let formData = new FormData();
    formData.append("username","hello");
    formData.append("password","1111aaaa");

    var opts = {
        method:"POST",
        body:formData
    }

    fetch(url,opts)
        .then((response) => {
            return response.text
        })
        .then((responseText) => {
            alert(responseText)
        })
        .catch((error) => {
            alert(error)
        })
}

var GetData = React.createClass({



    render:function () {
        return(
            <View style={styls.container}>
                {/*注意: 方法调用方式,绑定了this */}
                <TouchableOpacity onPress={getRequest.bind(this,"http://project.lanou3g.com/projects/bj/reactnative/login.php?username=lanou&password=123")}>
                    <View style={styles.btn}>
                        <Text>Get</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={postRequest.bind(this,"http://project.lanou3g.com/projects/bj/reactnative/login.php")}>
                    <View style={styles.btn}>
                        <Text>Post</Text>
                    </View>
                </TouchableOpacity>
            </View>


        );
    }

});

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'cyan',
        marginTop:30,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        width:60,
        height:30,
        borderWidth:1,
        borderColor:"yellow",
        justifyContent:'center',
        alignItems:'center'
    }

});


















































