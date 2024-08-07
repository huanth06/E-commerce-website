import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../../MyContext';
import Product from '../thumb/Product';

export default function SearchResults() {
    let [ctx,setCtx] = useContext(MyContext);   
    return (
        <>
            <h1 className="display-4">Search Results</h1>
            <hr />
            <section className="row products-row">
                {ctx?.searchRs?.length!==0?ctx?.searchRs?.map(product => (
                    <Product 
                    key={product.id} 
                    data={product}
                    />
                ))
                :(
                    <>
                    <p>Search was unable to find any product results for '{ctx.key}' you may have typed your word incorrectly, or are being too specific. Try using a broader search phrase.    </p>
                    </>
                )
            }
            </section>
        </>
    )
}
