/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    Platform,
    Dimensions,
    FlatList
} from 'react-native';


/*var Dimensions = require('Dimensions');*/
var {width} = Dimensions.get('window');

// 全局的变量
var cols = 5;
var cellW = Platform.OS == 'ios' ? 70: 60;
var cellH = 70;
var vMargin = (width - cellW * cols) / (cols + 1);


export default class TopListView extends Component{
/*    getDefaultProps(){
        return{
            dataArr: []
        }
    };*/



    static defaultProps={
        dataArr: []
    }
/*    getInitialState(){
        // 创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});

        return{
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    };*/

    // 初始化函数(变量是可以改变的,充当状态机的角色)
    constructor(props) {
        super(props);


        var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    }




    render() {


        console.log(947723090)
        return (
           <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />




/*


 <FlatList
 //加载数据源
 data={this.props.dataArr}
 //展示数据
 renderItem={({ index, item }) => this.renderRow(index, item)}
 //默认情况下每行都需要提供一个不重复的key属性
 keyExtractor={(item, index) => (index)}
 columnWrapperStyle={styles.contentViewStyle}
 />

            <FlatList
                data={this.state.dataSource}
                numColumns={3}                     //数据源 每三个为一栏
                keyExtractor = {(item, index) => index.toString()}//为每条数据赋予键值
                columnWrapperStyle={styles.columnWrapper}         //每一栏的样式
                renderItem={this.renderIcon}                      //定义每条数据的渲染方法
                ListHeaderComponent={this.renderHeader}           //定义头部渲染方法
                ListFooterComponent={this.renderFooter}           //定义底部渲染方法
                ItemSeparatorComponent={this.renderSeparator}     //定义中间分割的渲染
            />*/

        );
    };

    // 具体的cell
    renderRow(rowdata){
        return(
            <TouchableOpacity onPress={()=>{alert('0')}}>
                <View style={styles.cellStyle}>
                    <Image source={{uri: rowdata.image}} style={{width:52, height:52}}/>
                    <Text style={styles.titleStyle}>{rowdata.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

/*var TopListView = React.createClass({
    getDefaultProps(){
       return{
           dataArr: []
       }
    },

    getInitialState(){
        // 创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});

       return{
          dataSource: ds.cloneWithRows(this.props.dataArr)
       }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    },

    // 具体的cell
    renderRow(rowdata){
        return(
          <TouchableOpacity onPress={()=>{alert('0')}}>
            <View style={styles.cellStyle}>
                <Image source={{uri: rowdata.image}} style={{width:52, height:52}}/>
                <Text style={styles.titleStyle}>{rowdata.title}</Text>
            </View>
          </TouchableOpacity>
        );
    }
});*/


const styles = StyleSheet.create({
    contentViewStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        // 多个cell在同一行显示
        flexWrap:'wrap',
        // 宽度
        width:width
    },

    cellStyle:{
        // backgroundColor:'red',
        width:cellW,
        height:cellH,
        // 水平居中和垂直居中
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:vMargin
    },

    titleStyle:{
        fontSize:Platform.OS == 'ios' ? 14 : 12,
        color:'gray'
    }
});

// 输出组件类
/*module.exports = TopListView;*/
