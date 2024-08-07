import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../../MyContext';

export default function MainImage(props) {
    const {product} = props;
    let [ctx, setCtx] = useContext(MyContext);
    const [mainImage, setMainImage] = useState(product?.images?.[0]);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleThumbnailClick = (index, src) => {
        setMainImage(src);
        setActiveIndex(index);
    };

    useEffect(() => {
        if(product?.images?.[0]){
            setMainImage(product?.images?.[0])
        }
    }, [product])

    return (
        <>
            <section className='col-12 col-lg-5'>
                <div className='main-image text-center'>
                    <Link to="">
                        <div className='zoom'>
                            <img src={mainImage} alt="" />
                        </div>
                    </Link>
                </div>
                <br />
                <div className='row align-items-center'>
                    { product?.images?.map((image,index) => (
                        <div className='col-6 col-md-3'>
                            <Link>
                                <img src={image} alt="" className={`thumbnail ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => handleThumbnailClick(index, image)} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
