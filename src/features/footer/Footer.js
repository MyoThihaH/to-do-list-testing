import { Action } from "./Action";
import { StausFilter } from "./StatusFilter";
import { selectUncompleteCount } from "../todo/todoSlice";
import { useSelector } from "react-redux";
import { ColorFilter } from "./ColorFilter";

const UncompleteCount = () => {

    return(
        <div>
        <h3>Remaining To Do</h3>
        <label>{useSelector(selectUncompleteCount)}</label>
        </div>
    )
}

export const Footer = () => {
    return(
    <div>
       <Action/>
       <UncompleteCount/>
       <StausFilter/>
       <ColorFilter/>
    </div>
    )
}

