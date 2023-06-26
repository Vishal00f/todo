import useTaskContext from "../hooks/use_task_context";
import { useState } from "react";
import '../index.css'
function CreateTask() {
    const { createTask } = useTaskContext();
    const [newTask, addTask] = useState('');
    const handleChange = (event) => {
        addTask(event.target.value);
    }
    const handleFormSubmit =(event)=>{
        event.preventDefault();

        createTask(newTask);
        addTask('');
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                
                <input value={newTask} onChange={handleChange} placeholder="enter task here" />
                <button className="add-btn">Add +</button>
            </form>
        </>
    );
}
export default CreateTask;