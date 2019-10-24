import React from 'react';

export default class FichaTecnica extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      players: [
        {"name":"Sergio","age":35, "goles": 5, "partidos": 1, "zurdo": 'Si'},
        {"name":"Pablo","age":22, "goles": 5, "partidos": 1, "zurdo": 'Si'},
        {"name":"Roberto","age":14, "goles": 5, "partidos": 1, "zurdo": 'Si'},
        {"name":"Carlos","age":75, "goles": 5, "partidos": 1, "zurdo": 'Si'},
        {"name":"Angel","age":43, "goles": 5, "partidos": 1, "zurdo": 'Si'},

      ]
    }
  }

  render(){
    return (
      <div>
      {this.state.players.map(item =>{
          return (item.name===this.props.name) ? (<div>
            <p><strong>Nombre:</strong> {item.name}</p>
            <p><strong>Edad:</strong> {item.age}</p>
            <p><strong>Goles:</strong> {item.goles}</p>
            <p><strong>Partidos:</strong> {item.partidos}</p>
            <p><strong>Zurdo:</strong> {item.zurdo}</p>
</div>
          ):(
            null
          )
        }

        )}
      </div>);
  }
}
