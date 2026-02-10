import { useState } from "react";

export default function TodoList() {

    const[todoList,setTodoList] = useState(["Task 1","Task 2","Task 3"]);

    const[task,setTask] = useState("");

    const addTodo = ()=>{
        if(task.trim() === ""){
            alert("Please enter a task.");
            return ;
        }
        setTodoList([...todoList,task]);
        setTask("");
    }
    return (
        <>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={addTodo}>Add todo</button>

        {
            todoList.map((item,index)=>{
                return <li key={index}>{item}</li>
            })
        }

        {/* <h1>{task}</h1> */}
      
        </>
  )
}

