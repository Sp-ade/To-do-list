import React from "react"
import List from "./components/List"
import { useState, useEffect } from "react";

import ReactDOM from "react-dom";



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
        
        if (prev.length > 9 && lItem !== ""){
          alert("Max cap reached", {
            autoClose: 3000,
            pauseOnHover:true,
            position: "top-center",
          })
          return [...prev];
          setLItem("");
        }else{
          if (lItem === "" ){
            alert("Field Empty", {
              autoClose: 3000,
              pauseOnHover:true,
              position: "top-center",
            })
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


    function handlekey(event){
      if(event.keyCode === 13){
        addItem();
      }
    }

  return (
    <div>
    <div className="ListBody ">
    <h1>To-Do List</h1>
    <div>
    <input className="inp" onChange={change} onKeyDown={handlekey} value={lItem} type="text" placeholder="add item"/> 
    <button className="but" onClick={addItem}>
      <span>Add</span>
      </button>
     
    </div></div>
    
    <div className="list-container">
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
    </div>
  )
}

export default App
