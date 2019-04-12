import React,{Component} from 'react';
import axios from 'axios';
import { NavBar, Icon } from 'antd-mobile';
export default class TabDetail extends Component{
   constructor(props){
     super(props);
     this.state={
       list:{}
     }
   }
  componentDidMount(){
    axios({
      url   : ` http://localhost:3000/people/${this.props.match.params.id}`,
      method: 'get'
    }).then(res=>{
      this.setState({
        list:res.data
    });

    })
  }
  render(){
    var liData=this.state.list;
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
    >新闻详情</NavBar>
       <img src={liData.img} style={{width:'100%'}}></img>
       <h1>{liData.name}</h1>
       <p style={{textIndent:'2em',lineHeight:"30px"} }>{liData.text}</p>
       <p style={{position:"absolute",right:"10px"}}>{liData.time}</p>

      </div>

    )
  }
}