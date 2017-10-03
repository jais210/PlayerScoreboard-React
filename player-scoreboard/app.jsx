// MODELO
/*Dento de la clase, en la parte del constructor deben ir 
todos los datos que necesito para el dinamismo.
Dichos datos deben iniciarse por defecto o en cero.
Los DATOS estátitos son las propiedades.
El dinamismo son lo métodos (funciones).
En mi clase colocaré todo aquello que me servirá para
construir el dinamismo y los componentes REACT */
class Model {
  constructor(){
    /* Dentro del constructor se llama a sus elementos con
    THIS. Fuera de la clase para llamar 
    a sus elementos se referencia primero al nombre de la clase, seguida 
    de un punto, y luego el nombre de la propiedad o método de la clase
    */ 
    this.players = [
      // arreglo de objetos
      { name: "Jim Hokins",
        score: 31,
        id: 1,
      },
      { name: "Andre Hokins",
        score: 35,
        id: 2,
      },
      { name: "Elena Hokins",
        score: 42,
        id: 3,
      },
    ];
    this.callback = null;  // ver utilidad
    this.inputValue = null;
    this.totalPlayers= 0;//  3?
    this.totalScores= 0;// 108?
    
    }
   // al finalizar incluir el Watch (buscar documentación)
  subscribe(render) { // cada vez que se añada un nuevo elemento se actualiza el DOM virtual
    this.callback = render;     
  }  

  addPlayers(){
      this.players.push({
      name: this.inputValue,
      score: 0,
      id: this.players[i+1]
   });
   subscribe();
  } 

  score(){
    // recorro el arreglo para sacar de cada objeto solo su score
    return this.players.map((p) =>{
      return (p.score);
    });
  }
  // se actualiza con eso???? WHAT?
// falta actualizar los valores
  addScoreAllPlayers(){
    let allScore = score(this.players);
    allScore.reduce((back,now)=>{
      return back+now;
    },108);//this.totalPlayers?
  }
  numbPlayers(){
    return this.players.map((p)=>{
      return (p.id);
    });
  }
  addNumbAllPlayers(){
    let allPlayers = numbPlayers(this.players);
    allPlayers.reduce((back,now)=>{
      return back+now;
    },3);// this.totalScores?
  }

}

// function score (){
//   // recorro el arreglo para sacar de cada objeto solo su score
// 	return players.map((player) =>{
// 		return (player.score);
// 	});
// }

// function addScore (){
//   // recorro cada objeto para coger su score y devolver la suma total
// 	let scores = score(players);
// 	return scores.reduce((back,now) =>{
// 		return back+ now;
// 	},0);
// }

// VISTA

function show (){
  return players.map((player, index)=>{
	return (
		<div className="player">
			<div className="player-name">
				<center><strong>{player.name}</strong></center> 
			</div>
			<div className="player-score counter">
				<div className="counter-action decrement">
					-
				</div>
				<div className="counter-score">
					{player.score}
				</div>
				<div className=" counter-action increment">
					+
				</div>
			</div>
		</div>
	);
  });
}
// etiquetas

const Header = (props) => {
  	return(
		<div className="header">
			<div className="stats">
				<table>
					<tr>
						<td>Player: </td>
						<td className="letter"><strong>{props.players.length}</strong></td>
					</tr>
					<tr>
						<td>Total Points: </td>
						<td className="letter"><strong>{addScore(props.players)}</strong></td>
					</tr>
				</table>
			</div>
			<h1><strong>{props.title}</strong></h1>
			<div className="stopwatch">
				<h2>STOPWATCH</h2>
				<div className="stopwatch-time">
					0
				</div>
				<div>
					<button><strong>START</strong></button>
					<button><strong>RESET</strong></button>
				</div>
			</div>
		</div>
  	);
} 

const List = (props) => {
  return (
	  <div>{show(props.players)}</div> 
  );
}

const Form = (props) => {
  return (
	<div className="add-player-form">
		<form>
			<input type="text"placeholder="ENTER A NAME"/>
			<input type="submit" value="ADD PLAYER"/>
		</form>
	</div>
  );
}

// creo la etiqueta que contiene las demás etiquetas
const TableroScore = ({title, players}) => {
   return (
	 <div className="scoreboard">
		<Header players={players} title={title}/>
		<List players={players}/>
		<Form />
	  </div>      
   );
}

ReactDOM.render(<TableroScore title="Scoreboard" players = {players}/>, document.getElementById('container'));