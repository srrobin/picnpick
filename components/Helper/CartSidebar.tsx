import { addItems, CartItem, removeItem } from '@/store/cartSlice';
import Image from 'next/image';
import React from 'react';
import EmptyCart from "../../public/images/emptyCart.png"
import { Button } from '../ui/button';
import Link from 'next/link';
import { SheetClose } from '../ui/sheet';
import { useDispatch } from 'react-redux';
type props = {
    items: CartItem[]
 }
const CartSidebar = ({items}: props) => {
    const dispatch = useDispatch();

    const addCartHandler = (item:CartItem) => dispatch(addItems(item));
    const removeCartHandler = (id:number) => dispatch(removeItem({id}));
    return (
        <div>
           <div className='text-2xl font-bold text-center capitalize mt-6'>your cart</div>

           {items.length === 0 &&(
            <div className=' h-[80vh] w-full flex items-center justify-center flex-col'>
            <Image 
             src={EmptyCart}
             alt='empty cart'
             height={230}
             width={230}
             className='object-cover'
            />
            <h1 className='mt-6 capitalize text-2xl text-center'>your cart is empty !!!</h1>
            </div>
           )}
           {items.length>0 &&(
            <div className='mt-6'> 
               {items?.map((item) => (
                 <div className='border-b-2 p-6' key={item.id}>  
                     <Image 
                       src={item.image }
                       alt="product"
                       width={60}
                       height={60}
                     />
                     <div className='w-4/5 truncate'>{item.title}</div>
                     <div className=''> ${item.price * item.quantity}</div>
                     <div className='mb-3'>Quentity: {item.quantity}</div>

                     <Button 
                     className='capitalize mr-3'
                     onClick={() => {removeCartHandler(item.id)}}
                    >
                      remove
                    </Button>
                     <Button 
                     className='capitalize'
                     onClick={() => {addCartHandler(item)}}
                     >
                      add
                     </Button>
                 </div>
               ))}
               <SheetClose>
               <Link href ="/cart"> 
               <Button className='mt-4 w-full capitalize'>view all cart</Button>
               </Link> 
               </SheetClose>
            </div> 
           )}
        </div>
    );
};

export default CartSidebar;