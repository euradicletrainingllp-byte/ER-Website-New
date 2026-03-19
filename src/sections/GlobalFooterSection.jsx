import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useMediaQuery } from "react-responsive";

const createIcon = () => {
  return new L.DivIcon({
    html: `<div class="text-[var(--color-primary-mauve)] text-2xl"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512"><path d="M168 0C75.2 0 0 75.2 0 168c0 87.2 142.4 287.2 168 320 25.6-32.8 168-232.8 168-320C336 75.2 260.8 0 168 0zm0 256c-48.8 0-88-39.2-88-88s39.2-88 88-88 88 39.2 88 88-39.2 88-88 88z"/></svg></div>`,
    className: "",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });
};

const locations = [
  { name: "Texas, USA", coords: [31.9686, -99.9018] },
  { name: "Dubai, UAE", coords: [25.2048, 55.2708] },
  { name: "Hyderabad, India", coords: [17.385, 78.4867] },
];

export default function GlobalFooterSection() {
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(
    () => {
      gsap.from(".gfs-animate", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-bg-white)] relative z-10"
    >
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 xl:px-8 2xl:px-12 py-8 2xl:py-12 text-center">
        <h1 className="text-h1 2xl:text-[64px] gfs-animate">
          OUR GLOBAL{" "}
          <span className="text-[var(--color-primary-mauve)]">FOOTPRINTS</span>
        </h1>
        <p className="italic text-body-sm xl:text-base 2xl:text-lg mt-6 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto gfs-animate">
          Our footprint spans the U.S., U.A.E., and India - blending global
          perspective with local relevance. With our registered office in Texas
          and headquarters in Hyderabad, we design and deliver scalable talent
          systems that drive lasting impact across globe.
        </p>
      </div>

      <div className="h-[270px] sm:h-[420px] xl:h-[520px] 2xl:h-[620px] w-auto sm:w-[80%] 2xl:w-[70%] mx-auto rounded-xl pb-8 2xl:pb-12 relative z-0">
        <MapContainer
          center={[0, 0]}
          zoom={isMobile ? 0.4 : 2}
          scrollWheelZoom={false}
          attributionControl={false}
          className="w-full h-full rounded-3xl 2xl:rounded-[32px]"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {locations.map((loc, i) => (
            <Marker key={i} position={loc.coords} icon={createIcon()}>
              <Tooltip direction="top" offset={[0, -12]} opacity={1}>
                {loc.name}
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
