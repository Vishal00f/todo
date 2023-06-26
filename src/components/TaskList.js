import useTaskContext from "../hooks/use_task_context";
import TaskShow from '../components/TaskShow'

function TaskList () {
    const {tasks}= useTaskContext();
    const renderedTasks=tasks.map((task)=>{
        return <TaskShow  task={task} key={task.id}/>
    })
    return (
        <div className="rendered-tasks">
            {renderedTasks}
        </div>
    );
}
export default TaskList;