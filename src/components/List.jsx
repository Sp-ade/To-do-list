import React from 'react'


const List = (props) => {
    return (
    
      <div className='lits'
      onClick={() => {
  
        props.onChecked(props.id);
      }} >
        
      <li>{props.item}</li>
      </div>
    )
  
  
}

export default List
