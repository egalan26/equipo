import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link as ReactLink
} from 'react-router-dom'


export default class Link extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return  <ReactLink to={this.props.name}>Detalle</ReactLink>

  }
}
