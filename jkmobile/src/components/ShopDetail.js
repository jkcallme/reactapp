import React,{Component} from 'react'
import { NavBar, Icon } from 'antd-mobile';
import axios from 'axios';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { List, Badge } from 'antd-mobile';
import {addToCart} from '../actions/carts'
import Shop from '../css/shop.css';

import { Button } from 'antd-mobile';
import { Stepper} from 'antd-mobile';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = (state)=>{
console.log(state);

  return {
     carts:state.carts
  }
}

class ShopDetail extends Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state={
          list:{}
        }
      }
      componentDidMount(){
        axios({
          url   : ` http://localhost:3000/product/${this.props.match.params.id}`,
          method: 'get'
        }).then(res=>{

          this.setState({
            list:{...this.state.list,...res.data}

        });

        })
      }

    render(){

      const {addToCart,carts}=this.props;
        var liData=this.state.list;
        const tabs = [
            { title: '商品' },
            { title: '详情' },
            { title: '评价' },
          ];

        const Item = List.Item;
          function renderTabBar(props) {
            return (<Sticky>
              {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
            </Sticky>);
          }
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
        >商品详情</NavBar>
        <StickyContainer>

      <Tabs tabs={tabs}
        initalPage={'t2'}
        renderTabBar={renderTabBar}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  height: '250px',backgroundColor: '#fff' }}>
        <div>
        <img src={liData.img} style={{width:'100%',height:'300px'}}></img>
        </div>

        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        <img src={liData.img} style={{width:'100%',height:'300px'}}></img>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        <img src={liData.img} style={{width:'100%',height:'300px'}}></img>
        </div>
      </Tabs>
    </StickyContainer>
    <h1>{liData.name}</h1>
    <p style={{textIndent:'2em',lineHeight:"30px"} }>{liData.text}</p>
    <div><span className='jk' style={{ fontSize: '24px', color: '#ce3e3e' }}>
    ¥ {liData.id}  </span></div>

    <List.Item>
    <span className="span">专属优惠</span>
    <Badge text="减" hot style={{ marginLeft: 12 }} />
    <Badge text="惠" hot style={{ marginLeft: 12 }} />
    <Badge text="免" hot style={{ marginLeft: 12 }} />
    <Badge text="反" hot style={{ marginLeft: 12 }} />
    <Badge text="HOT" hot style={{ marginLeft: 12 }} />
    <Badge text="券" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#f19736', borderRadius: 2 }} />
    <Badge text="NEW" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
  </List.Item>


  <Item extra={<Stepper style={{ width: '100%', minWidth: '120px' }} showNumber size="small" defaultValue={20} />}>

  </Item>

  <Button onClick={(product)=>this.props.addToCart(this.state.list)} type="warning" style={{width:'120px' ,float:'right'}} inline={true}>加入购物车</Button>

          </div>

        )
      }
    }
const ShopDetailsContainer =connect(mapStateToProps,{addToCart})(ShopDetail);
export default ShopDetailsContainer;