import { useState } from "react"

export const TaskList = () => {
const [task, setTask] = useState("")
const [taskList, setTaskList] = useState([])

const handleChangeTask = (e) => {
    setTask(e.target.value);
};



const addTask = (e) => {
    e.preventDefault()
    setTaskList([...taskList,task]);
    setTask("")
};


return (
    <div>
        <h4>Lista de Tareas</h4>
        <form onSubmit={addTask}>
        <label htmlFor="task">Tarea</label>
        <input
            type="text"
            id="task"
            name="task"
            placeholder="Ingresa una tarea...."
            value={task}
            autoComplete="off"
            onChange={(handleChangeTask)} />

    <button type="submit">Agregar a la lista</button>
    <button onClick={() => setTaskList([])} >Borrar toda la lista</button>
    <ul>
    {taskList.map((task, index)=> <li key={index}>{task} </li>)}
    </ul>
    </form>
    </div>
);
};

export default TaskList
