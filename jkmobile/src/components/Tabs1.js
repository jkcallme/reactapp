import React,{Component} from 'react';
import { Popover,NavBar, Icon } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux';
import { fetchCarsouelList } from '../actions';
import { Grid } from 'antd-mobile';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
// 引入SVG图片
import Music from '../assets/music.svg';
import Music1 from '../assets/music1.png'
import '../css/home.css'
const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const mapStateToProps = state=>{
  return {
    carousel: state.carousel
  }
}

const data = Array.from(new Array(3)).map((_val, i,) => ({
  icon: `${Music}`,
  text: `name${i}`,
}));
const data1 = Array.from(new Array(9)).map(() => ({
  icon: `${Music1}`,
}));
function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: '个性推荐' },
  { title: '歌单' },
  { title: '主播电台' },
];

 class Tabs1 extends Component{
  componentDidMount(){
    this.props.fetchCarsouelList();
  }

  state = {
    visible: false,
    selected: '',
  };

  onSelect = (opt) => {

    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };

  render(){

    const {carousel} = this.props;

    return (
      <div>

      <NavBar

      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,


      ]}
    >
      个性推荐
    </NavBar>
    <StickyContainer>
      <Tabs tabs={tabs}
        initalPage={'t2'}
        renderTabBar={renderTabBar}
      >
        <div>
      <div>

      <WingBlank>
      <Carousel
      autoplay = {false}
      infinite
      beforeChange = {(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange  = {index => console.log('slide to', index)}
    >
      {carousel.map(val => (
        <a
          key   = {val.id}
          href  = {val.url}
          style = {{ display: 'inline-block', width: '100%', height:200}}
        >
          <img
            src   = {val.img}
            alt   = {val.title}
            style = {{ width: '100%', verticalAlign: 'top',height:200 }}

          />
        </a>
      ))}
    </Carousel>
      </WingBlank>
      </div>
      <div>
      <Grid data={data} columnNum='3' hasLine={false} isCarousel={false} onClick={_el => console.log(_el)}

      renderItem={dataItem => (
        <div style={{ padding: '12.5px' }}>
          <img src={dataItem.icon} style={{ width: '50px', height: '50px'}} alt="" className='icon' />
          <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
            <span>每日歌曲推荐</span>
          </div>
        </div>
      )} />
      <Grid data={data1}
      columnNum={3}
      renderItem={dataItem => (
        <div>
          <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
          <div style={{ color: '#888', fontSize: '14px', marginTop: '2px' }}>
            <span>送给你 My Love</span>
          </div>
        </div>
      )}
    />
      </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of second tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of third tab
        </div>
      </Tabs>
    </StickyContainer>
    <WhiteSpace />



      </div>
    )
  }
}

export default connect(mapStateToProps,{fetchCarsouelList})(Tabs1);