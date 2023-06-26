import { useContext } from "react";
import taskContext from "../context/list";

function useTaskContext(){
    return useContext(taskContext);
}

export default useTaskContext;