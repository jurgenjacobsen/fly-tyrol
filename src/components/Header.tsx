import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

function Button(props: { label: string, href: string, className?: string, onClick?: () => void }) {
    return (
        <a href={props.href} onClick={props.onClick} className={`flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold text-[#001B3A] transition-colors duration-300 hover:bg-neutral-200 ${props.className ?? ""}`}>
            {props.label}
        </a>
    )
}

function Header() {
    const { t } = useTranslation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { label: t("nav.home"), href: "#" },
        { label: t("nav.privateBusiness"), href: "#private-business" },
        { label: t("nav.fleet"), href: "#fleet" },
        { label: t("nav.values"), href: "#values" },
        { label: t("nav.location"), href: "#location" },
    ]

    return (
        <header className="relative z-50 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a href="/">
                    <img src="/logo.png" alt={t("hero.imageAlt")} className="max-h-10"/>
                </a>
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-2">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Button label={link.label} href={link.href} />
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center gap-2">
                    <Button 
                        label={t("nav.contact")} 
                        href="#location" 
                        className="hidden sm:flex bg-[#FF7020] text-white hover:bg-[#E56010] hover:text-white" 
                    />
                    <button 
                        className="lg:hidden relative h-10 w-10 cursor-pointer text-[#001B3A]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out">
                            <span className={`absolute transform transition-all duration-300 ${isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}>
                                <Menu size={28} />
                            </span>
                            <span className={`absolute transform transition-all duration-300 ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}>
                                <X size={28} />
                            </span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute inset-x-0 top-full border-t border-neutral-100 bg-white shadow-xl lg:hidden">
                    <nav className="flex flex-col p-6">
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a 
                                        href={link.href} 
                                        className="block py-3 text-lg font-medium text-[#001B3A] transition-colors hover:text-[#FF7020]"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <Button 
                            label={t("nav.contact")} 
                            href="#location" 
                            className="mt-6 bg-[#FF7020] text-white hover:bg-[#E56010] hover:text-white py-3 text-base" 
                            onClick={() => setIsMenuOpen(false)}
                        />
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header
