// import { useSelector } from "react-redux";



const { createSlice, nanoid } = require("@reduxjs/toolkit");

const Slice=createSlice({name:"AddProduct",initialState:{
    addProduct:[]
},
  reducers:{
     AddProduct:(s,a)=>{
     
        const itempresent=s.addProduct.find((item)=>{
          
          return item.item.name ==a.payload.name
        });
        console.log("this is item present",itempresent);
        const newid=s.addProduct.map((item)=>{
          return item.newId; 
        });
        //unique item 
      const id=newid.join("");
       const newId=id.slice(0,7);

        if(itempresent){
       itempresent.item.addItem +=1;
       itempresent.item.rupess=itempresent.item.addItem * a.payload.rupess
          const data={
            newId:newId,
            item:a.payload
         }
       
         s.addProduct.push(data);
        }else{
        
       
          const data={
            item:a.payload,
            newId:nanoid(7)}
           s.addProduct.push(data);
        }
      
     
     
     },
     RemoveProduct:(s,a)=>{
        
     }
  }
});
export const {AddProduct,RemoveProduct}=Slice.actions;
export default Slice.reducer;