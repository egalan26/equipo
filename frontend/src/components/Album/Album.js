import React from 'react';
import './Album.css';
import VistaDetalle from '../VistaDetalle/VistaDetalle'

import PlayerCard from '../PlayerCard/PlayerCard'
const Children = ({match}) => (
  <div>
  <h3>ID:  {match.params.id}</h3>
  </div>
)
export default class Album extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      players: [
        {"name":"Sergio","age":35},
        {"name":"Pablo","age":22},
        {"name":"Roberto","age":14},
        {"name":"Carlos","age":75},
        {"name":"Angel","age":43},

      ]
    }
  };
  handleClick(e) {
    e.preventDefault();
    console.log(e.target.href);

  }
  render(){
    return (
      <div>

        <div className="Album">

          {this.state.players.map(item =>
            <PlayerCard name={item.name} age={item.age} onClick={this.handleClick}/>
          )}
          <br/>


        </div>
      </div>
    );
  }
}
