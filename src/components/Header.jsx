import dcLogo from '../assets/img/dc-logo.png'

function Header() {

    return (
        <>

            <header>
                <div>
                    <img src={dcLogo} alt="dc-logo" />
                </div>
                <nav>
                    <ul className="ul-class">
                        <li className="margin">CHARACTERS</li>
                        <li className="margin t-azure">COMICS</li>
                        <li className="margin">MOVIES</li>
                        <li className="margin">TV</li>
                        <li className="margin">GAMES</li>
                        <li className="margin">COLLECTIBLES</li>
                        <li className="margin">VIDEOS</li>
                        <li className="margin">FANS</li>
                        <li className="margin">NEWS</li>
                        <li className="margin">SHOP</li>
                    </ul>
                </nav>



            </header>

        </>
    )
}



export default Header




