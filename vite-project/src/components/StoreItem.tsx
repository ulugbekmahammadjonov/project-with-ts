import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utileties/formatCurrency'

type StoreItemProps={
    id:number,
    name:string,
    price:number,
    imgUrl:string
}
const StoreItem = ({id,name,price,imgUrl}: StoreItemProps) => {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()
    const quantity = getItemQuantity(id)
  return (
    <Card className='card-wrapper h-100 rounded-5'>
        <div className='card-image--wrapper'>
            <Card.Img className='card-img h-100' variant='top' src={imgUrl} style={{objectFit:"cover", objectPosition:"center"}}/>

        </div>
    </Card>
  )
}

export default StoreItem