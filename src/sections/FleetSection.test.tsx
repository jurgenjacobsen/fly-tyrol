import { render, screen, fireEvent, act } from "@testing-library/react"
import FleetSection from "./FleetSection"
import { vi } from "vitest"

// Mock useTranslation
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}))

describe("FleetSection", () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it("renders the first aircraft by default", () => {
        render(<FleetSection />)
        expect(screen.getByText("fleet.aircraft.citationC525.name")).toBeInTheDocument()
    })

    it("shows the next aircraft when next button is clicked", () => {
        render(<FleetSection />)
        const nextButton = screen.getByLabelText("fleet.nextAircraft")
        fireEvent.click(nextButton)
        expect(screen.getByText("fleet.aircraft.phenom300e.name")).toBeInTheDocument()
    })

    it("shows the previous aircraft when previous button is clicked", () => {
        render(<FleetSection />)
        const prevButton = screen.getByLabelText("fleet.previousAircraft")
        fireEvent.click(prevButton)
        // From first to last
        expect(screen.getByText("fleet.aircraft.challenger350.name")).toBeInTheDocument()
    })

    it("auto-plays to the next aircraft", () => {
        render(<FleetSection />)
        expect(screen.getByText("fleet.aircraft.citationC525.name")).toBeInTheDocument()
        
        act(() => {
            vi.advanceTimersByTime(5000)
        })
        
        expect(screen.getByText("fleet.aircraft.phenom300e.name")).toBeInTheDocument()
    })

    it("pauses auto-play on mouse enter and resumes on mouse leave", () => {
        render(<FleetSection />)
        const container = screen.getByText("fleet.title").nextElementSibling!
        
        fireEvent.mouseEnter(container)
        
        act(() => {
            vi.advanceTimersByTime(5000)
        })
        
        // Should still be the first one
        expect(screen.getByText("fleet.aircraft.citationC525.name")).toBeInTheDocument()
        
        fireEvent.mouseLeave(container)
        
        act(() => {
            vi.advanceTimersByTime(5000)
        })
        
        expect(screen.getByText("fleet.aircraft.phenom300e.name")).toBeInTheDocument()
    })

    it("pauses auto-play temporarily after manual navigation", () => {
        render(<FleetSection />)
        const nextButton = screen.getByLabelText("fleet.nextAircraft")
        
        fireEvent.click(nextButton) // Manual click pauses for 5s
        
        act(() => {
            vi.advanceTimersByTime(3000) // Less than 5s
        })
        
        // Should still be the second one (Phenom 300E)
        expect(screen.getByText("fleet.aircraft.phenom300e.name")).toBeInTheDocument()
        
        act(() => {
            vi.advanceTimersByTime(2100) // Total > 5s
        })
        
        // After 5s it should have resumed and eventually moved to next (Challenger 350)
        // Actually it resumes the interval which takes another 5s
        act(() => {
            vi.advanceTimersByTime(5000)
        })
        expect(screen.getByText("fleet.aircraft.challenger350.name")).toBeInTheDocument()
    })
})
