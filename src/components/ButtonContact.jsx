
//mediaOutlet, phoneNumber, buttonText, message
function ButtonContact(props) {
    const message = encodeURIComponent(props.message)
    const url = props.mediaOutlet == "whatsapp" ?
        `https://wa.me/52${props.phoneNumber}?text=${message}` :
        `tel:+52${props.phoneNumber}`;
    const style = props.mediaOutlet == "whatsapp" ? "buttonContactWhatsapp" : "buttonContactTel"
    return (
        <a
            className={style}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.buttonText}
        </a>
    )
}

export default ButtonContact;