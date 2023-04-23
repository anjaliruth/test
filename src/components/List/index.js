import ListItem from "../ListItem";

export default function List({list, removeFromList, increasePriority, decreasePriority}) {
  return (
  <ol>
  {list.map(function(text, i)
  {
    return  <ListItem key={i} text={text} i={i} removeFromList={removeFromList} decreasePriority={decreasePriority} increasePriority={increasePriority}  />;
    
  })}
   

  </ol>
  )
  
}
