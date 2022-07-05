    import React from 'react';
    import './Todo.css';
    

    class Todo extends React.Component {
        constructor(props) {
        super(props);
        // this.state = { taskName: ' '};
        // console.log('props', props)  
        this.state = { id: props.id, value: props.value, done : props.done};  
        } 

        completeTask = () => {
        // console.log('todo complete', this.props.id);
        this.setState({done: true});
        this.props.completeTask(this.props.id);
    };      

        render(){
    let checkDone = '';
    if( !this.state.done){
        checkDone= (
             <img src="./assets/326572_check_icon.png"
         alt='Done '
         width='20' 
         style={{cursor: 'pointer'}} 
         title ='Click to done '
         onClick = {() => this.completeTask(this.props.id)}
        
         />
         );
    }
    return ( <div className="todo aligned"> 
    {checkDone}
     &nbsp;  

          <img className={this.state.done ? 'noCheckDone' : ''}
          src="./assets/2290850_clean_delete_garbage_recycle bin_trash_icon.png"
         alt='Delete '
         width='20' 
         style={{cursor: 'pointer'}} 
         title ='Click to delete '
         onClick = {() => this.props.deleteTask(this.props.id)}
         /> 
         &nbsp;
    <span className={this.state.done ? 'done' : ''}> 
    {this.state.value}
    </span>
    </div>
            );
        }
    }

    export default Todo;