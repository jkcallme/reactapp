import React from 'react'
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import { Provider } from 'react-redux';
import { TabBar } from 'antd-mobile';
// 引入SVG图片
import HomeSvg from './assets/home.svg'
import NewsSvg from './assets/news.svg'
import ProductSvg from './assets/product.svg'
import MineSvg from './assets/cart.svg'

import store from './store'
import Tabs1 from './components/Tabs1'
import Tabs2 from './components/Tabs2'
import Tabs3 from './components/Tabs3'
import Tabs4 from './components/Tabs4'
import Tabs5 from './components/Tabs5'
import TabDetail from './components/TabDetail'

import { HashRouter as Router,Route,Switch ,NavLink} from 'react-router-dom'
import ShopDetail from './components/ShopDetail';


export default class TabBarExample extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'redTab'
      };
    }

    // render渲染 content内容
    renderContent(pageText) {

      return (
        <div style={{ backgroundColor: 'white', height  : document.documentElement.clientHeight - 50,
          overflow: 'auto', textAlign: 'center' }}>
            <Switch>
                <Route path="/home" component={Tabs1}/>
                <Route path="/news" component={Tabs2} exact/>
                <Route path="/news/:id" component={TabDetail}/>
                <Route path="/product" component={Tabs3} exact/>
                <Route path="/product/:id" component={ShopDetail}/>
                <Route path="/mine" component={Tabs4}/>
                <Route path="/my" component={Tabs5}/>
                <Route  component={Tabs1}/>
            </Switch>
        </div>
      );
    }

    render() {
      return (
        <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
          <TabBar
            unselectedTintColor = "#949494"
            tintColor           = "#33A3F4"
            barTintColor        = "white"
            hidden              = {false}
            tabBarPosition      = "bottom"
          >
            <TabBar.Item
              title = "首页"
              key   = "Home"
              icon  = {<div style={{
                width     : '22px',
                height    : '22px',
                background: `url(${HomeSvg}) center center /  21px 21px no-repeat` }}
              />
              }
              selectedIcon={<div style={{
                width     : '22px',
                height    : '22px',
                background: `url(${HomeSvg}) center center /  21px 21px no-repeat` }}
              />
              }
              selected = {this.state.selectedTab === 'homeTab'}
              badge    = {1}
              onPress  = {() => {
                this.setState({
                  selectedTab: 'homeTab',
                },()=>{
                    this.props.history.push('/home')
                });
              }}
              data-seed = "logId"
            >
              {this.renderContent('Home')}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width     : '22px',
                  height    : '22px',
                  background: `url(${NewsSvg}) center center /  21px 21px no-repeat` }}
                />
              }
              selectedIcon={
                <div style={{
                  width     : '22px',
                  height    : '22px',
                  background: `url(${NewsSvg}) center center /  21px 21px no-repeat` }}
                />
              }
              title    = "新闻"
              key      = "News"
              badge    = {'new'}
              selected = {this.state.selectedTab === 'newsTab'}
              onPress  = {() => {
                this.setState({
                  selectedTab: 'newsTab',
                },()=>{
                    this.props.history.push('/news')
                });
              }}
              data-seed = "logId1"
            >
              {this.renderContent('News')}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width     : '22px',
                  height    : '22px',
                  background: `url(${ProductSvg}) center center /  21px 21px no-repeat` }}
                />
              }
              selectedIcon={
                <div style={{
                  width     : '22px',
                  height    : '22px',
                  background: `url(${ProductSvg}) center center /  21px 21px no-repeat` }}
                />
              }
              title = "产品"
              key   = "Product"
              dot
              selected = {this.state.selectedTab === 'ProductTab'}
              onPress  = {() => {
                this.setState({
                  selectedTab: 'ProductTab',
                },()=>{
                    this.props.history.push('/product')
                });
              }}
            >
              {this.renderContent('Product')}
            </TabBar.Item>
            <TabBar.Item
            icon={
                <div style={{
                  width     : '22px',
                  height    : '22px',
                  background: `url(${MineSvg}) center center /  21px 21px no-repeat` }}
                />
              }
              selectedIcon={
                <div style={{
                  width     : '22px',
                  height    : '22px',
                  background: `url(${MineSvg}) center center /  21px 21px no-repeat`,
                }}
                />
              }
              title    = "购物车"
              key      = "mine"
              selected = {this.state.selectedTab === 'MineTab'}
              onPress  = {() => {
                this.setState({
                  selectedTab: 'MineTab',
                },()=>{
                    this.props.history.push('/mine')
                });
              }}
            >
              {this.renderContent('Mine')}
            </TabBar.Item>
            <TabBar.Item
            icon={
              <div style={{
                width     : '22px',
                height    : '22px',
                background: `url(${ProductSvg}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width     : '22px',
                height    : '22px',
                background: `url(${ProductSvg}) center center /  21px 21px no-repeat` }}
              />
            }
            title = "我的"
            key   = "Product"
            dot
            selected = {this.state.selectedTab === 'ProductTab'}
            onPress  = {() => {
              this.setState({
                selectedTab: 'ProductTab',
              },()=>{
                  this.props.history.push('/product')
              });
            }}
          >
            {this.renderContent('Product')}
          </TabBar.Item>
          </TabBar>
        </div>
      );
    }
  }

class Index extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/" component={TabBarExample} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('app'));