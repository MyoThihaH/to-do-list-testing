import { selectAll, selectComplete, selectTodoId } from "./todoSlice";
import { selectLoadingStatus } from "./loadingSlice";
import { ToDo } from "./ToDo";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { stopLoading } from "./loadingSlice";

const renderList = listIds => {

   const todoArr =  listIds.map(id =>
     
        <ToDo key={id} todoId={id}/>
    );
    
   return(
      todoArr
   )
   
}



export const TodoList = props => {
   const dispatch = useDispatch();
   
   const listIds = useSelector(selectTodoId, shallowEqual);
   
   const loadingStatus = useSelector(selectLoadingStatus);

   const handleOnclick = () => {
      dispatch(stopLoading())
   }
   //setTimeout(()=>dispatch(stopLoading('complete')), 5000)

   if(loadingStatus == 'idle') {
      return(<div>Loading............</div>)
   }

    return(
        <div>
        <ul>
       { renderList(listIds) }
        </ul>
        <button onClick={handleOnclick}>Click</button>
        {console.log(loadingStatus)}
        </div>

    )
}