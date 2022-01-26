import { useDispatch, useSelector } from "react-redux";
import { colors } from './../filter/filterSlice';

import { selectTodoById } from "./todoSlice";


export const ToDo = props => {
  const id  = props.todoId;
  const [{complete, decription, color}] =  useSelector((state) => selectTodoById(state,id));
  const colorsOption = colors.map(items => <option key={items}>{ items }</option>);
  const dispatch = useDispatch();
  
  

  const handleDeleteOnclick = () => {
    dispatch({type: 'todo/delete', payload: {id:id}})
  }

  const handleColorChange = (e) => {
    console.log(e.target.value);
    dispatch({type: 'todo/select', payload: {color:e.target.value,id:id}})
  }


  const handleCompleteChanged = () => {
    console.log(decription)
    dispatch({type: 'todo/complete', payload: {id:id,complete:!complete}});
  }

    return(
        <li>
             <div>
                <input 
                    type="checkbox"
                    checked={complete}
                    onChange={()=>handleCompleteChanged()}
                />
            </div>
            <div>
                {id} | {decription} 
            </div>
           
            <div>
                <select value={color} onChange={handleColorChange}>
                    <option>{""}</option>
                    {colorsOption}
                </select>
            </div>

            <div>
                <button onClick={()=>handleDeleteOnclick()}> X </button>
            </div>
        </li>
    )
}