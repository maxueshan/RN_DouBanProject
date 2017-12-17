/**
 * Created by maxueshan on 2017/12/14.
 */
/*
* 接口API
*
* 基于豆瓣开放API的图书 电影
*
* */

let BaseURL = 'https://api.douban.com/v2/';

var Douban_APIS = {
    /*
    * 图书搜索
    * */
    book_search:BaseURL + 'book/search',
    /*
    * 图书详情
    * */
    book_detail_id:BaseURL + 'book/',
    /*
    * 电影搜索
    *
    * alt 电影详情url
    * */
    movie_search:BaseURL + 'movie/search',





};
module.exports = Douban_APIS;






























