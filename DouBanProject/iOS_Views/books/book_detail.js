/**
 * Created by maxueshan on 2017/12/21.
 */
/*
*  图书详情
*
*
* */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import ServiceURL from './../common/service'
import Util from './../common/util'
import Header from './../common/header'
import BookItem from './book_Item'


class BookDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            bookData:null //图书详情对象信息
        }
    }


    render(){
        return(
            <ScrollView style={styles.container}>
                {
                    this.state.bookDetail?
                        <View>
                            <Header initObj={{backName:'图书',barTitle:this.state.bookDate.title}}
                                    navigator={this.props.navigator}
                            />
                            <BookItem book={this.state.bookData}/>
                            <View>
                                <Text style={styles.title}>图书简介</Text>
                                <Text style={styles.text}>{this.state.bookData.summary}</Text>
                            </View>
                            <View style={{marginTop:10}}>
                                <Text style={styles.title}>作者简介</Text>
                                <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
                            </View>

                            <View style={{height:55}}>
                            </View>

                        </View>
                        :Util.loading

                }

            </ScrollView>

        )
    }

    componentDidMount() {
        this.getData();
    }

    //请求
    getData(){
        var that = this;
        var url = ServiceURL.book_detail_id + this.props.bookID;

        Util.getRequest(url,(data)=>{

            this.setState({
                bookData:data
            })

        },(error)=>{
            alert(error)

        })


    }

}

var styles = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'white',
   },
    title:{
        fontSize:16,
        marginTop:10,
        marginLeft:10,
        marginBottom:10,
        fontWeight:'bold'

    },
    text:{
        marginLeft:10,
        marginRight:10,
        textColor:"#000022"
    }

});


module.exports = BookDetail;


