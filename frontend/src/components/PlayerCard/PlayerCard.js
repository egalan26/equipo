import React from 'react';
import './PlayerCard.css';
import Image from '../Image/Image'
import Link from '../Link/Link'

export default class PlayerCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return (
    <div className="PlayerCard">
        <p>
          {this.props.name}
        </p>
        <Image/>
        <div>
        <Link name={this.props.name}/>
        <h5>Stats</h5>
        <p>Age: {this.props.age}</p>

        </div>
    </div>
  );
}
}
