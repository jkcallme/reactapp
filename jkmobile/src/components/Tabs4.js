import React,{Component} from 'react';
import { NavBar, Icon,Card } from 'antd-mobile';
import {addToCart} from '../actions'
import CartSvg from '../assets/cart.svg'
import { List, Badge } from 'antd-mobile';
import Cart from '../css/cart.css'
import { connect } from 'react-redux';
 const mapStateToProps = state=>{
  return {
      carts:state.carts
  }
}
class Tabs4 extends Component{
  render(){

      if(this.props.carts.length==0){
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
        >我的购物车</NavBar>

<div className='jk' style={{marginRight:'-2px',marginTop:'140px'}}>
  <img src={CartSvg} style={{width:'40%'}}/>
  <p style={{fontSize:'20px',fontWeight:'bold',color:'#888'}}>购物车空空如也,赶快添加吧！</p>
  </div>
  </div>

  )
      }else{
        const carts=this.props.carts;
console.log(carts)
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
        >我的购物车</NavBar>
              <div style={{padding:'20px 20px'}}>

              {carts.map((val,index)=>{
                return (<div key={index} >
                  <Card >

                  <Card.Body >
                    <div  style={{height:'60px'}} ><img src={val.img} style={{width:'100px',height:'100px',float:'left'}}/>
                    <div className='' style={{float:'left',padding:'1px 0px 0 20px',textAlign:'left',fontSize:'20px',width:'66%'}}>
                    <List.Item className='hqx' >
                    {val.text}
                  </List.Item>
                    <p>
                   <span style={{color:'rgb(206, 62, 62)',position:'relative',fontSize:'26px',marginLeft:'45px'}}>  ￥{val.price.number}</span>
                    <span  style={{ background:'white',display:'block',width:'20px',height:'25px',border:'1px solid #888',float:'left',fontSize:'14px',textAlign:'center',marginTop:'1px',lineHeight:'23px'}} onClick={()=>{this.props.decrease(val)}}>
                    -
                    </span>
                    <span style={{ background:'white',display:'block',width:'30px',height:'25px',border:'1px solid #888',float:'left',fontSize:'14px',textAlign:'center',marginTop:'1px',lineHeight:'23px',borderLeft:'none'}}>
                    {val.quantity}
                    </span>
                    <span style={{ background:'white',display:'block',width:'20px',height:'25px',border:'1px solid #888',float:'left',fontSize:'14px',textAlign:'center',marginTop:'1px',lineHeight:'23px',borderLeft:'none'}} onClick={()=>{this.props.increase(val)}}>
                    +
                    </span>
                    </p>
                    </div>
                    </div>
                  </Card.Body>
                </Card>
                </div>)
              })}
              </div>
              </div>


        )
      }

  }
}


export default connect(mapStateToProps,{addToCart})(Tabs4);