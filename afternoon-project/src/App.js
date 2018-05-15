import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import MdFileDownload from 'react-icons/lib/md/file-download';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import TiDelete from 'react-icons/lib/ti/delete';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Primary</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button>Default</Button>
        <Button type='dwnloadicon'><MdFileDownload/></Button>
        <Button type = 'primarydwnload'><MdFileDownload/>Download</Button>
        <div>
          <StyledButton primary size = {'medium'}>Words</StyledButton>
          <StyledButton>Words</StyledButton>
          <Button type = 'backwards'><MdArrowBack /> Backward</Button>
          <Button type = 'forwards'>Forward <MdArrowForward/></Button>
          <ProgressBar data = {48} type = 'primaryProgress'/>
          <ProgressBar data = {74} type = 'redProgress'/>
          <ProgressBar data = {100} type = 'greenProgress'/>
          <ProgressBar data = {60} />
        </div>
        <div>
          <List
            data={[1, 2, 3, 5, 1, 3, 2]}
            renderItem={(num, i, sizeChoice) => <ul style = {sizeChoice}key={i}>{num}</ul>} />
          <List data = {['hello', 'run', 'stop', 'goodbye', 'yes']} renderItem = { (words, i, sizeChoice) => <ul style = {sizeChoice} key = {i}>{words}!</ul>} type = 'small'/>
          <List data = {['meat', 'cheese', 'bun', 'lettuce', 'tomato']} renderItem = { (words, i, sizeChoice) => <ul style = {sizeChoice} key = {i}>{words}!</ul>} type = 'large'/>

        </div>
       
      </div>
    );
  }
}

export default App;

const fontSizes = {
  small: '14px',
  medium: '22px',
  large: '64px'
}

const StyledButton = styled.button`
  background-color: ${props => props.primary ? 'salmon' : 'white'};
  color: ${props => props.primary ? 'white' : 'salmon'};
  border: ${props => props.primary ? '' : '2px solid salmon'};
  border-radius: 5px;
  padding: 4px;
  font-size: ${props => fontSizes[props.size]}
`

const StyledList = styled.div`
border-radius: 4px;
border: 1px solid #d9d9d9;
font-size: 14px;
line-height: 1.5;
color: rgba(0,0,0,.65);
box-sizing: border-box;
margin: 42px 24px 50px 24px;
`


class List extends Component {
  render() { 
    const {data, renderItem, type} = this.props;
    const sizeChoice = listSizes[type ? type : 'default']
    const listItems = data.map((num, i) => renderItem(num, i, sizeChoice));
    return ( 
      <StyledList className = 'list'>
      {listItems}
      </StyledList>
     )
  }
}

List.propTypes = {
  type: PropTypes.string
}

let large = {
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 16,
  paddingBottom: 16,
  borderBottom: '1px solid #e8e8e8',
  margin: 0,
  textAlign: 'left'
}

let small = {
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 8,
  paddingBottom: 8,
  borderBottom: '1px solid #e8e8e8',
  margin: 0,
  textAlign: 'left'

}

let defaultList = {
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 12,
  paddingBottom: 12,
  borderBottom: '1px solid #e8e8e8',
  margin: 0,
  textAlign: 'left'

}

let listSizes = {
  large: large,
  small: small,
  default: defaultList
}

class Button extends Component {
  render(){

    //need type from props
    const { type, children } = this.props;
    const styleChoice = styles[type ? type : 'default']; //choose inline styling based on the type passed in. Use Object.assign to create a whole new object with base attributes and conditional. Really shortens the amount of code to write. Ternary is just differ to default
    return (
      <button style={Object.assign({}, btnBase, styleChoice)}>{children}</button> //Makes it so you can access the "Click Me" placed between the Button component tags in the App class render. This makes a Higher Order Component
    );
  }
}

Button.propTypes = {
  type: PropTypes.string
}


