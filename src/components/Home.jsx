import Header from './Header'
import Nav from './Nav'
import PromotionSection from './PromotionSection'
import Promotion from './Promotion'
import EquipmentSection from './EquipmentSection'
import Footer from './Footer'

function Home() {
    return (
        <main>
            <Header />
            <PromotionSection>
                <Promotion title="Beneficios">
                    <li>Hola</li>
                </Promotion>
            </PromotionSection>
            <EquipmentSection />
            <Footer />
        </main>
    )
}

export default Home;