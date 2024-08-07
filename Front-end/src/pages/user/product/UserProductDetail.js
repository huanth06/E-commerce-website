import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MainImage from './MainImage';
import axios from 'axios';
import { MyContext } from '../../../MyContext';
export default function UserProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState();
  let [ctx, setCtx] = useContext(MyContext);
  useEffect(() => {
    axios.get("http://localhost:3000/products/" + id).then((res) => {
      setProduct(res?.data);
      // setCtx({...ctx, product:res.data})
    });
  }, []);
  const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };
  const num = str => {
    return parseFloat(str);
  }
  return (
    <>
      <div className='row'>
        <MainImage product={product} />
        <section className='col-12 col-lg-7'>
          <div className='row'>
            <div className='wrapper-product-title col-sm-8'>
              <h1>{product?.name}</h1>
            </div>
            <div className='wrapper-pricing col-sm-4'>
              <div className='h1'>{formatPrice(num(product?.price))}</div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
