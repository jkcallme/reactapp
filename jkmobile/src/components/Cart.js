import React,{Component} from 'react';
import { NavBar, Icon,Card } from 'antd-mobile';
import {addToCart,increase,decrease} from '../actions'
import CartSvg from '../assets/cart.svg'

import { connect } from 'react-redux';
 const mapStateToProps = state=>{
  return {
      carts:state.carts
  }
}
class Cart extends Component{
  render(){

      if(this.props.carts.length==0){
        return (
          <div>
          <NavBar
        style={{background:'red'}}
    mode="dark"
    leftContent="返回"
    rightContent={[
      <Icon key="1" type="ellipsis" />
    ]}
    onLeftClick={()=>this.props.history.push('/')}
  >购物车</NavBar>

  <div style={{margin:'10px 15px',border:'1px solid #888'}}>
  <img src={CartSvg} style={{width:'50%'}}/>
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
                    style={{background:'red'}}
                mode="dark"
                leftContent="返回"
                rightContent={[
                  <Icon key="1" type="ellipsis" />
                ]}
                onLeftClick={()=>this.props.history.push('/product')}
              >购物车</NavBar>
              <div style={{padding:'10px 15px'}}>

              {carts.map((val,index)=>{
                return (<div key={index}>
                  <Card>

                  <Card.Body>
                    <div><img src={val.img} style={{width:'100px',height:'100px',float:'left'}}/>
                    <div style={{float:'left',padding:'1px 0px 0 20px',textAlign:'left',fontSize:'20px',width:'66%'}}><p style={{}}>{val.title}</p>

                    <p>
                    <span style={{color:'red',float:'left',fontSize:'16px'}}>单价：￥{val.price.number}</span>
                    <span style={{display:'block',width:'20px',height:'25px',border:'1px solid #888',float:'left',fontSize:'14px',textAlign:'center',marginTop:'-3px',lineHeight:'23px',marginLeft:'25px'}} onClick={()=>{this.props.decrease(val)}}>
                    -
                    </span>
                    <span style={{display:'block',width:'30px',height:'25px',border:'1px solid #888',float:'left',fontSize:'14px',textAlign:'center',marginTop:'-3px',lineHeight:'23px',borderLeft:'none'}}>
                    {val.quantity}
                    </span>
                    <span style={{display:'block',width:'20px',height:'25px',border:'1px solid #888',float:'left',fontSize:'14px',textAlign:'center',marginTop:'-3px',lineHeight:'23px',borderLeft:'none'}} onClick={()=>{this.props.increase(val)}}>
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


export default connect(mapStateToProps,{increase,decrease,addToCart})(Cart);