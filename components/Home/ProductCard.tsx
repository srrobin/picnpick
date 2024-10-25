"use client"
import { addItems } from '@/store/cartSlice';
import { Products } from '@/type';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';
import { IoBagHandle } from "react-icons/io5";


type Props = {
   item: Products
}

const ProductCard = ({item}: Props) => {
    const { toast } = useToast();
   const dispatch = useDispatch();
   const addToCartHandelar = (product: Products) => {
    toast({
        description: "Item Added To Cart",
        variant: "success",
      })
        dispatch(addItems(product));

   }
    
    return (
        <div className='p-4'>
            <div className='w-[200px] h-[150px]'>
                <Image 
                  src={item.image}
                  alt={item.title}
                  height={100}
                  width={100}
                  className='h-[80%] w-[80%] object-contain'
                />
                </div>
                <p className='text-green-700'>{item.category}</p>
                <Link href={`/product/product-details/${item.id}`}> 
                <h2 className='
                text-cyan-700 text-lg font-bold mt-2 hover:underline
                hover:text-red-800 transition-all sm:w-full
                sm:truncate 
                '>{item.title}</h2>
                </Link>
                <div className='flex items-center space-x-3 mt-2'>
                    <p className='
                    line-through text-gray-500
                    '>{`$${(item.price + 20).toFixed(2)}`}</p>
                    <p className='
                    font-bold text-base text-black
                    '>${item.price}</p>
                </div>

                <div className='mt-4 flex space-x-3'>
                    <Button 
                    onClick={() => {
                        addToCartHandelar(item);
                    }}
                    className="bg-green-700 w-full flex items-center text-base"
                    >
                    <IoBagHandle  size={20} style={{marginRight:"10px"}}/>
                      Add to Car
                    </Button>
                    
                </div>
            
        </div>
    );
};

export default ProductCard;