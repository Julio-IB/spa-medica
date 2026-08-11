import Header from './Header'
import PromotionSection from './PromotionSection'
import Promotion from './Promotion'
import EquipmentSection from './EquipmentSection'
import Footer from './Footer'
import Equipment from './Equipment'
import Nav from './Nav'

function Home() {
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
