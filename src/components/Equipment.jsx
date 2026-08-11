function Equipment() {
    return (
        <div className="equipment">
            <h2 className="equipmentTitle">
                Mantenimiento
            </h2>
            <div className="equipmentInfo">
                <em>"Me sentía mejor cuando mi equipo era nuevo, ahora necesito subirle más al flujo para sentirme bien y mi equipo se escucha forzado y se calienta."</em>
                <p className="pEnd">– ¡Muchos pacientes!</p>
                <div className="justifyText">
                    <h3>El servicio incluye:</h3>
                    <ul className="list">
                        <li><strong>Verificación de la pureza de oxígeno:</strong> Revisamos que tu equipo entregue mas del 92% de concentración de oxígeno y de no hacerlo buscamos el problema para solucionarlo.</li>
                        <li><strong>Cambio de filtro bacteriológico:</strong> Impide el paso de virus y bacterias hacia tus pulmones.</li>
                        <li><strong>Cambio de filtro para el compresor:</strong> Proteje a tu equipos de suciedad que lo puede dañar.</li>
                        <li><strong>Limpieza de tarjetas electrónicas:</strong> Previene que la electrónica de tu equipo se pueda dañar por corto circuito.</li>
                        <li><strong>Ajuste de válvulas:</strong> Para la sincronización correcta del equipo y generación optima de oxígeno.</li>
                        <li><strong>Prueba de seguridad eléctrica:</strong> Probamos que tu equipo sea seguro electricamente.</li>
                        <li className="azul"><b>¡Y más!</b></li>
                    </ul>
                </div>
            </div>
            <h3 className='specialMessage'>Respira bien</h3>
        </div>
    )
}

export default Equipment;