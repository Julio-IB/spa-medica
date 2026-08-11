const benefits = [
    'Tu equipo, listo en 1 hora',
    'Oxígeno disponible mientras esperas',
    'Garantía incluida en todos nuestros servicios',
]

function Promotion({ title }) {
    return (
        <article className="promotion" aria-labelledby="promotion-title">
            <div className="promotionContent">
                <p className="promotionEyebrow">Atención que te acompaña</p>
                <h2 className="promotionTitle" id="promotion-title">{title}</h2>

                <ul className="promotionBenefits">
                    {benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default Promotion;
