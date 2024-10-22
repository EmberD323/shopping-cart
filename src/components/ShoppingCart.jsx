
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';


export default function ShoppingCart(props){
    return (
        <>
            <Icon path={mdiCartOutline} size={1} />
            <div className="cartNumber">{props.cartNumber}</div>
        </>
)
}