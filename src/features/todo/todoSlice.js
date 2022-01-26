

const initial_state = [
    {
        id: 1,
        complete: false,
        decription: "To do React",
        color: ""
    },
    {
        id: 2,
        complete: false,
        decription: "To do Redux",
        color: ""
    }
];

export const generateId = (state)=> {
    const arr = state.todos;
    return arr[arr.length-1]?.id??0
    
}





export const selectUncompleteCount = (state) => {
    return state.todos.filter((item)=>!item.complete).length;
}

export const selectUncomplete = (state) => {
    const colors = selectFilterColor(state);
    if(colors.length > 0) {
       const incompletes = state.todos.filter((item)=>!item.complete);

        return incompletes.filter((item)=>colors.includes(item.color));
      }

    return state.todos.filter((item)=>!item.complete);
}


export const selectUncompleteId = (state) => {
    const todoUncomplete = selectUncomplete(state);
    return todoUncomplete.map(({id})=>id)
}


export const selectComplete = (state) => {
    const colors = selectFilterColor(state);
    if(colors > 0) {
        const completes = state.todos.filter((item)=>item.complete);
 
         return completes.filter((item)=>colors.includes(item.color));
       }

   return state.todos.filter((item)=> item.complete);
}

export const selectCompleteId = (state) => {
    const todoComplete = selectComplete(state);
   return todoComplete.map(({id}) => id)
}



export const selectAll = (state) => {
   // console.log(selectFilterColor(state));
    const colors = selectFilterColor(state);
    if(colors.length > 0) {
        
      return state.todos.filter((item)=>colors.includes(item.color));
    }
 return state.todos;

}

export const selectAllId = (state) => {
    
    const todos = selectAll(state);
    return todos.map(({id}) => id);

}


const selectFilterColor = (state) => {
     const colors = [];
     for(let [name,value] of Object.entries(state.filters.colors)){
         if(value){
             colors.push(name);
         }
     }
     return colors;

}



export const selectTodoId = (state) => {
    if(state.filters.status === "All") {
        return selectAllId(state);
    } else if(state.filters.status === "Complete") {
        return selectCompleteId(state);
    } else  {
        return selectUncompleteId(state);
    }
}




export const selectTodoById = (state, id) => {
    return state.todos.filter((todo) => todo.id === id)
    
}



const todoReducer = (state = initial_state, action) => {
    switch(action.type) {
        case 'todo/Add': {
            return (
                [
                    ...state,
                    action.payload,
                ]
            )
       
        }
        case 'todo/complete': {
          return state.map((item) => {
               if(item.id == action.payload.id) {
                   return {...item,complete:action.payload.complete}
               }
               else {
                   return item
               }
           });
        }
        case 'todo/delete': {
            return state.filter((item)=> item.id!=action.payload.id)
        }

        case 'todo/allCompleted': {
            return state.map((item)=> {
                return {...item,complete: true}
            })
        }

        case 'todo/clearCompleted': {
            return state.filter((item) => !item.complete)
        }

        case 'todo/select': {
            return state.map((item)=> {
                 if(item.id == action.payload.id) {
                     return {...item,color:action.payload.color};
                 } else {
                     return {...item};
                 }
            })
        }

        case 'todo/load': {
            return {...action.payload}
        }

        default: return state;
    }
}

export default todoReducer;
