import logoFull from '../assets/logoFull.svg'
import ButtonContact from './ButtonContact';

function Header() {
    return (
        <header className='header'>
            <img src={logoFull} className='logoFull' alt='SPA MEDICAL LOGO' />
            <div className='buttonContactContainer'>              
                {<ButtonContact mediaOutlet="whatsapp" phoneNumber="4794300244" buttonText="479 430 0244" message="Hola sigue disponible" />}
                {<ButtonContact mediaOutlet="tel" phoneNumber="4794300244" buttonText="479 430 0244" />}
            </div>
        </header>
    )
}

export default Header;
