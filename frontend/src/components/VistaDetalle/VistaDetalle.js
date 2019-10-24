import React from 'react';
import FichaTecnica from '../FichaTecnica/FichaTecnica'




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
