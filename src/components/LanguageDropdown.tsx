import { useEffect, useId, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

type LanguageOption = {
    label: string
    value: "en" | "de" | "ru" | "es" | "fr" | "pt"
}

function LanguageDropdown() {
    const { t, i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const rootRef = useRef<HTMLDivElement | null>(null)
    const labelId = useId()

    const options: LanguageOption[] = [
        { label: t("language.english"), value: "en" },
        { label: t("language.german"), value: "de" },
        { label: t("language.russian"), value: "ru" },
        { label: t("language.spanish"), value: "es" },
        { label: t("language.french"), value: "fr" },
        { label: t("language.portuguese"), value: "pt" },
    ]

    const currentLanguage = i18n.resolvedLanguage ?? i18n.language
    const selectedIndex = Math.max(
        0,
        options.findIndex((option) => currentLanguage?.startsWith(option.value)),
    )

    const [focusedIndex, setFocusedIndex] = useState(selectedIndex)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!rootRef.current) return
            if (!rootRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const selectOption = async (index: number) => {
        const option = options[index]
        setFocusedIndex(index)
        setIsOpen(false)
        await i18n.changeLanguage(option.value)
    }

    const onButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault()
            setIsOpen(true)
            setFocusedIndex(selectedIndex)
        }
    }

    const onListboxKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
        if (event.key === "Escape") {
            event.preventDefault()
            setIsOpen(false)
            return
        }

        if (event.key === "ArrowDown") {
            event.preventDefault()
            setFocusedIndex((current) => (current + 1) % options.length)
            return
        }

        if (event.key === "ArrowUp") {
            event.preventDefault()
            setFocusedIndex((current) => (current - 1 + options.length) % options.length)
            return
        }

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            void selectOption(focusedIndex)
        }
    }

    return (
        <div ref={rootRef} className="relative inline-block text-left">
            <span id={labelId} className="mr-2 text-white/70">
                {t("language.label")}:
            </span>
            <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-labelledby={labelId}
                className="min-w-36 rounded-md border border-white/30 bg-[#001B3A] px-3 py-2 text-left text-white"
                onClick={() => setIsOpen((current) => !current)}
                onKeyDown={onButtonKeyDown}
            >
                <span>{options[selectedIndex]?.label}</span>
                <span className="ml-2">▾</span>
            </button>

            {isOpen && (
                <ul
                    role="listbox"
                    tabIndex={-1}
                    aria-labelledby={labelId}
                    className="absolute bottom-full right-0 z-20 mb-2 min-w-full rounded-md border border-white/20 bg-[#0B2447] py-1"
                    onKeyDown={onListboxKeyDown}
                >
                    {options.map((option, index) => {
                        const isSelected = selectedIndex === index
                        const isFocused = focusedIndex === index
                        return (
                            <li
                                key={option.value}
                                role="option"
                                aria-selected={isSelected}
                                className={`cursor-pointer px-3 py-2 text-white ${
                                    isFocused ? "bg-white/15" : ""
                                } ${isSelected ? "font-semibold" : ""}`}
                                onMouseEnter={() => setFocusedIndex(index)}
                                onClick={() => {
                                    void selectOption(index)
                                }}
                            >
                                {option.label}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default LanguageDropdown
