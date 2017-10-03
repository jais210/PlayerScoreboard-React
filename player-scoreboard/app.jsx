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
      { name: "Jim Hoskins",
        score: 31,
        id: 1,
      },
      { name: "Andree Hoskins",
        score: 35,
        id: 2,
      },
      { name: "Alena Hoskins",
        score: 42,
        id: 3,
      },
    ];
    this.callback= null;  // ver utilidad
    this.totalPlayer= 0;
    this.totalPoints= 0;
    }
   // al finalizar incluir el Watch (buscar documentación)
  subscribe(render) { // cada vez que se añada un nuevo elemento se actualiza el DOM virtual
    this.callback = render;
  addPlayers(){
    let newPlayer=  
  }  
  }  
}

// VISTA
function score (){
  // recorro el arreglo para sacar de cada objeto solo su score
	return players.map((player) =>{
		return (player.score);
	});
}

function addScore (){
  // recorro cada objeto para coger su score y devolver la suma total
	let scores = score(players);
	return scores.reduce((back,now) =>{
		return back+ now;
	},0);
}

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