
 export const getAllCat = async() => {
     const CatRequest = await fetch('https://fakestoreapi.com/products/categories');
     return CatRequest.json()
 }
 
 export const getProducts = async() => {
       const Products = await fetch('https://fakestoreapi.com/products');
       return Products.json();
 }
 
 export const singleProducts = async(id: string) => {
       const singleProducts = await fetch(`https://fakestoreapi.com/products/${id}`);
       return singleProducts.json();
 }
 
 export const relatedProducts = async(category: string) => {
       const relatedProducts = await fetch(`https://fakestoreapi.com/products/category/${category}`);
       return relatedProducts.json();
 }