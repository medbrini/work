
import react from 'react'
import Todo from './Todo'
import Todolist from './Todolist';
class App extends react.Component{
  state={
    task1:[{
      task:"task 1",
      description:'prend un cafee',
      done:false


    }]
  }

  render(){
      return(
        <div>
         <Todolist tod={this.state.task1}/>
        </div>
          )
    }

}
export default App;