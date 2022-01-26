import { useDispatch, useSelector } from "react-redux";

import { statusFilters } from "../filter/filterSlice";
import { selectStatus } from "../filter/filterSlice";



const StatusButtons = () => {
    const dispatch = useDispatch();

    const handleOnclick = (event) => {
        
        dispatch({type: 'filter/statusChange', payload: {status: event.target.value }});
    }

    const currentStatus = useSelector(selectStatus);
    const status = Object.keys(statusFilters);
    const renderButtons = status.map((item) => {
      if(currentStatus == item){
        return <li><button key={item} className='selected' onClick={(e) => handleOnclick(e)} value={item}>{item}</button></li>
      } else {
        return <li><button key={item} onClick={(e) => handleOnclick(e)} value={item}>{item}</button></li>
      }
       
    }

  );
    return(renderButtons)
}

export const StausFilter = () => {
    

    return(
        <div>
        <h3>Staus Filter</h3>
        <StatusButtons/>
        </div>
    )
}
