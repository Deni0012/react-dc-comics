import LinkFooter from './LinkFooter';
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
    { name: 'Facebook', url: 'https://www.facebook.com/dc', icon: footerIconFacebook },
    { name: 'Twitter', url: 'https://twitter.com/dccomics', icon: footerIconTwitter },
    { name: 'YouTube', url: 'https://www.youtube.com/user/DCEntertainment', icon: footerIconYoutube },
    { name: 'Pinterest', url: 'https://www.pinterest.com/dccomics/', icon: footerIconPinterest },
    { name: 'Location', url: 'https://www.dc.com/dccomicslocator', icon: footerIconPeriscope }
];


function Footer() {
    return (
        <>
            <footer>
                <div className='container-footer'>
                    <div className="footer-link-container">
                        <div>
                            <LinkFooter title="DC COMICS" links={dcComicsUrl} />
                            <LinkFooter title="SHOP" links={shopUrl} />
                        </div>

                        <LinkFooter title="DC" links={dcUrl} />

                        <LinkFooter title="SITES" links={sitesUrl} />

                        <div className="image-logo-footer">
                            <img src={imageDc} alt="foto-dc" className="img-dc-logo" />
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-container">
                        <button className="signup-button">SIGN-UP NOW!</button>

                        <div className="social-container">
                            <span className="follow-us">FOLLOW US</span>
                            <div className="social-icone">
                                {socialUrl.map((social, index) => (
                                    <a key={index} href={social.url} className="social-icon" aria-label={social.name}>
                                        <img src={social.icon} alt={social.name} className="social-icon-img" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;



