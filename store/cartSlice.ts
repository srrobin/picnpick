import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export  interface CartItem {
    id:number,
    title:string,
    price:number,
    category:string,
    description:string,
    image:string,
    quantity: number
}

interface CartState{
    items: CartItem[];
}
const initialState: CartState = {
    items:[]
} 

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
    //   state.authState = action.payload;
    },
  },
});

const cartSlice = createSlice ({ 
    name: "cart",
    initialState,
    reducers: {
        addItems: (state,action: PayloadAction<Omit<CartItem, "quantity">>) => {
           const existingItems = state.items.find((item) => 
           item.id === action.payload.id   
        );
            if(existingItems){
                existingItems.quantity += 1;
            } else {
                state.items.push({...action.payload , quantity: 1})
            }
        },
        removeItem:(state,action: PayloadAction<{id:number}>) => {
          const existItem = state.items.find((item) => 
                       item.id === action.payload.id
                 )
            if(existItem){
              if(existItem.quantity > 1){
                existItem. quantity -= 1
              }else{
                state.items = state.items.filter((item) => 
                  item.id !== action.payload.id
                )
              }
            }     
        },
        clearItem:(state) => {
         state.items = [];
        }

    }
})


export const { addItems, removeItem, clearItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;