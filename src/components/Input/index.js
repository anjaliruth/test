import {useState} from "react";

export default function Input ({addToList, clearList}) {
const [text, setText] = useState("")

function onSubmit() {
    //if text is empty, dont submit
    if (!text) {
        return;
    }
    addToList(text)
    //sets Input field back to empty
    setText("")
    
}

return (
    <div className="application">
        <input value={text} onChange = {(event)=>setText(event.target.value)}/>

        <button onClick = {()=>onSubmit()}>Add Task</button>
        <button onClick = {()=>clearList()}>Clear List</button>

    </div>
)
}