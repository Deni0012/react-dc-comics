import imageDc from '../assets/img/dc-logo-bg.png';
import footerIconFacebook from '../assets/img/footer-facebook.png';
import footerIconTwitter from '../assets/img/footer-twitter.png';
import footerIconYoutube from '../assets/img/footer-youtube.png';
import footerIconPinterest from '../assets/img/footer-pinterest.png';
import footerIconPeriscope from '../assets/img/footer-periscope.png';


// ComicURL
const dcComicsUrl = [
    { name: 'Characters', url: '/#' },
    { name: 'Comics', url: '/#' },
    { name: 'Movies', url: '/#' },
    { name: 'TV', url: '/#' },
    { name: 'Games', url: '/#' },
    { name: 'Videos', url: '/#' },
    { name: 'News', url: '/#' }
];

// DC-URL
const dcUrl = [
    { name: 'Terms Of Use', url: '/#' },
    { name: 'Privacy policy (New)', url: '/#' },
    { name: 'Ad Choices', url: '/#' },
    { name: 'Advertising', url: '/#' },
    { name: 'Jobs', url: '/#' },
    { name: 'Subscriptions', url: '/#' },
    { name: 'Talent Workshops', url: '/#' },
    { name: 'CPSC Certificates', url: '/#' },
    { name: 'Ratings', url: '/#' },
    { name: 'Shop Help', url: '/#' },
    { name: 'Contact Us', url: '/#' }
];

// SitesURL
const sitesUrl = [
    { name: 'DC', url: '#' },
    { name: 'MAD Magazine', url: '/#' },
    { name: 'DC Kids', url: '/#' },
    { name: 'DC Universe', url: '/#' },
    { name: 'DC Power Visa', url: '/#' }
];

// ShopURL
const shopUrl = [
    { name: 'Shop DC', url: '/#' },
    { name: 'Shop DC Collectibles', url: '/#' }
];


// SocialURL
const socialUrl = [
    { name: 'Facebook', url: 'https://www.facebook.com/dc', icon: FacebookIcon },
    { name: 'Twitter', url: 'https://twitter.com/dccomics', icon: TwitterIcon },
    { name: 'YouTube', url: 'https://www.youtube.com/user/DCEntertainment', icon: YoutubeIcon },
    { name: 'Pinterest', url: 'https://www.pinterest.com/dccomics/', icon: PinterestIcon },
    { name: 'Location', url: 'https://www.dc.com/dccomicslocator', icon: PeriscopeIcon }
];


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
                                <img src={footerIconFacebook} alt="facebook" className="icon-footer" />
                                <img src={footerIconTwitter} alt="twitter" className="icon-footer" />
                                <img src={footerIconYoutube} alt="youtube" className="icon-footer" />
                                <img src={footerIconPinterest} alt="pinterest" className="icon-footer" />
                                <img src={footerIconPeriscope} alt="periscope" className="icon-footer" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;



