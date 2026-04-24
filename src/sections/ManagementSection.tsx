import { useTranslation } from "react-i18next"
import { Users, ShieldCheck, History } from "lucide-react"

function ManagementSection() {
    const { t } = useTranslation()

    return (
        <section className="py-12 md:py-16 " id="management">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 text-center">
                    <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#FF7020]">
                        {t("management.eyebrow")}
                    </p>
                    <h2 className="text-3xl font-bold text-[#001B3A] md:text-4xl">
                        {t("management.title")}
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* CEO / Managing Director */}
                    <div className="rounded-md border border-neutral-200 p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#001B3A] text-white">
                            <Users size={24} />
                        </div>
                        <h3 className="mb-1 text-xl font-bold text-[#001B3A]">
                            Helmut Eder
                        </h3>
                        <p className="mb-4 text-sm font-semibold text-[#FF7020] uppercase tracking-wide">
                            {t("management.ceoTitle")}
                        </p>
                        <p className="text-neutral-600">
                            {t("management.ceoDescription")}
                        </p>
                    </div>

                    {/* Operations */}
                    <div className="rounded-md border border-neutral-200 p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#001B3A] text-white">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="mb-1 text-xl font-bold text-[#001B3A]">
                            Sabine Oberleiter
                        </h3>
                        <p className="mb-4 text-sm font-semibold text-[#FF7020] uppercase tracking-wide">
                            {t("management.opsTitle")}
                        </p>
                        <p className="text-neutral-600">
                            {t("management.opsDescription")}
                        </p>
                    </div>

                    {/* Company History/Heritage */}
                    <div className="rounded-md border border-neutral-200 p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#001B3A] text-white">
                            <History size={24} />
                        </div>
                        <h3 className="mb-1 text-xl font-bold text-[#001B3A]">
                            {t("management.heritageTitle")}
                        </h3>
                        <p className="mb-4 text-sm font-semibold text-[#FF7020] uppercase tracking-wide">
                            Est. 2001
                        </p>
                        <p className="text-neutral-600">
                            {t("management.heritageDescription")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ManagementSection
