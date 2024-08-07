import { useLocation, Link, useParams } from "react-router-dom"

export default function CategoryDetail() {
    let data = useLocation();
    let category = data.state.obj;
    let { id } = useParams();
    return (
        <>
            <div className="product-detail mt-4">
                <div className="page-title">
                <h1>Product Category - {category.name}</h1>
                <button type="" className="btn btn-light"><Link to={'/_cpanel/categories'}>Back To List</Link></button>
                </div>
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="row">ID</th>
                            <td>{category.id}</td>
                        </tr>
                        <tr>
                            <th scope="row">Name</th>
                            <td>{category.name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}