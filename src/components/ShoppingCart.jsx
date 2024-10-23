
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';


export default function ShoppingCart(props){
    return (
        <div className='shoppingCart'>
            <div className="cart">
                <Icon path={mdiCartOutline} size={1} />
                <div className="cartNumber">{props.cartNumber}</div>
            </div>
            <button className='checkOut'>Checkout</button>
        </div>
)
}