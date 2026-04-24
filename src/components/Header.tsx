import { useTranslation } from "react-i18next"

function Button(props: { label: string, href: string, className?: string }) {
    return (
        <a href={props.href} className={`flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold text-[#001B3A] transition-colors duration-300 hover:bg-neutral-200 ${props.className ?? ""}`}>
            {props.label}
        </a>
    )
}

function Header() {
    const { t } = useTranslation()

    return (
        <header>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a href="/">
                    <img src="/logo.png" alt={t("hero.imageAlt")} className="max-h-10"/>
                </a>
                <nav>
                    <ul className="hidden items-center gap-2 lg:flex">
                        <li><Button label={t("nav.home")} href="#" /></li>
                        <li><Button label={t("nav.privateBusiness")} href="#private-business" /></li>
                        <li><Button label={t("nav.fleet")} href="#fleet" /></li>
                        <li><Button label={t("nav.values")} href="#values" /></li>
                        <li><Button label={t("nav.location")} href="#location" /></li>
                    </ul>
                </nav>
                <Button label={t("nav.contact")} href="#location" className="bg-[#FF7020] text-white hover:bg-[#E56010] hover:text-white" />
            </div>
        </header>
    )
}

export default Header
