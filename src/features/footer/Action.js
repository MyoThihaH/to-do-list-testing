import { useDispatch } from "react-redux";



const MarkAllCompleted = () => {

const dispatch = useDispatch();
   const handleOnclick = () => {
       dispatch({type: 'todo/allCompleted'})
   } 
    return(
        <button onClick={() => handleOnclick()}>Mark All Completed</button>
    )
}

const ClearCompleted = () => {
    const dispatch = useDispatch();
    const handleOnclick = () => {
        dispatch({type:'todo/clearCompleted'});
    }
    return(
        <button onClick={() => handleOnclick()}>Clear Completed</button>
    )
}

export const Action = () => {

    return(
        <div>
        <h3>Actions</h3>
        <MarkAllCompleted/>
        <ClearCompleted/>
        
        </div>
    )
}

