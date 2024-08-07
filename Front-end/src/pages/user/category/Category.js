import axios from 'axios';
import React,{useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'

export default function Category() {
    const {categoryName} = useParams();
    const {categoryID} = useParams();
    const [listShow, setListShow] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/products?category_id="+categoryID).then((res) => {
        setListShow(res?.data);
        });
    },[categoryID])
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
        <h1 className="text-capitalize">{categoryName}</h1>
        <hr />
            <section className="row products-row">
                {listShow.map(product => (
                    <article key={product.id} className="col-8 col-sm-6 col-lg-4 col-xl-3 pb-2" >
                        <div className="card thumbnail card-body">
                            <Link to={'/product/'+product.id} className="thumbnail-image pb-2" >
                                <img src={product.images[0]} className="product-image img-fluid" alt={product.name} />
                            </Link>
                            <p className="card-title h4 text-center" >
                                <Link to={'/product/'+product.id}>{product.name}</Link>
                                </p>
                            <p className="price text-center" >
                                <span>{formatPrice(num(product.price))}</span>
                            </p>
                        </div>
                    </article>
                ))}
            </section>
    </>
  )
}
