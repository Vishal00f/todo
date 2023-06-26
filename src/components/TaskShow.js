import useTaskContext from "../hooks/use_task_context";
import '../index.css'
function TaskShow ({task}){
    const {deleteTask}=useTaskContext();
    const handleClick=()=>{
        deleteTask(task.id);
    }
    return (
        <div className="task-box">
            {task.task}
            <button className="close" onClick={handleClick}>X</button>
        </div>
    
    );
}
export default TaskShow;