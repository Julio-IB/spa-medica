import logoFull from '../assets/logoFull.svg'
import ButtonContact from './ButtonContact';

function Header() {
    return (
        <header className='header'>
            <img src={logoFull} className='logoFull' alt='SPA MEDICAL LOGO' />
            <p>Escríbenos por WhatsApp</p>
            {<ButtonContact mediaOutlet="whatsapp" phoneNumber="4794300244" buttonText="479 430 0244" message="Hola sigue disponible" />}
            <p>o llamanos al mismo número</p>
            {<ButtonContact mediaOutlet="tel" phoneNumber="4794300244" buttonText="479 430 0244" />}
        </header>
    )
}

export default Header;
