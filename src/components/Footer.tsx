import { useTranslation } from "react-i18next"
import LanguageDropdown from "./LanguageDropdown"

function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="w-full bg-[#001B3A] pb-6 pt-12 text-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    <div>
                        <h3 className="mb-4 text-lg font-bold uppercase tracking-wider text-white/50">{t("footer.contact")}</h3>
                        <ul className="space-y-2 text-white/90">
                            <li>
                                <a href="tel:+43512263040" className="transition-colors hover:text-[#FF7020]">
                                    {t("footer.phone")}
                                </a>
                            </li>
                            <li>
                                <span className="opacity-70">{t("footer.fax")}</span>
                            </li>
                            <li>
                                <a href="mailto:info@flytyrol.com" className="underline decoration-white/30 underline-offset-4 transition-colors hover:text-[#FF7020]">
                                    {t("footer.email")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold uppercase tracking-wider text-white/50">{t("footer.location")}</h3>
                        <address className="not-italic space-y-1 text-white/90">
                            <p>{t("footer.locationLine1")}</p>
                            <p>{t("footer.locationLine2")}</p>
                            <p>{t("footer.locationLine3")}</p>
                        </address>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold uppercase tracking-wider text-white/50">{t("footer.followUs")}</h3>
                        <ul className="space-y-2 text-white/90">
                            <li><a href="https://www.instagram.com/flytyrol/" className="transition-colors hover:text-[#FF7020]">{t("footer.instagram")}</a></li>
                            <li><a href="https://www.linkedin.com/company/flytyrol/" className="transition-colors hover:text-[#FF7020]">{t("footer.linkedIn")}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold uppercase tracking-wider text-white/50">{t("footer.officeHours")}</h3>
                        <ul className="space-y-2 text-white/90">
                            <li className="flex justify-between md:block lg:flex">
                                <span>{t("footer.monThu")}</span>
                                <span className="font-light">{t("footer.hoursMonThu")}</span>
                            </li>
                            <li className="flex justify-between md:block lg:flex">
                                <span>{t("footer.friday")}</span>
                                <span className="font-light">{t("footer.hoursFriday")}</span>
                            </li>
                            <li className="text-white/50 italic">{t("footer.closed")}</li>
                        </ul>
                    </div>
                </div>

                <hr className="mt-12 mb-6 border-white/10"/>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 uppercase tracking-widest">
                    <span>
                        &copy; {t("footer.copyright", { year: new Date().getFullYear() })}
                    </span>
                    <div className="flex gap-4">
                        <div>
                            <LanguageDropdown />
                        </div>

                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            {t("footer.certification")}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
