import "./i18n"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import FleetSection from "./sections/FleetSection"
import LocationSection from "./sections/LocationSection"
import PrivateBusinessSection from "./sections/PrivateBusinessSection"
import ValuesSection from "./sections/ValuesSection"

function App() {
    return (
        <>
            <Header />
            <Hero />
            <main>
                <PrivateBusinessSection />
                <FleetSection />
                <ValuesSection />
                <LocationSection />
            </main>
            <Footer />
        </>
    )
}

export default App
