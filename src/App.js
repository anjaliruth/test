import {useState} from 'react'
import './App.css';
import List from "./components/List"
import Input from "./components/Input"
import Quote from "./components/QuoteDisplay"

function App() {
  const [list, setList] =useState([]);

  function clearList () {
    setList([]);
  }

  function increasePriority(i) {
    let newList = [...list];
    newList = i <= 0 ?
    newList : [...newList.slice(0,i-1), newList[i], newList[i-1], ...newList.slice(i+1)]
    setList(newList);
  }

  function decreasePriority(i) {
    let newList = [...list];
    newList = i >= list.length-1 ?
    newList : [...newList.slice(0,i), newList[i+1], newList[i], ...newList.slice(i+2)]
    setList(newList);
  }


  function addToList(text) {
setList([...list, text])
  }
function removeFromList(i) {
  setList([...list.slice(0 ,i), ...list.slice(i + 1)]);
  }
  return (
    <div className="App">
   <title>To Do List</title>
      <h1>To Do List</h1>
      <Quote />
      <Input addToList={addToList} clearList = {clearList}/>
      <p className = "taskCount">Tasks to do: {list.length}</p>

      {/* Dont need to pass the function with arguments because it will only be called later at which point it will be passed the argument */}
      <List list = {list} decreasePriority={decreasePriority} increasePriority={increasePriority} removeFromList={removeFromList} className="list"/>
    </div>
  );
}

export default App;
