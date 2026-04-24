import { useTranslation } from "react-i18next"

function Hero() {
    const { t } = useTranslation()

    return (
        <section className="relative" aria-label="Hero">
            <img src="image3.png" alt={t("hero.imageAlt")} className="h-128 w-full object-cover" />

            <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-6">
                    <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
                        {t("hero.title")}
                    </h1>
                    <p className="mt-3 max-w-2xl text-base font-semibold text-white/90 md:text-lg">
                        {t("hero.subtitle")}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero
