import { useTranslation } from "react-i18next"

function PrivateBusinessSection() {
    const { t } = useTranslation()

    return (
        <section className="py-12 md:py-16" id="private-business">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-4 md:grid-cols-4">
                    <article className="min-h-56 rounded-md bg-[#EBF1FF] p-5">
                        <h3 className="mb-4 text-2xl">{t("privateBusiness.privateCharterTitle")}</h3>
                        <p>
                            {t("privateBusiness.privateCharterBody")}
                        </p>
                    </article>
                    <article className="min-h-56 rounded-md bg-[#EBF1FF] p-5">
                        <h3 className="mb-4 text-2xl">{t("privateBusiness.businessFlightsTitle")}</h3>
                        <p>
                            {t("privateBusiness.businessFlightsBody")}
                        </p>
                    </article>
                    <div className="p-5 md:col-span-2">
                        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#FF7020]">
                            {t("privateBusiness.eyebrow")}
                        </p>
                        <h2 className="mb-4 mt-2 text-3xl font-semibold leading-tight text-[#001B3A] md:text-4xl">
                            {t("privateBusiness.title")}
                        </h2>
                        <p>{t("privateBusiness.description")}</p>
                        <div className="mt-4 flex items-center gap-4">
                            <div className="flex">
                                <img
                                    src="https://placehold.co/512x512?text=A"
                                    alt=""
                                    className="h-8 rounded-md"
                                />
                                <img
                                    src="https://placehold.co/512x512?text=B"
                                    alt=""
                                    className="-ml-2 h-8 rounded-md outline-2 outline-white"
                                />
                            </div>
                            <p className="text-[#001B3A]">
                                {t("privateBusiness.trust")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrivateBusinessSection
