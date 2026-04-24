import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { AlertTriangle } from "lucide-react"

function TempDisclaimer() {
    const { t } = useTranslation()
    const [isVisible, setIsVisible] = useState(() => {
        if (typeof window === "undefined") return false
        return !localStorage.getItem("fly-tyrol-disclaimer-acknowledged")
    })

    useEffect(() => {
        if (isVisible) {
            // Prevent scrolling when disclaimer is visible
            document.body.style.overflow = "hidden"
        }
    }, [isVisible])

    const handleAcknowledge = () => {
        localStorage.setItem("fly-tyrol-disclaimer-acknowledged", "true")
        setIsVisible(false)
        document.body.style.overflow = "unset"
    }

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
            <div className="max-w-xl rounded-xl border border-white/20 bg-[#001B3A] p-8 text-white shadow-2xl">
                <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7020]/20 text-[#FF7020]">
                        <AlertTriangle size={28} />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">
                        {t("disclaimer.title")}
                    </h2>
                </div>

                <p className="mb-8 text-lg leading-relaxed text-white/90">
                    {t("disclaimer.body")}
                </p>

                <button
                    type="button"
                    onClick={handleAcknowledge}
                    className="w-full cursor-pointer rounded-md bg-[#FF7020] px-6 py-3 text-center font-bold text-white transition-colors duration-300 hover:bg-[#E56010]"
                >
                    {t("disclaimer.acknowledge")}
                </button>
            </div>
        </div>
    )
}

export default TempDisclaimer
