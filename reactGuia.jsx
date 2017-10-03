const porcentaje = 20;

class Model {
   constructor () {
      this.images = ["plane.svg","ship.svg","bicycle.svg","bus.svg","car.svg","truck.svg"];
      this.index = 0;
      this.questions = ["Which is the oldest airline in the world?","Which is the largest port in the world?","What is the longest distance cycling backwards?","What is the highest speed ever reached by a school bus?","What is the longest car trip on one tank of gas?"];
      this.correctAnswers = ["KLM","Port of Shanghai","337.60 km","590 km/h","2617 km"];
      this.answers = [];
      this.options = [["Avianca","KLM","Qantas"],
                ["Port of Shanghai","Port of Singapore","Port of Rotterdam"],
                ["89.30 km","675.10 km","337.60 km"],
                ["590 km/h","320 km/h","245 km/h"],
                ["2617 km","3568 km","1732 km"]];
      this.callback = null;
   }

   subscribe(render) {
      this.callback = render;
   }

   notify() {
      this.callback();
   }
   getQuestion () {
      return this.questions[ this.index ];
   }

   getImage () {
      return this.images[ this.index ];
   }

   getOptions () {
      return this.options[ this.index ];
   }
   
   setAnswerAt (option, index) {
      this.answers.push (option);
      this.index++;
      this.notify();
   }
}

const Option = ( {index, option, model} ) => {
   const onOptionSelect = (e) =>  {
      console.log('value: ', option);
      model.setAnswerAt(option, index);
   };

   return (
      <div>
         <div>
            <span> { String.fromCharCode(65 + index)} -  </span>
            <button onClick = {onOptionSelect} >  {option} </button>
         </div>
      </div>);
};

const TriviaApp = ({title, model}) => {
   let optionList = '';
   let yourAnswers = '';
   const onSubmit = () => {
      console.log ('onSubmit');      
      //model.getReport () ;
   }
   const genReport = () => {
      let result = [];
      for (let i = 0; i < model.correctAnswers.length; i++) {
         let rpta = '';
         if (model.correctAnswers[i] === model.answers[i]) {
            rpta = <div>{model.questions[i]} {model.answers[i]}</div>; 
         }
         else {
            rpta = <div>{model.questions[i]}  <strike>{model.answers[i]} </strike> - {model.correctAnswers[i]}</div>;          
         } 
         result.push(rpta);
      }   
      return result;
   }
   if (model.getOptions()) {
      optionList = model.getOptions().map( (option, index) => {
         return ( <Option key = {index} model = {model} index = {index} option = {option} />) ;
         })   
   } else {

      yourAnswers = (<div>
            <h2>  Here are your answers: </h2>
               <ol>
                 {
                     genReport().map ((question, index) => <li key={index}> {question}  { model.answers[index]} </li> )
                 } 
               </ol>
               <button onClick= { onSubmit }>submit</button>
            </div>
      );
   } 
   return (
      <div> 
         <img src={'img/' + model.getImage()}/>
         <p>  {model.getQuestion()}  </p>
         <div>
            {
               optionList              
            }
            {
               yourAnswers
            }
            
         </div>
      </div>
   );
}

let model = new Model();
let counter = 1;

let render = () => {// let render es una función// Ojito
   console.log('render times: ', counter++);
   ReactDOM.render(
      <TriviaApp title="TodoApp" model={model} />,
      document.getElementById('container')
   );
};

model.subscribe(render); // Es un callBack

render(); // llamo a la función render