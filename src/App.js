import React, {useState} from "react";
import './App.css'
import ListItems from "./ListItems";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App=()=>{
    const [item , setItem] = useState('')
    const [list , setList] = useState([])
    const [line , setLine] = useState(false)
    const itemHandler = (event)=>{
        setItem(event.target.value)
    }
    const onSubmit = ()=>{
        setList((itemval)=>{
            return [...itemval , item]
        })
        setItem('')
    }
    const dltHandler=()=>{
        setLine(true)
    }
    const fd = ()=>{
        setLine(false)
    }
    return (
      <>
        <div className="list">
        <div className="center-list">
        <h1>ToDo List</h1>
            <input type="text" placeholder="Add Items" value={item} onChange={itemHandler}/>
            <button onClick={onSubmit}>+</button>
            {list.map((items, index)=>
                   <ListItems key={index} id={index} onDoubleClick={fd}
                   onSelect={dltHandler} text={items} plain={line}/>
                )}
        </div>    
        </div>
      </>
    )
}
export default App;