import "./i18n"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import FleetSection from "./sections/FleetSection"
import ManagementSection from "./sections/ManagementSection"
import LocationSection from "./sections/LocationSection"
import PrivateBusinessSection from "./sections/PrivateBusinessSection"
import ValuesSection from "./sections/ValuesSection"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
    return (
        <>
            <Analytics />
            <SpeedInsights />
            <Header />
            <Hero />
            <main>
                <PrivateBusinessSection />
                <FleetSection />
                <ManagementSection />
                <ValuesSection />
                <LocationSection />
            </main>
            <Footer />
        </>
    )
}

export default App