let btnBase = {
  borderRadius: 4,
  paddingTop: 0,
  paddingBottom: 0,
  paddingRight: 15,
  paddingLeft: 15,
  height: 32,
  fontSize: 14,
  margin: 8
};

let primaryStyle = {
  backgroundColor: '#1890ff',
  color: 'white',
  borderWidth: 1,
  borderColor: 'transparent'
};

let primarydwnload = {
  backgroundColor: '#1890ff',
  color: 'white',
  borderWidth: 1,
  borderRadius: 4,
  height: 32,
  borderColor: 'transparent'
}

let defaultStyle = {
  borderWidth: 1,
  borderColor: 'lightGray',
  color: 'rgba(0,0,0,.65)'
};

let dashed = {
  borderWidth: 1,
  borderColor: 'lightGray',
  borderStyle: 'dashed',
  color: 'rgba(0,0,0,.65)'
}

let danger = {
  borderWidth: 1,
  borderColor: '#d9d9d9',
  backgroundColor: '#f5f5f5',
  color: '#f5222d'
}

let dwnload = {
  borderRadius: '50%',
  backgroundColor: '#1890ff',
  color: 'white',
  width: 32,
  heigth: 32,
  padding: 0,
  fontSize: 16,
  borderColor: '#1890ff',
  fontWeight: 100,
  padding: 0
}

let backwards = Object.assign({}, primaryStyle, {marginRight: 0, borderBottomRightRadius: 0, borderTopRightRadius: 0, borderRightColor: '#409aff'});

let forwards = Object.assign({}, primaryStyle, {marginLeft: 0, borderBottomLeftRadius: 0, borderTopLeftRadius: 0, borderLeftColor: '#409aff'});

let styles = {
  primary: primaryStyle,
  default: defaultStyle,
  danger: danger,
  dashed: dashed,
  dwnloadicon: dwnload,
  primarydwnload: primarydwnload,
  backwards: backwards,
  forwards: forwards

}

class ProgressBar extends Component {
  render(){
    const {data, type} = this.props;
    const progressStyles = myStyles[type ? type : 'defaultProgress']
    return (
      <div style = {{display: 'flex', alignItems: 'center', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '75%', marginBottom: 20}}> 
        <div style = {Object.assign({}, progressBase)}>
          <div style = {Object.assign({}, progressBase, progressStyles, {width: `${data}%`})}></div>
        </div>
        {type === 'primaryProgress' ? <p style = {{color: 'rgba(0,0,0,.45'}}>{data}%</p> : type === 'redProgress' ? <TiDelete style = {{color: '#ff0002', fontSize: 20}}/> : type === 'greenProgress' ? <FaCheckCircle  style = {{color: '#52c41a', fontSize: 16}}/> : null}
      </div>
      
    )
  }
}

let data = 100;

const progressBarEffect = keyframes`
0% {
  background-color: #58affc;
  width: 0%;
}

25% {
  background-color: #58affc;
  width: ${data/2}
}

50% {
  background-color: #58affc;
  width: ${data}
}

75% {
  background-color: #58affc;
  width: ${data}
}

100% {
  background-color: #58affc;
  width: ${data}
}
`

ProgressBar.propTypes = {
  type: PropTypes.string,
  data: PropTypes.number
}

let progressBase = {
  width: '75%',
  backgroundColor: '#f5f5f5',
  height: 10,
  marginRight: 5,
  borderRadius: 100
}

let primaryProgress = {
  backgroundColor: '#1890ff',
  margin:0,
  animationName: progressBarEffect,
  animationDuration: '3s',
  animationTimingFunction: 'ease'
}

let redProgress = {
  backgroundColor: "#ff0002",
  margin: 0
}

let greenProgress = {
  backgroundColor: '#52c41a',
  margin: 0
}

let defaultProgress = {
  backgroundColor: '#1890ff',
  margin: 0
}

let myStyles = {
    primaryProgress: primaryProgress,
    redProgress: redProgress,
    greenProgress: greenProgress,
    defaultProgress: defaultProgress
}

