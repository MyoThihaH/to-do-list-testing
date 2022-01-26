import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";

import { generateId } from "../todo/todoSlice";
import { fetchData } from "../todo/todoSlice";
export const Header = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState('');
    const id = useSelector(generateId);

   
    
    const changeHandler = (e) => {
        setText(e.target.value);
    }
    
    

    const handleKeyDown =  (e) => {
        // If the user pressed the Enter key:
        const trimmedText = text.trim()
        if (e.which === 13 && trimmedText) {
          // Create and dispatch the thunk function itself
          dispatch({type:'todo/Add',payload:{id:id+1,complete:false,decription:text,color:""}});
          // And clear out the text input
          setText('')
          
        }
      }

    return(
    <div>
        <br/>
    <input type="text" value={text} onChange={changeHandler} onKeyDown={handleKeyDown}/>
    </div>
    )
}

