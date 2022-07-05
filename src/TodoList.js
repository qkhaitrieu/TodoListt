import React from 'react';
import './TodoList.css';
import Todo from './Todo';



  class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {todoListName: props.name, taskName: ' ', tasks: []};
    }

    myChangeHandler = (event) => {
      this.setState({taskName: event.target.value}); // mỗi lần change thì sẽ chỉnh lại mới
      // console.log('myChangeHandler', event.target.value);
    };
    addTask = () => {
      // console.log('addTask', this.state.taskName);
      if(this.state.taskName === ''){
        return
      }
      const id = this.state.tasks.length;
      const name = this.state.taskName;
      this.state.tasks.push({id, name, done: false}); // thêm 1 item vào danh sách
      // this.setState({ tasks: newTasks});
       this.setState({taskName:''});
    };

     deleteTask = (id) => {
      // console.log('list', this.state.tasks);
    // console.log('delete',id);
    const tasks = this.state.tasks.filter((task)=> task.id !== id);
    this.setState({tasks});
    };

      completeTask = (id) => {
        // console.log('completeTask',id);
      const tasks = this.state.tasks;
      tasks.forEach(task =>  {
         if(task.id === id) {
        task.done =true;
      }
      });
                                        // console.log('Task muốn complete',tasks);
     this.setState({tasks}); 
    };

    render(){
  
  return (
    <div className="todoList">
      
       {this.state.todoListName}
        <div className='aligned'>
        <img src="./assets/299068_add_sign_icon.png"
         alt='Add Task'
         width='25' 
         style={{cursor: 'pointer'}} 
         title ='Add'
         onClick = {() => this.addTask()}
         />  
         
        <input type='text' 
        value={this.state.taskName} // khi thêm nó sẽ xóa chữ ở te xt
        onChange={this.myChangeHandler}
        />
        </div>
    <ul>
      { this.state.tasks.map((value, index) => {
        // return <li key ={index} > {value}</li>
        return <Todo
        ref='todo'
         key={index} 
         id={value.id} 
         value ={value.name} 
         deleteTask={this.deleteTask}
         completeTask={this.completeTask}
         />;
      })}
    </ul>

  
    </div>
  );
}
  }

export default TodoList;
