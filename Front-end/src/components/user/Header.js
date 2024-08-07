import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { MyContext } from '../../MyContext';
import Search from './search/Search';

export default function Header() {
    let [qtyCart, setQtyCart] = useState(0);
    let [cates, setCates] = useState([]);
    let [ctx, setCtx] = useContext(MyContext);

    useEffect(() => {
        axios.get("http://localhost:3000/carts?username=" + ctx.user).then((res) => {
            let data = res.data;
            let products = [];
            data.map(item => {
                products = [...products, ...item.products]
            });
            if (ctx.user) {
                let newQty = 0;
                products.reduce((accument, currentValue) => {
                    newQty = accument + currentValue.quantity;
                    return newQty;
                }, 0)
                setQtyCart(newQty);
            }
        });
        axios.get("http://localhost:3000/categories").then((res) => {
            setCates(res.data);
        });
    }, [ctx.user]);

    useEffect(() => {
        axios.get("http://localhost:3000/categories").then((res) => {
            setCates(res.data);
        });
    }, []);
    return (
        <>
            <header className="wrapper-header" aria-label="Header container">
                <div className="container py-4">
                    <div className="row align-items-center">
                        <div className="col-7 col-sm-4 wrapper-logo text-sm-left">
                            <Link to={'/'} title="OCAM">
                                <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/case-study-1%2Flogo-main.webp?alt=media&token=056c99fb-88dc-41c6-8b77-2dc0fc204b11" alt="Triangle logo" />
                            </Link>
                        </div>
                        <div className="col-5 col-sm-8 d-block d-md-none text-right">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainMenu" aria-controls="navbarMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
                            </button>
                            <Link className="navbar-toggler d-sm-inline-block d-md-none" to={'/_mycart'} aria-label="Shopping cart">
                                <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                                <span className="badge badge-pill badge-secondary" rel="a2c_item_count">{ctx.qtyCart}</span>
                            </Link>
                        </div>
                        <div className="d-none d-md-block col-12 col-sm-8 col-md-4 col-lg-4">
                            <Search />
                        </div>
                        <div className="d-none d-md-block col-md-4 col-lg-4 text-right">
                            <div id="header-cart" className="btn-group" role="group">
                                <Link to="/_mycart" className="btn btn-outline-secondary" id="cartcontentsheader">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> <span className="d-none d-lg-inline">Shopping Cart</span> - <span rel="a2c_item_count">{ctx?.qtyCart === undefined || ctx?.qtyCart===0 ? qtyCart : ctx?.qtyCart}</span> Items
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-md navbar-light bg-light mt-0 mb-4 pt-sm-3 pt-md-2">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarMainMenu">
                            <form className="d-block d-md-none" name="productsearch" method="get" action="/" role="search" aria-label="Product search">
                                <input type="hidden" name="rf" value="kw" />
                                <div className="input-group">
                                    <input className="form-control ajax_search" value="" id="name_search-xs" autocomplete="off" name="kw" type="search" aria-label="Input search" nsearch-init="yes" nsearch-id="1" />
                                    <div className="input-group-append">
                                        <button type="submit" value="Search" className="btn btn-outline-secondary" aria-label="Search site"><i className="fa fa-search" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </form>
                            <ul className="navbar-nav mr-auto">
                                {cates.map(category => (
                                    <li key={category.id} className="nav-item ">
                                        <Link to={'/category/' + category.name + '/' + category.id} className="nav-link ">{category.name}</Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className="navbar-nav navbar-right" role="navigation" aria-label="Accounts menu">
                                <li className="nav-item dropdown">
                                    <Link to={ctx.user ? '/_myacct' : '/_myacct/login-register'} className="nav-link" ><i className="fa fa-user"></i> <span className="visible-lg visible-inline-lg">{ctx.user != '' ? ctx.user : 'My Account'}</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
