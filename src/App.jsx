import React from "react"
import List from "./components/List"
import { useState, useEffect } from "react";
import { Toast } from "bootstrap";


function App() {
    const [lItem, setLItem] = useState("");
    const [iText, setIText] = useState([]);
    

    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem('iText'));
      if (storedTodos) {
        setIText(storedTodos);
      }
    }, []); 

    function change(evnt) {
      let value = evnt.target.value;
      setLItem(value);
    } 

useEffect(() => {
    localStorage.setItem('iText', JSON.stringify(iText));
  }, [iText]);

    function addItem() {
      setIText(prev => {
        
        if (prev.length > 9){
          alert("Too many")
          return [...prev];
          setLItem("");
        }else{
          if (lItem === "" ){
            alert("Field Empty");
            return [...prev];
            setLItem("");
          }
        return [...prev, lItem];
        setLItem("");
          
        }
        
      });
      setLItem("");
    };
  
    function deleteItem(id) {
      setIText(prevItems => {
        return prevItems.filter((item, index) => {
          return index !== id;
        });
      });
    }
  return (
    <div className="ListBody ">
    <h1>To-Do List</h1>
    <div>
    <input className="inp" onChange={change} value={lItem} type="text" placeholder="add item"/> 
    <button className="but" onClick={addItem}>
      <span>Add</span>
      </button>
    </div>
    <ul className="lest">
    {iText.map((todoItem, index) => (
            <List
              key={index}
              id={index}
              item={todoItem}
              onChecked={deleteItem}
            />
          ))}
    </ul>
    </div>
  )

}

export default App
