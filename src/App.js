import { useEffect } from 'react';
import useTaskContext from './hooks/use_task_context';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask'
import './index.css'
function App() {
const {fetchTasks}= useTaskContext();
  //at first render all the items present in the list
  useEffect(()=>{
      fetchTasks()
     

  },[]);

  return (
<div className='container'>
  <div>
    <h1>To-Do List</h1>
  </div>
  <TaskList/>
  <CreateTask/>
  
</div>
  );
}

export default App;
