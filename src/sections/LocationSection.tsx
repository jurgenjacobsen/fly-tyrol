import { useTranslation } from "react-i18next"
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet"
import L from "leaflet"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"

// Fix for default marker icon in Leaflet + Vite/Webpack
// @ts-expect-error - Leaflet icon property exists
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
})

function LocationSection() {
    const { t } = useTranslation()
    const position: [number, number] = [47.257489, 11.354347]

    return (
        <section className="py-12 md:py-16 bg-[#EBF1FF]" id="location">
            <div className="mx-auto grid max-w-7xl items-stretch gap-6 px-6 lg:grid-cols-2">
                <div className="rounded-md bg-[#001B3A] p-8 text-white">
                    <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#FF7020]">
                        {t("location.eyebrow")}
                    </p>
                    <h2 className="mb-4 text-3xl text-white">
                        {t("location.title")}
                    </h2>
                    <p className="mb-6 text-white/80">
                        {t("location.description")}
                    </p>

                    <div className="space-y-2 text-lg">
                        <p className="text-white">47.257489, 11.354347</p>
                        <p className="text-white">Fürstenweg 176</p>
                        <p className="text-white">A-6020 Innsbruck-Airport</p>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/xzCon3mRxGqQCpRY8"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 inline-flex items-center rounded-md bg-[#FF7020] px-4 py-2 text-white transition-colors duration-300 hover:bg-[#E56010]"
                    >
                        {t("location.directions")}
                    </a>
                </div>

                <div className="min-h-90 overflow-hidden rounded-md border border-neutral-200 bg-white">
                    <MapContainer
                        center={position}
                        zoom={15}
                        scrollWheelZoom={false}
                        zoomControl={false}
                        className="h-full min-h-90 w-full"
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        />
                        <ZoomControl position="topright" />
                        <Marker position={position} />
                    </MapContainer>
                </div>
            </div>
        </section>
    )
}

export default LocationSection
