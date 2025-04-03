import imageDc from '../assets/img/dc-logo-bg.png';
import footerIconOne from '../assets/img/footer-facebook.png';
import footerIconTwo from '../assets/img/footer-twitter.png';
import footerIconThree from '../assets/img/footer-youtube.png';
import footerIconFour from '../assets/img/footer-pinterest.png';
import footerIconFive from '../assets/img/footer-periscope.png';
function Footer() {
    return (
        <>
            <footer>
                <div className="container-footer">
                    <img src={imageDc} alt="foto-dc" className="img-dc" />
                    <card className="card">
                        <div>
                            <h3 className="h3-footer">DC COMICS</h3>
                            <ul>
                                <li className="opacity">Characters</li>
                                <li className="opacity">Comics</li>
                                <li className="opacity">Movies</li>
                                <li className="opacity">TV</li>
                                <li className="opacity">Games</li>
                                <li className="opacity">Videos</li>
                                <li className="opacity">News</li>
                            </ul>
                            <h3 className="h3-footer">SHOP</h3>
                            <ul>
                                <li className="opacity">Shop DC</li>
                                <li className="opacity">Shop DC Collectibles</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="h3-footer">DC </h3>
                            <ul>
                                <li className="opacity">Term Of Use</li>
                                <li className="opacity">Privacy policy (New)</li>
                                <li className="opacity">Ad Choices</li>
                                <li className="opacity">Advertising</li>
                                <li className="opacity">Jobs</li>
                                <li className="opacity">Subscriptions</li>
                                <li className="opacity">CPSC Certificates</li>
                                <li className="opacity">Ratings</li>
                                <li className="opacity">Shop Help</li>
                                <li className="opacity">Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="h3-footer">Sites</h3>
                            <ul>
                                <li className="opacity">DC</li>
                                <li className="opacity">MAD Magazine</li>
                                <li className="opacity">DC Kids</li>
                                <li className="opacity">DC Universe</li>
                                <li className="opacity">DC Power Visa</li>
                            </ul>
                        </div>
                    </card>
                    <div className="bar-footer">
                        <div className="row-footer">
                            <div>
                                <h3 className="h3-footer border">SIGN-UP NOW!</h3>
                            </div>
                            <div className="d-flex">
                                <h3 className="h3-footer t-azure">FOLLOW US!</h3>
                                <img src={footerIconOne} alt="facebook" className="icon-footer" />
                                <img src={footerIconTwo} alt="twitter" className="icon-footer" />
                                <img src={footerIconThree} alt="youtube" className="icon-footer" />
                                <img src={footerIconFour} alt="pinterest" className="icon-footer" />
                                <img src={footerIconFive} alt="periscope" className="icon-footer" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;



