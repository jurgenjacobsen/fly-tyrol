import { useTranslation } from "react-i18next"

function ValuesSection() {
    const { t } = useTranslation()

    return (
        <section className="py-12 md:py-16 " id="values">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-6 flex items-end gap-6">
                    <div>
                        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#FF7020]">
                            {t("values.eyebrow")}
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold leading-tight text-[#001B3A] md:text-4xl">
                            {t("values.title")}
                        </h2>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="rounded-md border border-neutral-200 bg-white p-6">
                        <h3 className="mb-2 text-xl">{t("values.safetyTitle")}</h3>
                        <p>{t("values.safetyBody")}</p>
                    </article>
                    <article className="rounded-md border border-neutral-200 bg-white p-6">
                        <h3 className="mb-2 text-xl">{t("values.precisionTitle")}</h3>
                        <p>{t("values.precisionBody")}</p>
                    </article>
                    <article className="rounded-md border border-neutral-200 bg-white p-6">
                        <h3 className="mb-2 text-xl">{t("values.discreetTitle")}</h3>
                        <p>{t("values.discreetBody")}</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default ValuesSection
