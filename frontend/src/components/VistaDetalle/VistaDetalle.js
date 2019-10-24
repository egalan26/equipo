import React from 'react';
import Link from '../Link/Link'
import FichaTecnica from '../FichaTecnica/FichaTecnica'
import {
  BrowserRouter as Router,
  Route,
  Link as ReactLink,
  useParams,
} from 'react-router-dom'
import PlayerCard from '../PlayerCard/PlayerCard'




export default class VistaDetalle extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      players: [
        {"name":"Sergio"},
        {"name":"Pablo"},
        {"name":"Roberto"},
        {"name":"Carlos"},
        {"name":"Angel"},

      ]
    }
  }

  render(){
    const {name} = this.props.match.params
    return (
      <div>
        <h1>VISTADETALLE </h1>
        {this.state.players.map(item =>{
            return (item.name===name) ? (
              <FichaTecnica name={name}/>

            ):(
              null
            )
          }

          )}
        </div>
    );
  }
}
