import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CartItem(props) {
  const {data, onChange, onDelete} = props;
  const [quantity, setQuantity] = useState(data?.quantity || 1);

  const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <tr>
      <td className="cartTable--column cartTable--column-image">
        <Link to="#">
        <img className="img-fluid" src={data?.thumb?.[0]} alt={data.name} /></Link>
        <input type="hidden" name="id" value={data.id} />
        <input type="hidden" name="thumb" value={data.thumb} />
      </td>
      <td>
        <Link to="#"><p className="h4">{data.name}</p></Link>
        <input type="hidden" name="name" value={data.name} />
      </td>
      <td className="options-column">
        <input type="number" min="0" name="quantity" 
        value={quantity}
        onChange={e=>{
          setQuantity(e.target.value);
          onChange({...data, quantity: Number(e.target.value)})
        }}
            class="form-control cart-quantity" 
            aria-label="2x Ratchet Tie Down Straps Retractable Ratchet Strap 340kg Car Trailer 3.6m 25mm Quantity" 
            />
      </td>
      <td className="text-right">
        <p className="h4">{formatPrice(Number(data.price))}</p>
      </td>
      <td className="text-right">
        <p className="h4">{formatPrice(Number(data.price) * quantity)}</p>
      </td>
      <td className="d-none d-sm-table-cell">
        <button onClick={onDelete} type='button' role="button" className="btn btn-block btn-danger" ><i class="far fa-trash-alt" aria-hidden="true"></i></button>
      </td>
    </tr>
  )
}

export default CartItem