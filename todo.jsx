
// primera version!
const getTodoList = (todos) =>  {
   return todos.map ( (todo, index) => {
      return (
         <li key={index}> 
             <p> <input type="checkbox" checked={todo.checked} /> {todo.name} 
              </p>            
         </li>
      );
   });
}

const App = (props) => {
   return (
      <div> 
         <h1>  {props.title} </h1>
         <ol> { getTodoList (props.todos) } </ol>
      </div>
   );
}

// segunda version

const TodoListItem = ({todo}) => {
   return  (
       <p> 
          <input type="checkbox" checked={todo.checked} /> 
          {todo.name} 
      </p>            
   )
}
const TodoList = ({todos}) => {
   const _items = todos.map ((todo, index) => <TodoListItem  key = {index} todo = {todo} />);
   return (
      <ul> 
         {_items }
      </ul>
   );
}

const Todo = ({title, todos}) => {
   return (
      <div> 
         <h1>  {title} </h1>
         <TodoList todos = {todos} />
      </div>
   );
}

 
let todos = [ 
   {name: "Aprender React", checked: false},
   {name: "Aprender JSX", checked: true},
   {name: "Aprender Redux", checked: false}
]

ReactDOM.render ( 
   <Todo title = {'Hola Mundo!'} todos = {todos}>      
   </Todo>, 
   document.getElementById("root")
); 
 