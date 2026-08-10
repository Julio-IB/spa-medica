function Promotion(props) {
    return (
        <div className="promotion">
            <h3 className="promotionTitle">{props.title}</h3>
            <li>- Tu equipo listo en 1 hora</li>
            <li>- Te brindamos oxígeno mientras esperas</li>
            <li>- Todos nuestros servicios tienen garantía</li>
        </div>
    )
}

export default Promotion;