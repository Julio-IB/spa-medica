import logo from '../assets/logo.svg'
import ButtonContact from './ButtonContact';
import Border from './Border';

function Header({ headerRef }) {
    return (
        <header ref={headerRef} className='header'>
            <div className='logoContainer'>
                <img src={logo} className='logo' alt='SPA MEDICAL LOGO' />
                <div className='buttonContactContainer'>
                    {<ButtonContact mediaOutlet="whatsapp" phoneNumber="4794300244" buttonText="479 430 0244" message="Hola sigue disponible" />}
                    {<ButtonContact mediaOutlet="tel" phoneNumber="4794300244" buttonText="479 430 0244" />}
                </div>
            </div>
            <Border />
            <h1 className='headerTitle'>CONCENTRADORES DE OXÍGENO</h1>
        </header>
    )
}

export default Header;
