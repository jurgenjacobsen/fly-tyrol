import { render, screen, fireEvent } from "@testing-library/react"
import LanguageDropdown from "./LanguageDropdown"
import { useTranslation } from "react-i18next"
import { vi } from "vitest"

// Mock useTranslation
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => {
            const translations: Record<string, string> = {
                "language.label": "Language",
                "language.english": "English",
                "language.german": "German",
                "language.russian": "Russian",
                "language.spanish": "Spanish",
                "language.french": "French",
                "language.portuguese": "Portuguese",
            }
            return translations[key] || key
        },
        i18n: {
            language: "en",
            resolvedLanguage: "en",
            changeLanguage: vi.fn().mockResolvedValue(undefined),
        },
    }),
}))

describe("LanguageDropdown", () => {
    it("renders the current language", () => {
        render(<LanguageDropdown />)
        expect(screen.getByText("English")).toBeInTheDocument()
    })

    it("opens the dropdown when clicked", () => {
        render(<LanguageDropdown />)
        const button = screen.getByRole("button")
        fireEvent.click(button)
        expect(screen.getByRole("listbox")).toBeInTheDocument()
    })

    it("closes the dropdown when an option is selected", async () => {
        render(<LanguageDropdown />)
        fireEvent.click(screen.getByRole("button"))
        const germanOption = screen.getByText("German")
        fireEvent.click(germanOption)
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    })

    it("closes the dropdown when clicking outside", () => {
        render(<LanguageDropdown />)
        fireEvent.click(screen.getByRole("button"))
        expect(screen.getByRole("listbox")).toBeInTheDocument()
        
        fireEvent.mouseDown(document)
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    })

    it("navigates with keyboard on button", () => {
        render(<LanguageDropdown />)
        const button = screen.getByRole("button")
        
        fireEvent.keyDown(button, { key: "ArrowDown" })
        expect(screen.getByRole("listbox")).toBeInTheDocument()
    })

    it("navigates with keyboard on listbox", () => {
        render(<LanguageDropdown />)
        fireEvent.click(screen.getByRole("button"))
        const listbox = screen.getByRole("listbox")

        // ArrowDown
        fireEvent.keyDown(listbox, { key: "ArrowDown" })
        const germanOption = screen.getByRole("option", { name: "German" })
        expect(germanOption).toHaveClass("bg-white/15")

        // ArrowUp
        fireEvent.keyDown(listbox, { key: "ArrowUp" })
        const englishOption = screen.getByRole("option", { name: "English" })
        expect(englishOption).toHaveClass("bg-white/15")

        // Escape
        fireEvent.keyDown(listbox, { key: "Escape" })
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    })

    it("selects language with Space key", () => {
        render(<LanguageDropdown />)
        fireEvent.click(screen.getByRole("button"))
        const listbox = screen.getByRole("listbox")

        fireEvent.keyDown(listbox, { key: "ArrowDown" })
        fireEvent.keyDown(listbox, { key: " " })
        
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    })

    it("opens with ArrowUp on button", () => {
        render(<LanguageDropdown />)
        const button = screen.getByRole("button")
        
        fireEvent.keyDown(button, { key: "ArrowUp" })
        expect(screen.getByRole("listbox")).toBeInTheDocument()
    })

    it("does nothing for other keys on button", () => {
        render(<LanguageDropdown />)
        const button = screen.getByRole("button")
        
        fireEvent.keyDown(button, { key: "Enter" })
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
    })

    it("does nothing for other keys on listbox", () => {
        render(<LanguageDropdown />)
        fireEvent.click(screen.getByRole("button"))
        const listbox = screen.getByRole("listbox")
        
        fireEvent.keyDown(listbox, { key: "Tab" })
        expect(screen.getByRole("listbox")).toBeInTheDocument()
    })
})
