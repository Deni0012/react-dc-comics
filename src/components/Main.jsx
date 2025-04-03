import imageIconOne from "../assets/img/buy-comics-digital-comics.png";
import imageIconTwo from "../assets/img/buy-comics-merchandise.png";
import imageIconThree from "../assets/img/buy-comics-shop-locator.png";
import imageIconFour from "../assets/img/buy-comics-subscriptions.png";
import imageIconFive from "../assets/img/buy-dc-power-visa.svg";
function Main() {
    const arrowLeft = "-->";
    const arrowRight = "<--";
    return (
        <>
            <main>
                <div className="container-h1">
                    <h1>{arrowLeft}Content goes here{arrowRight}</h1>
                </div>
                <div className="container-main">
                    <ul className="icon-list">
                        <li className="icon"><img src={imageIconOne} alt="icon-1" className="img-icon" /><span>DIGITAL COMICS</span></li>
                        <li className="icon"><img src={imageIconTwo} alt="icon-2" className="img-icon" />DC MERCHANDISE</li>
                        <li className="icon"><img src={imageIconFour} alt="icon-4" className="img-icon" />COMIC SHOP LOCATOR</li>
                        <li className="icon"><img src={imageIconThree} alt="icon-3" className="img-icon" />SUBSCRIPTION</li>
                        <li className="icon"><img src={imageIconFive} alt="icon-5" className="img-icon-svg" />DC POWER VISA</li>
                    </ul>
                </div>
            </main>
        </>
    )
}
export default Main;