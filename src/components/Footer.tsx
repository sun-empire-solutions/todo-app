import { useState } from "react";

const Footer= ()=>{
    const [state,setState]=useState('');
    type IFilter="all"|"active"|"completed";
        
    const clickAll=(value:IFilter)=>()=>{
            if(value!=state){
                setState(value);
            }else{
                setState("")
            }         
       } 
return (
    <div className="footer-page">
        <div className="footer">
            <p className={`${state==="all"?"selected":""}`}  onClick={clickAll("all")}>All</p>
            <p className={`${state==="active"?"selected":""}`}  onClick={clickAll("active")} >Active</p>
            <p className={`${state==="completed"?"selected":""}`}  onClick={clickAll("completed")}>Completed</p>           
        </div>
        <div className="footer-text">
            <p>Drag and drop to reorder list</p>
        </div>
    </div>

    );
};

export {Footer}; 