import Header from './Header'
import PromotionSection from './PromotionSection'
import Promotion from './Promotion'
import EquipmentSection from './EquipmentSection'
import Footer from './Footer'
import Equipment from './Equipment'

function Home() {
    const infoConcentrador = [
        "¿Te sentías mejor cuando tu equipo era nuevo, ahora necesitas más flujo para sentirte igual de bien? ¿Tu equipo se escucha forzado y se calienta?"
    ]
    return (
        <main>
            <Header />
            <PromotionSection>
                <Promotion title="Beneficios pensados para ti" />
            </PromotionSection>
            <EquipmentSection>
                <Equipment />
            </EquipmentSection>
            <Footer />
        </main>
    )
}

export default Home;
