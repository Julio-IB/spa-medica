import logoMobile from "../assets/logoMobile.svg"
import ButtonContact from "./ButtonContact";

function Nav({ isVisible }) {
    return (
        <nav
            className={`navBar ${isVisible ? " navBarVisible" : ""}`}
            aria-hidden={!isVisible}
        >
            <img src={logoMobile} alt="Logo for mobile devices" height={"60px"} />
            <div className="buttonMobileContainer">
                <ButtonContact mediaOutlet="whatsapp" phoneNumber="4794300244" buttonText="" message="" />
                <ButtonContact mediaOutlet="tel" phoneNumber="4794300244" buttonText="" />
            </div>
        </nav>
    )
}

export default Nav;
