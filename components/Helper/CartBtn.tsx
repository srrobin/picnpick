"use client"

import { RootState } from '@/store/store';
import { ShoppingBagIcon } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import CartSidebar from './CartSidebar';

const CartBtn = () => {
   const items = useSelector((state: RootState) => state.cart.items)

    const totalQuantity = items.reduce((total, item) => total + item.quantity
    ,0);
    console.log("🚀 ~ CartBtn ~ totalQuantity:", totalQuantity)

    return (
        <Sheet>
            <SheetTrigger>
                <div className='relative'>
                <span className='
                absolute 
                h-6 w-6
                bg-red-500 
                -top-4
                left-4
                text-center 
                rounded-full

                '>
                {totalQuantity}
                    </span>
                    <ShoppingBagIcon size={25} cursor={"pointer"} />
                </div>
            </SheetTrigger>   
            <SheetContent className='overflow-auto h-full'>
                <CartSidebar items={items}/>
            </SheetContent>
        </Sheet>
    );
};

export default CartBtn;