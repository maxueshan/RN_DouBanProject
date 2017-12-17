/**
 * Created by maxueshan on 2017/12/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ListView,
    ScrollView

 } from 'react-native';

import Util from './../common/util'
import SearchBar from './../common/searchBar'
import ServiceURL from './../common/service'
import BookItem from './book_Item'

class  BookList extends Component{
    constructor(){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2})

        this.state = {
            //dataSource
            dataSource: ds,
            //网络请求状态标识
            show:false,
            //搜索关键字
            //作用:1.搜索接口需要设置搜索内容 2.点击搜索按钮时,修改关键字内容,重新请求数据,重新渲染
            keywords:'React'

        }

    }


    render(){
        return(
            <ScrollView>
                <SearchBar/>
                {
                    //请求数据时显示loading,请求成功后显示ListView
                    this.state.show?
                        <ListView
                            dataSource={this.state.dataSource}
                            initialListSize={10}
                            renderRow={this._renderRow}
                           // renderSeparator={this._renderSeparator}
                        />
                        :
                        Util.loading

                }

            </ScrollView>

        )


    }
    _renderRow(book){
        return <BookItem book={book}/>
    }
    // _renderSeparator(sectionID:number,rowID:number){
    //     var style = {
    //         height:1,
    //         backgroundColor:'#CCCCCC'
    //     }
    //     return <View style={style} key={sectionID+rowID}></View>
    // }



    //
    getData(){
        //开启loading,每次搜索时都需要重新下载显示数据
        this.setState({
            show:false
        });
        //请求数据
        var that = this;
        var url = ServiceURL.book_search + '?count=20&q' + this.state.keywords;
        Util.getRequest(url,
            (data) => {
                //成功
                if (!data.books || data.books.length == 0){
                    return alert('未查询到相关书籍')
                }

                var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2});

                this.setState({
                    show:true,
                    dataSource:ds.cloneWithRows(data.books)
                })

            },
            (error) => {
                //失败
                alert(error)
            }

        )

    }

    componentDidMount() {
        //请求数据
        this.getData()

    }


}
var styles = StyleSheet.create({

});

module.exports = BookList;


















