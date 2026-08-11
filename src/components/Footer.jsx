function Footer() {
    return (
        <footer>
            <div className="footerTextContainer">
                <p className="footerTitle">Nos ubicamos en:</p>
                <p className="location">León Gto.</p>
                <p className="address">Cto. Haciendas Maravillas 317A, Coimbra, 37547 León de los Aldama, Gto.</p>
            </div>
            <iframe
                className="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6231.73919894341!2d-101.60401754099398!3d21.04636668535332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b97e17bbfde37%3A0x7de9b86ad074d948!2sReparaci%C3%B3n%20de%20Concentradores%20de%20Ox%C3%ADgeno%20y%20m%C3%A1s!5e0!3m2!1ses-419!2smx!4v1786464593374!5m2!1ses-419!2smx"
                allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin">
            </iframe>
        </footer>
    )
}

export default Footer;