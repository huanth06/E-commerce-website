import React from 'react'

export default function HomeCarousel() {
    return (
        <>
            <section id="homepageCarousel" class="carousel slide" data-ride="carousel" aria-label="Banner images">
                <ol class="carousel-indicators">
                    <li data-target="#homepageCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#homepageCarousel" data-slide-to="1" class=""></li>
                    <li data-target="#homepageCarousel" data-slide-to="2" class=""></li>
                </ol>
                <div class="carousel-inner"><div id="0" class="carousel-item active">
                    <a href="/products/">
                        <img src="https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/case-study-1%2Fbanner%2F134.png?alt=media&token=e1ac86cd-329c-4262-9e9a-5b271029cb40" class="d-block w-100" alt="FREE Shipping Australia Wide" />
                        <div class="carousel-caption">
                            <h2>FREE Shipping Australia Wide</h2><p>Using code TRIANGLE at Checkout</p><p><span class="btn btn-primary btn-lg">Shop Now</span></p></div>
                    </a>
                </div>
                    <div id="1" class="carousel-item">
                        <a href="/tech-toys/drones/">
                            <img src="https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/case-study-1%2Fbanner%2F121.png?alt=media&token=aaec4d74-b0d0-40dd-95b7-d3af276f8814" class="d-block w-100" alt="DJI Mavic 2 Pro" />
                            <div class="carousel-caption">
                                <h2>DJI Mavic 2 Pro</h2><p>Fly As You Are</p><p><span class="btn btn-primary btn-lg">Shop Now</span></p></div>
                        </a>
                    </div>
                    <div id="2" class="carousel-item">
                        <a href="/arts-crafts/">
                            <img src="https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/case-study-1%2Fbanner%2F135.png?alt=media&token=4f1477b7-4095-4ec5-9bd1-119d25fe1cb2" class="d-block w-100" alt="Back To School SALE" />
                            <div class="carousel-caption">
                                <h2>Back To School SALE</h2><p>Save 20% off Selected Toys &amp; Games</p><p><span class="btn btn-primary btn-lg">Shop Now</span></p></div>
                        </a>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#homepageCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#homepageCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </section>
        </>
    )
}
