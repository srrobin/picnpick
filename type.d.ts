export type Products = {
    id:number,
    title:string,
    price:number,
    category:string,
    description:string,
    rating:{
        count : number
        rate :  number
    }
    image:string
}