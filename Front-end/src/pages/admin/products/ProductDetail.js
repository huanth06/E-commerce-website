import { useLocation, Link, useParams } from "react-router-dom"

export default function ProductDetail() {
    let data = useLocation();
    let product = data.state.obj;
    return (
        <>
            <div className="product-detail mt-4">
                <div className="page-title">
                    <h1>Product "{product.name}"</h1>
                    <button type="" className="btn btn-light"><Link to={'/_cpanel/products'}>Back To List</Link></button>
                </div>
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="row">ID</th>
                            <td>{product.id}</td>
                        </tr>
                        <tr>
                            <th scope="row">Name</th>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <th scope="row">Price</th>
                            <td>{product.price}</td>
                        </tr>
                        <tr>
                            <th scope="row">Quantity</th>
                            <td>{product.quantity}</td>
                        </tr>
                        <tr>
                            <th scope="row">Category</th>
                            <td>{product.category.name}</td>
                        </tr>
                        <tr>
                            <th scope="row">Images</th>
                            <td>
                                <div className="row">
                                    {product.images.map((e) => (
                                        <img className="col-6 col-sm-2 mb-4" src={e} alt="" width={200} />
                                    ))}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}