import logoMobile from "../assets/logoMobile.svg"
import ButtonContact from "./ButtonContact";

function Nav() {
    return (
        <nav className="navBar">
            <img src={logoMobile} alt="Logo for mobile devices" height={"60px"} />
            <div className="buttonMobileContainer">
                <ButtonContact mediaOutlet="whatsapp" phoneNumber="4794300244" ButtonText="" message="" />
                <ButtonContact mediaOutlet="tel" phoneNumber="4794300244" ButtonText="" />
            </div>
        </nav>
    )
}

export default Nav;