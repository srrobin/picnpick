"use client"
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { addItems } from '@/store/cartSlice';
import { Products } from '@/type';
import React from 'react';
import { useDispatch } from 'react-redux';

const AddCart = ({product}:{product:Products}) => {
    const { toast } = useToast()
    const dispatch = useDispatch();
    const addToCartHandelar = () => {
        toast({
            description: "Item Added To Cart",
            variant: "success",
          })
            dispatch(addItems(product));
       }
    return (
        <Button
            onClick={() => {addToCartHandelar()}}
            className='mt-6'>
            Add to Cart
        </Button>
    );
};

export default AddCart;