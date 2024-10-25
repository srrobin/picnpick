"use client"

import { RootState } from '@/store/store';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
// import EmptyCart from "../../public/images/emptyCart.png"
import { Button } from '@/components/ui/button';
import { addItems, CartItem, removeItem } from '@/store/cartSlice';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import EmptyCart from "../../../public/images/emptyCart.png";

const Cart = () => {
    const dispatch = useDispatch();

    const addCartHandler = (item:CartItem) => dispatch(addItems(item));
    const removeCartHandler = (id:number) => dispatch(removeItem({id}));
    const {user} = useUser(); 



    const items = useSelector((state: RootState) => state.cart.items)
    const totalQuantity = items.reduce((total, item) => total + item.quantity,0);
    const totalPrice = items.reduce((total,item) => total + item.price * item.quantity,0).toFixed(2)
    const vat = (+totalPrice * .15).toFixed(2)
    const totalPricevat = (+totalPrice+ +vat).toFixed(2)
    console.log("🚀 ~ Cart ~ totalPricevat:", totalQuantity,vat,totalPricevat)
    return (
        <div className='mt-8'>
            {items.length === 0 && (
                <div className='h-[80vh] w-full flex items-center justify-center flex-col'>
                      <Image 
                        src={EmptyCart}
                        alt='no-cart'
                        height={250}
                        width={250}
                      />
                      <div className='text-2xl text-red-400 font-bold italic'>
                        your cart is empty
                      </div>
                      <Link href="/">
                          <Button className='mt-3 text-base uppercase'>shop now</Button>
                      </Link>

                </div>
            )}

            {items.length > 0 && (
                <div className='w-[95%] md:w-4/5 mx-auto mt-8   grid xl:grid-cols-6 gap-16'>
                   <div className='col-span-4'>
                       <div className='p-4 bg-emerald-600 text-white text-center capitalize text-2xl font-bold'>you have {totalQuantity} items</div>
                       {items?.map((item) => (
                       <div key={item.id} className = 'flex  border-b-[1.5px] border-b-slate-100 py-4 space-x-5'>
                           <Image 
                            src={item.image}
                            alt='no-cart'
                            height={90}
                            width={90}
                           />
                           <div className=''>
                            <h1>{item.title}</h1>
                            <h1>category: {item.category}</h1>
                            <h1 className='font-bold text-3xl'> $ {item.price}</h1>
                            <h1>Quantity : {item.quantity}</h1>
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
                       </div>
                       ))}
                   </div>
                   <div className='col-span-2'> 
                        <div className=' sticky top-[15vh] bg-emerald-900 text-white p-4'> 
                              <h1 className='capitalize text-2xl font-bold border-b-2 border-b-slate-200'>summary</h1>

                              <h1 className='text-xl font-bold py-3'>Subtotal: $ {totalPrice}</h1>
                              <h1 className='text-xl font-bold py-3'>vat: $ {vat}</h1>
                              <h1 className='text-xl font-bold py-3'>shipping: free</h1>
                              <h1 className='text-xl font-bold py-3'>total: $ {totalPricevat}</h1>

                              {!user && (
                              <Link href="/sign-in"> 
                              <Button className=' w-full bg-yellow-600 text-blue-900 text-xl font-bold'>Sign in to Checkout</Button>
                             </Link>
                              )}
                              {user && (
                              
                               <Button className=' w-full bg-yellow-600 text-blue-900 text-xl font-bold'>PayMent</Button>
                              
                              )}
                        </div>
                   </div>
                </div>
            )}
        </div>
    );
};

export default Cart;