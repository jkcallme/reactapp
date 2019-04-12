import React,{Component} from 'react';
import { ListView } from 'antd-mobile';
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { List, Badge } from 'antd-mobile';
import Tab2 from '../css/tab2.css'
export default class Tabs3 extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      dataSource,
      list: [],
      page: 1
    };
  }


  makeRemoteRequest = ()=>{
    axios({
      url   : `http://localhost:3000/product?_page=${this.state.page}&_limit=5&_sort=id&_order=desc`,
      method: 'get'
    }).then(res=>{
      this.setState({
        list: [...this.state.list, ...res.data],
        page: this.state.page + 1
      })
    })
  }

  componentDidMount (){
    this.makeRemoteRequest();
  }

  onEndReached = (event)=>{
    this.makeRemoteRequest();
  }

  // 渲染每一行
  renderRow = (rowData,sectionID,rowID)=>{
    var productDetailUrl = `/product/${rowData.id}`
    return (
      <NavLink to={productDetailUrl}>
        <div className='box' key={rowID} style={{ padding: '0 15px' }}>
            <div  className='title'
              style={{
                lineHeight  : '50px',
                color       : '#888',
                fontSize    : 18,
                borderBottom: '1px solid #F6F6F6',
              }}
            >{rowData.name}</div>
            <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
              <img style={{ height: '64px', marginRight: '15px' }} src={rowData.img} alt="" />
              <div style={{ lineHeight: 1 }}>
                <div  className='text'   style={{ marginBottom: '8px',color:'#ccc'}}>{rowData.text}</div>
                <div ><span className='price' style={{ fontSize: '28px', color: '#ce3e3e' }}>
                ¥ {rowData.id}  </span></div>
              </div>
              <Badge text="减" hot style={{ marginLeft: 12 }} />
              <Badge text="惠" hot style={{ marginLeft: 12 }} />
            </div>

        </div>
      </NavLink>
    )
  }

  render() {
    return (
      <div>
      <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >产品列表</NavBar>
    <SearchBar placeholder="金可可是大帅比" maxLength={8} />
    <ListView
    dataSource = {this.state.dataSource.cloneWithRows(this.state.list)}
    renderRow  = {(rowData, sectionID, rowID, highlightRow) => this.renderRow(rowData,sectionID,rowID)}
    style      = {{
      height  : document.documentElement.clientHeight - 130,
      overflow: 'auto',
    }}
    onEndReached          = {this.onEndReached}
    onEndReachedThreshold = {10}
  />
      </div>
    );
  }
}