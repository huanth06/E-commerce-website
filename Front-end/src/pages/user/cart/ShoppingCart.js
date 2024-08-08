import axios from 'axios';
import React, { useEffect, useContext, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../../MyContext';
import CartItem from './CartItem';
import { setLsQty } from '../../../utils/hepls';

export default function ShoppingCart() {
  const [ctx, setCtx] = useContext(MyContext);
  const [productCart, setProudctCart] = useState([]);
  const [idCart, setIdCart] = useState()
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState()

  const handleTotal = (products) => {
    let result = 0;
    products?.map(item => {
      result += (Number(item.quantity) * Number(item.price))
    })

    setTotal(result)
  }

  useEffect(() => {
    // Lay ra san pham voi user dang nhap
    axios.get("http://localhost:3000/carts?username=" + ctx.user).then((res) => {
      setIdCart(res?.data?.[0]?.id)
      let products = [];
      res.data.map(item => {
        products = [...products, ...item.products]
      });
      setProudctCart(products);
    });
  }, [ctx.user]);

  useEffect(() => {
    // khi productCart thay doi: khi goi get cart thanh cong, va thay doi quanity input
    if (productCart.length > 0) {
      handleTotal(productCart);
    } else {
      setTotal(0)
    }
  }, [productCart])

  const handleUpadteMyChange = () => {
    if (!idCart) return
    // Cap nhat lai cart call API update order voi products: productCart
    axios.put("http://localhost:3000/carts/" + idCart, {
      user: { username: ctx.user },
      total: total,
      products: productCart
    }).then((res) => {
      //API cap nhat thanh cong co the xu ly o duoi day
      alert("Update successful.")
    });
    const newQty = setLsQty(productCart);
    setCtx({ ...ctx, qtyCart: newQty, cartProducts: productCart})
  }

  const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const num = str => {
    return parseFloat(str);
  }

  const cartUpdate = () => {

  }
  return (
    <>
      <div className='col-12'>
        <div className='page-header'>
          <h1>Shopping Cart</h1>
        </div>
        <hr />
        <div className='row btn-stack'>
          <div className="col-12 col-md-8 col-lg-9">
            <button className="btn btn-outline-secondary" type="button" role="link" title="Create Quote From Cart"> <i class="fa fa-list-alt" aria-hidden="true"></i> Create Quote From Cart</button>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <button className="btn btn-success btn-lg btn-block" type="button" role="link" title="Checkout Now"><i class="fa fa-shopping-cart icon-white" aria-hidden="true"></i> Checkout Now</button>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-12'>
            <form>
              <table className='table table-bordered cartTable'>
                <thead>
                  <tr>
                    <th colspan="2" className="cartTable--heading cartTable--heading-item"> Item Description </th>
                    <th className="cartTable--heading cartTable--heading-quantity">Quantity </th>
                    <th className="cartTable--heading cartTable--heading-price">Price</th>
                    <th className="cartTable--heading cartTable--heading-price">Total</th>
                    <th className="cartTable--heading cartTable--heading-remove d-none d-sm-table-cell">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {productCart.map((product, index) => (
                    <CartItem
                      key={product.id}
                      data={product}
                      onDelete={() => setProudctCart((prev) => prev.filter(item => item.id !== product.id))}
                      onChange={(val) => setProudctCart((prev) => {
                        const newData = [...prev];
                        newData[index] = val;
                        return newData;
                      })} />
                  ))}
                </tbody>
              </table>
            </form>
          </div>
        </div>
        <hr />
        <div className="row btn-stack">
          <div className="col-12 col-md-4 col-lg-3">
            <Link to={'/'}
              type="button" role="link"
              className="btn btn-outline-secondary btn-block"
              title="Continue shopping"><i class="fa fa-reply"
                aria-hidden="true"></i> Continue Shopping
            </Link>
          </div>
          <div className="col-12 col-md-4 offset-md-4 col-lg-3 offset-lg-6">
            <button type="button" className="btn btn-primary btn-block" title="Update changes" onClick={() => handleUpadteMyChange()}><i class="fa fa-sync" aria-hidden="true"></i> Update My Changes</button>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-12 mb-2 col-lg-3'></div>
          <div className='col-12 mb-2 col-lg-3'></div>
          <div className='col-12 col-lg-6'>
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row"><b>Shopping Cart Total</b></th>
                  <td class="text-right"><p class="h3">{formatPrice(total)}</p></td>
                </tr>
              </tbody></table>
            <form method="post" name="paypal" action="https://rainstormstudio.neto.com.au/_mycart?fn=3rdparty&amp;ts=1721214277336418">

              <div class="row btn-stack">
                <div class="col-12 col-lg-6 text-center text-md-left mb-1">

                </div>
                <div class="col-12 col-lg-6 text-center mb-1">
                  <button class="btn btn-success btn-lg btn-block" role="link" type="button" title="Checkout now">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i> Checkout Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
