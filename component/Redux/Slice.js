const { createSlice, nanoid } = require("@reduxjs/toolkit");
const initialState={
    UserAddCard:[]
}
export const Slice =createSlice({
    name:"AddCard",
    initialState,
    reducers:{
           Add_To_Card:(state,action)=>{
                    const actulalitem=action.payload 
               state.UserAddCard.push(actulalitem);
           },
           Remove_To_Card:(state,action)=>{
            const Aitem=action.payload
            
            const ExpData=state.UserAddCard.filter((ele)=>{
                  return ele.name!==Aitem.name
            })
            state.UserAddCard=ExpData;

        }
    }
})
export const {Add_To_Card,Remove_To_Card}=Slice.actions;
export default Slice.reducer