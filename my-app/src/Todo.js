import "./App.js";
import Addtask from "./Addtask.js";
function Todo(todos, handleClick ) {
 

  
  return (
    <div id="don" >
      {todos.task} : {todos.description}
      <button  onClick={handleClick}> done </button>
      <Addtask/>
    </div>
  );
}
export default Todo;
