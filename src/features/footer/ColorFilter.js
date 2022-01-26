import { colors } from "../filter/filterSlice";
import { useDispatch,useSelector } from "react-redux";
import { selectColors } from "../filter/filterSlice";


export const ColorFilter = () => {
    const dispatch = useDispatch();
    const filterColors = useSelector(selectColors);
    
    const ColorCheckBox = (props) => {
        const color = props.color;
        
        const handleCompleteColor = () => {
            
            dispatch({type:'filter/colorChange', payload:{[color]:!props.checked}});
            
            
        }
        return (
            <li>
                <label>
                <input
                    type="checkbox"
                    checked= {props.checked}
                    onChange={handleCompleteColor}
                    color={color}
                />
                <span style={{backgroundColor:color}} className="color-block"></span>
                <span>{color}</span>
                </label>
            </li>
        )    
    }

    const renderCheckBox = colors.map((item) => {
       
        const check = filterColors[item];
        
           return( 
               <ColorCheckBox checked={check} color={item}/>
           )
        });

   
    return (
        <div>
        <h3>Filter By Colors</h3>
        <ul>{renderCheckBox}</ul>
        </div>

    )
}

