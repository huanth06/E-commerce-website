import React from 'react'
import {Link} from 'react-router-dom'
export default function StayInTouch() {
    return (
        <>
            <h4>Stay In Touch</h4>
            <p>Subscribe to our newsletter and we'll keep you up to date on our products and services.</p>
            <form method="post" action="#" aria-label="Newsletter subscribe form">

                <div className="input-group">
                    <input name="inp-email" className="form-control" type="email" value="" placeholder="Email Address" required="" aria-label="Email Address" />
                    <div className="input-group-append"><input className="btn btn-outline-secondary" type="submit" value="Subscribe" data-loading-text="<i className='fa fa-spinner fa-spin' style='font-size: 14px'></i>" /></div>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="y" className="terms_box" required="" />
                        I have read and agree to
                        <Link to="#" data-toggle="modal" data-target="#termsModal">Terms &amp; Conditions</Link> and
                        <Link to="#" data-toggle="modal" data-target="#privacyModal">Privacy Policy</Link>.
                    </label>
                </div>
            </form>
            <ul className="nav list-social justify-content-center justify-content-md-start pt-2" itemscope="" itemtype="http://schema.org/Organization" role="contentinfo" aria-label="Social media">
                <li className="nav-item px-1"><Link to="#" target="_blank" title="Email us" rel="noopener" aria-label="Email us"><i className="fa fa-envelope" aria-hidden="true"></i></Link></li>
                <li className="nav-item px-1"><Link itemprop="sameAs" to="#" target="_blank" title="Triangle on Facebook" rel="noopener"><i className="fab fa-facebook text-facebook" aria-hidden="true"></i><span className="sr-only">Facebook</span></Link></li>
                <li className="nav-item px-1"><Link itemprop="sameAs" to="#" target="_blank" title="Triangle on Twitter" rel="noopener"><i className="fab fa-twitter text-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></Link></li>
                <li className="nav-item px-1"><Link itemprop="sameAs" to="#" target="_blank" title="Triangle on Google Plus" rel="noopener"><i className="fab fa-google-plus text-google-plus" aria-hidden="true"></i><span className="sr-only">Google Plus</span></Link></li>
                <li className="nav-item px-1"><Link itemprop="sameAs" to="#" target="_blank" title="Triangle on Youtube" rel="noopener"><i className="fab fa-youtube text-youtube" aria-hidden="true"></i><span className="sr-only">Youtube</span></Link></li>
                <li className="nav-item px-1"><Link itemprop="sameAs" to="#" target="_blank" title="Triangle on Instagram" rel="noopener"><i className="fab fa-instagram text-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></Link></li>
                <li className="nav-item px-1"><Link itemprop="sameAs" to="#" target="_blank" title="Triangle on Pinterest" rel="noopener"><i className="fab fa-pinterest text-pinterest" aria-hidden="true"></i><span className="sr-only">Pinterest</span></Link></li>
                <li className="nav-item px-1"><Link itemprop="sameAs" to="#" target="_blank" title="Triangle on Tumblr" rel="noopener"><i className="fab fa-tumblr text-tumblr" aria-hidden="true"></i><span className="sr-only">Tumblr</span></Link></li>
                <li className="nav-item px-1"><Link itemprop="sameAs" to="#" target="_blank" title="Triangle on Linkedin" rel="noopener"><i className="fab fa-linkedin-in text-linkedin" aria-hidden="true"></i><span className="sr-only">Linkedin</span></Link></li>
            </ul>
        </>
    )
}
