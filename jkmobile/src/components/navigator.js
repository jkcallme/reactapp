import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';


export default class Navigator extends Component{
  render(){
    return (
      <NavBar
      mode         = "light"
      icon         = {<Icon type="left" />}
      onLeftClick  = {() => console.log('onLeftClick')}
      rightContent = {[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>    )
  }
}