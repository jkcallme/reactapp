import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { Tabs} from 'antd-mobile';
import { ListView } from 'antd-mobile';
import axios from 'axios'
import {NavLink} from 'react-router-dom'
export default class Tabs2 extends Component{
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
      url   : `http://localhost:3000/people?_page=${this.state.page}&_limit=5&_sort=id&_order=desc`,
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
    var newsDetailUrl = `/news/${rowData.id}`
    return (
      <NavLink to={newsDetailUrl}>
        <div className='box' key={rowID} style={{ padding: '8px 15px'}}>
            <div className='title'
              style={{
                lineHeight  : '30px',
                color       : '#888',
                fontSize    : 16,
                borderBottom: '1px solid #F6F6F6',
              }}
            >{rowData.name}</div>
            <div style={{ display: '-webkit-box', display: 'flex', padding: '25px 0' }}>
              <img style={{ height: '80px', marginRight: '15px' }} src={rowData.img} alt="" />
              <div style={{ lineHeight: 1 }}>
                <div className='text' style={{ marginBottom: '2px' }}>{rowData.text}</div>

              </div>
            </div>
        </div>
      </NavLink>
    )
  }



  renderContent = tab =>
  (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
    <p>Content of {tab.title}</p>
  </div>);
  render(){

    const tabs = [
      { title: '头条' },
      { title: '国内新闻' },
      { title: '国外新闻' },
      { title: '体育新闻' },
      { title: '军事新闻' },
    ];

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
    >新闻列表</NavBar>
    <SearchBar placeholder="金可可是大帅比" maxLength={8} />

    <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
    <ListView
    dataSource = {this.state.dataSource.cloneWithRows(this.state.list)}
    renderRow  = {(rowData, sectionID, rowID, highlightRow) => this.renderRow(rowData,sectionID,rowID)}
    style      = {{
      height  : document.documentElement.clientHeight - 50,
      overflow: 'auto',
    }}
    onEndReached          = {this.onEndReached}
    onEndReachedThreshold = {10}
  />
    </Tabs>
      </div>
    )
  }
}