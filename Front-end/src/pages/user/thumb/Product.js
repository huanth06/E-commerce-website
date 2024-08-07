import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik'
import axios from 'axios';
import { MyContext } from '../../../MyContext';
import { setLsQty } from '../../../utils/hepls';

export default function Product(props) {
    const [ctx, setCtx] = useContext(MyContext);
    const { data } = props;
    const [idCart, setIdCart] = useState();
    const [cartProducts, setCartProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        id: "",
        name: "",
        quantity: "",
        price: "",
        thumb: ""
    }); // Khởi tạo newProduct là null ban đầu
    const formatPrice = (price) => {
        return price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    };
    useEffect(() => {
        // Lay ra san pham voi user dang nhap
        axios.get("http://localhost:3000/carts?username=" + ctx.user).then((res) => {
            setCartProducts(res?.data?.[0]?.products);
            setIdCart(res?.data?.[0]?.id)
        });
    }, [ctx.user]);

    useEffect(() => {
        console.log(data)
        const index = cartProducts.findIndex(c => c.id === data.id);
        if (index !== -1) {
            let newProductQty = data.quantity + 1;
            setNewProduct({
                quantity: newProductQty
            });
        } else {
            setNewProduct({
                id: data.id,
                name: data.name,
                quantity: 1,
                price: data.price,
                thumb: data.images
            });
        }
    }, [data]);

    const formatProduct = (current, newData) => {
        const checkHasId = current?.some(item => item.id === newData.id);
        return checkHasId ? current?.map(item => {
            if(newData.id === item.id){
                return {...item, quantity: Number(item.quantity) + Number(newData.quantity)}
            }
            return item;
        }) : [...current, newData];
    }

    const addToCart = () => {
        if (!idCart) return;

        // Kiểm tra nếu cartProducts không phải là mảng, hoặc là mảng rỗng
        if (cartProducts?.length === 0) {
            // Xử lý khi cartProducts không phải là mảng, có thể là trường hợp đầu tiên
            // khi chưa có sản phẩm nào trong giỏ hàng
            setCartProducts([newProduct]); // Khởi tạo cartProducts là một mảng mới chứa newProduct
            return;
        }

        // Tạo một bản sao mới của cartProducts và thêm newProduct vào đó
        const updatedCartProducts = formatProduct(cartProducts, newProduct);
        const newQty = setLsQty(updatedCartProducts);
        setCtx({...ctx, qtyCart: newQty})
        
        // Cập nhật lại giỏ hàng thông qua API
        axios.put("http://localhost:3000/carts/" + idCart, {
            user: { username: ctx.user },
            products: updatedCartProducts,
        }).then((res) => {
            // Xử lý khi cập nhật thành công
            alert("Item has been added to your cart.");
            // Cập nhật lại state cartProducts sau khi thành công
            setCartProducts(updatedCartProducts);
        }).catch((error) => {
            // Xử lý khi có lỗi
            console.error("Error adding item to cart:", error);
        });
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
