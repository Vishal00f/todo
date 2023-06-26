//this will be a context file where all the functions and states will be declared according to the requirements
import { createContext, useState, useCallback } from "react";
import axios from 'axios'
const taskContext=createContext();

function Provider( {children} ){
     const [tasks,setTasks]=useState([]);
    //step 1 render(get) the tasks from json server 
    const fetchTasks=useCallback(async ()=>{
        const response=await axios.get('http://localhost:3001/tasks');
        setTasks(response.data);
      },[]);

    const createTask = async (newTask)=>{
       const response= await axios.post('http://localhost:3001/tasks',{
            task:newTask
        })
        console.log(response);
        setTasks([...tasks,response.data])
    }
    const deleteTask = async (id) =>{
        const response=await axios.delete(`http://localhost:3001/tasks/${id}`);
        
        const updatedTasks= tasks.filter((task)=>{
            return task.id!==id;
        })
        setTasks(updatedTasks);
    }
    const valueToShare ={
        tasks,
        fetchTasks,
        createTask,
        deleteTask,
    }


    return(
        <taskContext.Provider value={valueToShare}>
            {children}
        </taskContext.Provider>
    )
}

export {Provider};
export default taskContext;