import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
//import { selectAll, selectTodoById } from "./todoSlice";


/// This slice file is redux toolkit testing purpose only 



const statusAdapter = createEntityAdapter();

const initialState = statusAdapter.getInitialState({
    status: 'idle'
})

const {selectAll,selectById}= statusAdapter.getSelectors(state => state.loading);

export const fetchTodos = createAsyncThunk('todo/fetchTodos',async () => {
    const response = await fetch('https://enable-cors.org/');
    return response;
})

const loadingSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
       stopLoading : (state, action) => {
        state.status = 'complete';
       }
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTodos.fulfilled,(state, action) => {
           state.status = 'complete';
        })
    }
    

})






export const selectLoadingStatus = createSelector(
    state => state.loading,
    state => state.status,
)



export default loadingSlice.reducer;


export const { stopLoading } = loadingSlice.actions;




