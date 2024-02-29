import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './Stateprovider'

function CheckoutProduct({ id, image, title, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    function removeFromBasket() {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  }
  return (
    //Checkout image and info for the checkout page
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image}/>

        <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_title'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct_rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}      
            </div>
                    <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct