import { useEffect, useRef, useState } from 'react'
import Header from './Header'
import PromotionSection from './PromotionSection'
import Promotion from './Promotion'
import EquipmentSection from './EquipmentSection'
import Footer from './Footer'
import Equipment from './Equipment'
import Nav from './Nav'

function Home() {
    const headerRef = useRef(null)
    const [isNavVisible, setIsNavVisible] = useState(false)

    useEffect(() => {
        const header = headerRef.current
        const mobileViewport = window.matchMedia('(max-width: 619.98px)')
        let headerObserver

        const observeHeaderOnMobile = () => {
            headerObserver?.disconnect()

            if (!mobileViewport.matches) {
                setIsNavVisible(false)
                return
            }

            headerObserver = new IntersectionObserver(([entry]) => {
                setIsNavVisible(!entry.isIntersecting)
            })

            headerObserver.observe(header)
        }

        observeHeaderOnMobile()
        mobileViewport.addEventListener('change', observeHeaderOnMobile)

        return () => {
            headerObserver?.disconnect()
            mobileViewport.removeEventListener('change', observeHeaderOnMobile)
        }
    }, [])

    return (
        <main>
            <Header headerRef={headerRef} />
            <Nav isVisible={isNavVisible} />
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
