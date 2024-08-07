import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Orders() {
    let [listShow, setListShow] = useState([]);
    let getLst = () => {
        axios.get("http://localhost:3000/carts").then((res) => {
            setListShow(res.data);
        });
    };
    useEffect(() => {
        getLst();
    }, []);
    return (
        <>
            <div className="product-list mt-4">
                <div className="page-title">
                    <h1>Orders</h1>
                </div>
                <table className="table">
                    <thead className='thead-dark'>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Total</th>
                            <th scope="col">Date</th>
                            <th scope="col">Products</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listShow.map((e) => (
                            <tr key={e.id}>
                                <th scope="row">{e.id}</th>
                                <td>{e.user.username}</td>
                                <td>{e.total}</td>
                                <td>{e.date}</td>
                                <td>
                                    {
                                        e?.products[0] &&
                                        <table className="table-borderless" width={'100%'}>
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {e.products.map(product => (
                                                    <tr>
                                                        <td>{product.id}</td>
                                                        <td>{product.name}</td>
                                                        <td>{product.quantity}</td>
                                                        <td>{product.price}</td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}