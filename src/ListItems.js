import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const ListItems=(props)=>{
    const listItemStyle = {
        display: "flex",
        alignItems: "center",
      };
    
      const buttonStyle = {
        marginRight: "10px",
      };
     
      
      return (
        <>
          <div style={listItemStyle}>
            <button className="dltBtn" style={buttonStyle} onClick={()=>{
            props.onSelect(props.id)}}><DeleteIcon className="ic"/></button>
            <li style={{textDecoration:props.plain ? 'line-through' : 'none'}}>{props.text}</li>
          </div>
        </>
      );
    };
    
export default ListItems;