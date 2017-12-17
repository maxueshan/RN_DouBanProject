/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    TabBarIOS,
    StatusBar
} from 'react-native';

//1.隐藏状态栏
StatusBar.setHidden(true);

import Navigation from './iOS_Views/common/navgation'
//TabBarIOS管理两个模块:图书,电影
import BookList from './iOS_Views/books/book_list'


export default class App extends Component<> {

  constructor(props){
    super(props);
    this.state={
      selectedTab:'图书'
    }
  }

  render() {
    return (
        <TabBarIOS>
          <TabBarIOS.Item
            title='图书'
            systemIcon={'bookmarks'}
            selected={this.state.selectedTab==='图书'}
            onPress={()=>{
              this.setState({
                selectedTab:'图书'
              })
            }}
        >
          {/*<View style={{backgroundColor:'red',flex:1}}></View>*/}
              <Navigation component={BookList}/>
        </TabBarIOS.Item>

          <TabBarIOS.Item
              title='电影'
              systemIcon={'history'}
              selected={this.state.selectedTab==='电影'}
              onPress={()=>{
                this.setState({
                  selectedTab:'电影'
                })
              }}
          >
            <View style={{backgroundColor:'cyan',flex:1}}></View>
          </TabBarIOS.Item>

        </TabBarIOS>

    );
  }
}




























