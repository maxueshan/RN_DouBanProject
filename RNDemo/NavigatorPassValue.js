/**
 * Created by maxueshan on 2017/12/11.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Navigator,
    TouchableOpacity,
    TextInput

} from 'react-native';

//从前一个页面 向 后一个页面 传值
//定义InputPage 输入框 按钮
var InputPage = React.createClass({
    getInitialState:function () {
        return{
            //记录输入框的值
            content:" "
        }
    },
    getInputContent:function (inputText) {
        //记录值
        this.setState({
           content:inputText
        });

    },
    pushNextPage:function () {
      //推出下一页面,并传值

        var route ={
            component:DetailPage,
            passProps:{
                //将输入框的内容 传递给下一个页面
                showText:this.state.content
            }
        }

        this.props.navigator.push(route)


    },


   render:function () {
       return(
           <View style={inputStyel.container}>
               <TextInput
               style={inputStyel.input}
               placeholder="请输入内容"
               onChangeText={this.getInputContent}//事件,当文本改变的时候触发
               />
               <TouchableOpacity style={inputStyel.btn} onPress={this.pushNextPage}>
                   <Text>进入下一页</Text>
               </TouchableOpacity>
           </View>
       )
   }

});
var inputStyel = StyleSheet.creat({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    input:{
        height:45,
        marginLeft:25,
        marginRight:25,
        paddingLeft:5,
        borderwi:1,
        borderColor:'black',
        borderRadius:4
    },
    btn:{
        marginTop:20,
        height:30,
        borderWidth:1,
        borderColor:'black',
        borderRadius:4,
        padding:5,
        justifyContent:'center',
        alignItems:'center'
    }
});




//第二个页面, 显示文本

var DetailPage = React.createClass({

    popFrontPage:function () {
      //返回上一级
        this.props.navigator.pop();

    },

    render:function () {
        return(
            <View style={detailStyle.container}>
                {/*//直接从属性中获取值*/}
                <Text style={detailStyle.text}>{this.props.showText}</Text>
                <TouchableOpacity style={detailStyle.btn} onPress={this.popFrontPage}>
                    <Text>返回上一页</Text>
                </TouchableOpacity>
            </View>
        )
    }

});

var detailStyle = React.createClass({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'white'
   } ,
    text:{
        marginLeft:25,
        marginRight:25,
        padding:25,
        backgroundColor:'whtie',
        fontSize:18,
        textAlign:'center'

    },
    btn:{
        marginTop:20,
        height:30,
        borderWidth:1,
        borderColor:'black',
        borderRadius:4,
        padding:5,
        justifyContent:'center',
        alignItems:'center'
    }

});






var LessionNavigator = React.createClass({

    render:function () {
        //定义一个对象
        var rootRoute={
            component:InputPage,
            //存储需要传递的内容
            passProps:{

            }
        };

        return(
            <View style={{flex:1}}>
                <Navigator
                    initialRoute={rootRoute}

                    renderScene={(route,navigator) => {
                        var Component = route.navigator;
                        return(
                            <Component
                                navigator={navigator}
                                route={route}
                                //重点: 将route所有内容,赋给navigator
                                {...route.passProps}
                            />
                        )

                    }}

                />
            </View>
        )


    }

});


var styles = StyleSheet.create({

});

module.exports = LessonNavigator;

















