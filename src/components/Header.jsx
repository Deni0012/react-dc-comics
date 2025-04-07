// Importazione di Logo e Navbar per Header
import dcLogo from '../assets/dc-logo.png'
import Navbar from './Navbar'

// Creazione di navLinks con URL
const navLinks = [
    { name: 'CHARACTERS', url: '/#' },
    { name: 'COMICS', url: '/#' },
    { name: 'MOVIES', url: '/#' },
    { name: 'TV', url: '/#' },
    { name: 'GAMES', url: '/#' },
    { name: 'COLLECTIBLES', url: '/#' },
    { name: 'VIDEOS', url: '/#' },
    { name: 'FANS', url: '/#' },
    { name: 'NEWS', url: '/#' },
    { name: 'SHOP', url: '/#' }
];


// Creazione della Funzione di Header
function Header() {

    return (
        <>

            <header>
                <div className='header-container'>

                    {/* Logo di Header */}
                    <div className='logo-container'>
                        <a href="/">
                            <img src={dcLogo} alt="dc-logo" />
                        </a>
                    </div>

                    {/* Creazione dei link nell'header collegato a Navbar.jsx */}
                    <Navbar link={navLinks} />

                </div>

            </header >

        </>

    )
}


// Esportazione di Header
export default Header;








