function Equipment(props) {
    return (
        <div className="equipment">
            <h1 className="equipmentTitle">{props.title}</h1>
            <h2 className="equipmentInfo">{props.info}</h2>
            <img src={props.img}/>
        </div>
    )
}

export default Equipment;