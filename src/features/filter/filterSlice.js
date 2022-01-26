export const statusFilters = {
    All: 'All',
    Complete: 'Complete',
    Active: 'Active',
}

export const colors = ['Green','Blue','Orange','Purple','Red'];


const initial_state = {
    status: statusFilters.All,
    colors: {Green:null,Blue:null,Orange:null,Purple:null,Red:null},
}



export const selectColors = (state) => {
    return state.filters.colors;
}


export const selectStatus = (state) => {
    return state.filters.status;
}

const filterReducer = (state = initial_state, action) => {

    switch(action.type) {
        case 'filter/statusChange' :{
            return {...state,status: action.payload.status}
        }
        case 'filter/colorChange' :{
            return {...state,colors:{...state.colors,...action.payload}}
        }

        default: return state;
    }
    
}

export default filterReducer;