import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeCarousel from '../../../components/user/carousel/HomeCarousel'
import axios from 'axios';
import Product from '../thumb/Product';

export default function Home() {
    let [listShow, setListShow] = useState([]);
    let getLst = () => {
        axios.get("http://localhost:3000/products").then((res) => {
            setListShow(res.data);
        });
    };
    useEffect(() => {
        getLst();
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
      let navigate = useNavigate();
    return (
        <>
            <HomeCarousel />
            <h2 className="title">Featured products</h2>
            <section className="row products-row">
                {listShow.map(product => (
                    <Product 
                    key={product.id} 
                    data={product}
                    />
                ))}
            </section>
        </>
    )
}
