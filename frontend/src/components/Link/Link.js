import React from 'react';
import {
  Link as ReactLink
} from 'react-router-dom'


export default class Link extends React.Component{

  render(){
    return  <ReactLink to={this.props.name}>Detalle</ReactLink>

  }
}
