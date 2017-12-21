/**
 * Created by maxueshan on 2017/12/21.
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
import MovieItem from './movie_item'
import MovieWebView from './../common/customWebview'

class MovieList extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2})

        this.state={
            dataSource:ds,
            show:false,
            keywords:'哈利波特'
        }
    }

    render(){
        return(
            <ScrollView>
                <SearchBar
                    placeholder="请输入电影的名称"
                    onPress={this._searchPress}
                    onChangeText={this._changeText}
                />
                {
                    this.state.show?
                        <ListView
                            dataSource={this.state.dataSource}
                            initialListSize={10}
                            renderRow={this._renderRow}
                            renderSeparator={this._renderSeparator}

                        />
                        :Util.loading
                }

            </ScrollView>
        )
    }

    _showDetail(title,url){
        var route={
            component:MovieWebView,
            passProps:{
                backName:"电影",
                title:title,
                url:url
            }
        }
        this.props.navigator.push(route);

    }

    _changeText(text){
        this.setState({
            keywords:text
        })
    }
    _searchPress(){
        this.getMovieData();
    }

    _renderRow(movie){
        return <MovieItem movie={movie} onPress={this._showDetail.bind(this,movie.title,movie.alt)}/>
    }
    _renderSeparator(sectionID,rowID){
        return(
            <View style={{height:1,backgroundColor:'#CCCCCC'}} key={sectionID+rowID}></View>
        )
    }

    componentDidMount() {
        this.getMovieData();
    }

    getMovieData(){
        this.setState({
            show:false
        })

        var that = this;
        var url = ServiceURL.movie_search + '?count=20&q=' + this.state.keywords;
        Util.getRequest(url,(data)=>{
            if (!data.subjects || data.subjects.length == 0){
                return alert('空的')
            }
            var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2})

            this.setState({
                show:true,
                dataSource:ds.cloneWithRows(data.subjects)
            })


        },(error)=>{
            alert(error)
        })

    }

}
var styles = StyleSheet.create({

});

module.exports = MovieList;