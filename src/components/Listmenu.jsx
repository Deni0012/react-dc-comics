// Importazione di immagini per la lista menù
import DigitalComicsIcon from '../assets/buy-comics-digital-comics.png';
import MerchandiseBuyIcon from '../assets/buy-comics-merchandise.png';
import LocatorIcon from '../assets/buy-comics-shop-locator.png';
import SubscriptionsBuyIcon from '../assets/buy-comics-subscriptions.png';
import PowerIcon from '../assets/buy-dc-power-visa.svg';

// Creazione della lista informativa
const listInfo = [
    { name: 'DIGITAL COMICS', icon: DigitalComicsIcon },
    { name: 'DC MERCHANDISE', icon: MerchandiseBuyIcon },
    { name: 'SUBSCRIPTION', icon: SubscriptionsBuyIcon },
    { name: 'COMIC SHOP LOCATOR', icon: LocatorIcon },
    { name: 'DC POWER VISA', icon: PowerIcon }
];


// Creazione della funzione Listmenu
function Listmenu() {
    return (
        <div className='list-menu-container'>
            <div className='list-menu-contain'>
                <ul className='list-menu-list'>
                    {listInfo.map((list, index) => (
                        <li key={index} className='list-menu-item'>
                            {/* Icone */}
                            <img src={list.icon} alt={list.name} className='list-icon' />
                            <p className='list-text'>{list.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// Esportazione di Listmenu
export default Listmenu;