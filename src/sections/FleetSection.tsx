import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

const aircrafts = [
    {
        nameKey: "fleet.aircraft.citationC525.name",
        image: "/image3.png",
        descriptionKey: "fleet.aircraft.citationC525.description",
        range: "1,500 miles",
        speed: "400 mph",
        capacity: "6 passengers",
    },
    {
        nameKey: "fleet.aircraft.phenom300e.name",
        image: "/image2.png",
        descriptionKey: "fleet.aircraft.phenom300e.description",
        range: "2,010 miles",
        speed: "464 mph",
        capacity: "8 passengers",
    },
    {
        nameKey: "fleet.aircraft.challenger350.name",
        image: "/image.png",
        descriptionKey: "fleet.aircraft.challenger350.description",
        range: "3,200 miles",
        speed: "541 mph",
        capacity: "10 passengers",
    },
]

function FleetSection() {
    const { t } = useTranslation()
    const [activeAircraftIndex, setActiveAircraftIndex] = useState(0)
    const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next")
    const [isAutoPlayActive, setIsAutoPlayActive] = useState(true)
    const autoPlayTimeoutRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const activeAircraft = useMemo(() => aircrafts[activeAircraftIndex], [activeAircraftIndex])

    const pauseAutoPlay = () => {
        setIsAutoPlayActive(false)
        if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current)
        pauseTimeoutRef.current = setTimeout(() => {
            setIsAutoPlayActive(true)
        }, 5000)
    }

    const showPreviousAircraft = () => {
        pauseAutoPlay()
        setSlideDirection("prev")
        setActiveAircraftIndex((currentIndex) =>
            currentIndex === 0 ? aircrafts.length - 1 : currentIndex - 1,
        )
    }

    const showNextAircraft = () => {
        pauseAutoPlay()
        setSlideDirection("next")
        setActiveAircraftIndex((currentIndex) => (currentIndex + 1) % aircrafts.length)
    }

    useEffect(() => {
        if (!isAutoPlayActive) return

        autoPlayTimeoutRef.current = setInterval(() => {
            setSlideDirection("next")
            setActiveAircraftIndex((currentIndex) => (currentIndex + 1) % aircrafts.length)
        }, 5000)

        return () => {
            if (autoPlayTimeoutRef.current) clearInterval(autoPlayTimeoutRef.current)
        }
    }, [isAutoPlayActive])

    const handleMouseEnter = () => {
        setIsAutoPlayActive(false)
    }

    const handleMouseLeave = () => {
        setIsAutoPlayActive(true)
    }

    return (
        <section className="bg-[#EBF1FF] py-12 md:py-16" id="fleet">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-6 mt-2 text-3xl leading-tight font-semibold text-[#001B3A] underline decoration-4 decoration-[#FF7020] underline-offset-8 md:text-4xl">
                    {t("fleet.title")}
                </h2>

                <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <button
                        type="button"
                        onClick={showPreviousAircraft}
                        aria-label={t("fleet.previousAircraft")}
                        className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 text-[#001B3A] shadow-md transition-colors duration-300 hover:bg-neutral-100"
                    >
                        <ChevronLeft size={22} />
                    </button>
                    <button
                        type="button"
                        onClick={showNextAircraft}
                        aria-label={t("fleet.nextAircraft")}
                        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 cursor-pointer rounded-full bg-white p-2 text-[#001B3A] shadow-md transition-colors duration-300 hover:bg-neutral-100"
                    >
                        <ChevronRight size={22} />
                    </button>

                    <div
                        key={`${activeAircraftIndex}-${slideDirection}`}
                        className={`grid gap-4 overflow-hidden rounded-md lg:grid-cols-3 ${
                            slideDirection === "next"
                                ? "aircraft-slide-next"
                                : "aircraft-slide-prev"
                        }`}
                        id="aircraft"
                    >
                        <div className="rounded-md border border-neutral-200 bg-white lg:col-span-2">
                            <img
                                src={activeAircraft.image}
                                        alt={t(activeAircraft.nameKey)}
                                className="min-w-full max-h-112 rounded-md object-cover"
                            />
                        </div>
                        <div className="relative rounded-md bg-[#001B3A] p-6 pb-24 text-white">
                            <h3 className="mb-2 text-3xl font-bold text-white">
                                        {t(activeAircraft.nameKey)}
                            </h3>
                                    <p className="text-white/75">{t(activeAircraft.descriptionKey)}</p>
                            <ul className="mt-6 space-y-6">
                                <li className="flex justify-between border-b border-[#193151] pb-2">
                                            <span className="font-semibold opacity-50">{t("fleet.range")}</span>
                                    <span>{activeAircraft.range}</span>
                                </li>
                                <li className="flex justify-between border-b border-[#193151] pb-2">
                                            <span className="font-semibold opacity-50">{t("fleet.speed")}</span>
                                    <span>{activeAircraft.speed}</span>
                                </li>
                                <li className="flex justify-between border-b border-[#193151] pb-2">
                                            <span className="font-semibold opacity-50">{t("fleet.capacity")}</span>
                                    <span>{activeAircraft.capacity}</span>
                                </li>
                            </ul>
                            <button className="absolute bottom-20 left-6 right-6 w-auto cursor-pointer rounded-md bg-[#314768] px-4 py-2 text-white transition-colors duration-300 hover:bg-[#193151]">
                                        {t("fleet.fullSpecifications")}
                            </button>
                            <button className="absolute bottom-6 left-6 right-6 flex w-auto cursor-pointer items-center justify-center gap-1 rounded-md bg-[#FF7020] px-4 py-2 text-white transition-colors duration-300 hover:bg-[#E56010]">
                                        {t("fleet.bookAircraft")} <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FleetSection
