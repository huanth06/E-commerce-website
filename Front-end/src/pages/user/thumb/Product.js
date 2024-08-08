import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik'
import axios from 'axios';
import { MyContext } from '../../../MyContext';
import { setLsQty } from '../../../utils/hepls';

export default function Product(props) {
    const [ctx, setCtx] = useContext(MyContext);
    const { data } = props;
    const formatPrice = (price) => {
        return price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    };

    const formatProduct = (current, newData) => {
        if(!current){
            return [newData]
        }
        const checkHasId = current?.some(item => item.id === newData.id);
        return checkHasId ? current?.map(item => {
            if(newData.id === item.id){
                return {...item, quantity: Number(item.quantity) + Number(newData.quantity)}
            }
            return item;
        }) : [...current, newData];
    }

    const addToCart = () => {
        if(!ctx.user){
            return alert("Please log in to make a purchase.")
        }
        // Tạo một bản sao mới của cartProducts và thêm newProduct vào đó
        const updatedCartProducts = formatProduct(ctx?.cartProducts, {
            id: data.id,
            name: data.name,
            quantity: 1,
            price: data.price,
            thumb: data.images
        });
        const newQty = setLsQty(updatedCartProducts);
        if (!ctx?.idCart) {
            // Cập nhật lại giỏ hàng thông qua API
            axios.post("http://localhost:3000/carts", {
                user: { username: ctx.user },
                products: updatedCartProducts,
            }).then((res) => {
                // Xử lý khi cập nhật thành công
                alert("Item has been added to your cart.");
                // Cập nhật lại state cartProducts sau khi thành công
                setCtx({...ctx, qtyCart: newQty, cartProducts: updatedCartProducts, idCart: res?.data?.id})
            }).catch((error) => {
                // Xử lý khi có lỗi
                console.error("Error adding item to cart:", error);
            });
        }else{
            // Cập nhật lại giỏ hàng thông qua API
            axios.put("http://localhost:3000/carts/" + ctx?.idCart, {
                user: { username: ctx.user },
                products: updatedCartProducts,
            }).then((res) => {
                // Xử lý khi cập nhật thành công
                alert("Item has been added to your cart.");
                // Cập nhật lại state cartProducts sau khi thành công
                setCtx({...ctx, qtyCart: newQty, cartProducts: updatedCartProducts})
            }).catch((error) => {
                // Xử lý khi có lỗi
                console.error("Error adding item to cart:", error);
            });
        }
    };

    return (
        <>
            {data && ( // Kiểm tra data trước khi render nội dung
                <article className="col-8 col-sm-6 col-lg-4 col-xl-3 pb-2">
                    <div className="card thumbnail card-body">
                        <Link to={'/product/' + data.id} className="thumbnail-image pb-2">
                            <img src={data.images && data.images[0]} className="product-image img-fluid" alt={data.name} />
                        </Link>
                        <p className="card-title h4 text-center">
                            <Link to={'/product/' + data.id}>{data.name}</Link>
                        </p>
                        <p className="price text-center">
                            <span>{formatPrice(Number(data.price))}</span>
                        </p>
                        <button className="addtocart btn-primary btn btn-block btn-loads" onClick={addToCart}>Add to Cart</button>
                    </div>
                </article>
            )}
        </>
    )
}
