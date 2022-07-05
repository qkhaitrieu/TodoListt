import React from 'react';
import './App.css';
import TodoList from './TodoList';




  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { taskName: ' ', tasks: []};
    }


    render(){
  
      return <div className='App'>
        <table border='1'>
          <thead>
            <tr>
              <th>NV1</th>
              <th>NV2</th>
            </tr>
          </thead>
         <tbody>
           <tr>
            <td>
  <TodoList  name='ĐI CHỢ'/>

            </td>
            <td>
  <TodoList  name='ĐI ĂN'/>

            </td>
          </tr>
         </tbody>
        </table>
      </div>
  }
}
export default App;
