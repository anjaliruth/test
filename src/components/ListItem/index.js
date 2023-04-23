import { useState } from "react";


export default function ListItem({ text, removeFromList, i, increasePriority, decreasePriority }) {
    function handleCheckedChange() {
        setIsChecked(!isChecked);
    }
    const [isChecked, setIsChecked] = useState(false);
  return (
    <li className="list">
      <input type="checkbox" checked={isChecked} onChange = {handleCheckedChange}/>
      <span style={{textDecoration: isChecked ? "line-through" : "none", display: 'inline-block'}}>{text}</span>
      <button className = "inListButton" onClick={() => increasePriority(i)}>↑</button>
      <button className = "inListButton" onClick={() => decreasePriority(i)}>↓</button>
      <button className = "inListButton" onClick={() => removeFromList(i)}>Delete</button>
    </li>
  );
}
