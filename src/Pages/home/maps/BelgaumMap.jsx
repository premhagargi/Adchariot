/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { gsap } from "gsap";
import CallToAction from "../services/CTA";
import { motion } from "framer-motion";

const MobileBillboardRoutes = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const routeRefs = useRef([]);

  const routes = [
    {
      "id": 1,
      "name": "KIA Showroom, Udhambhag to JNMC College, Nehru Nagar",
      "description": "A high-visibility route connecting the industrial area of Udyambag to the medical education hub at JNMC College. Ideal for targeting medical students, healthcare professionals, and industrial workers.",
      "visibility": "High",
      "traffic": "Heavy during college hours and shift changes",
      "demographics": "Medical Students, Healthcare Professionals, Industrial Workers",
      "from": {
        "name": "KIA Showroom, Udyambag",
        "coords": [15.8184, 74.4907]
      },
      "to": {
        "name": "JNMC College, Nehru Nagar",
        "coords": [15.8839, 74.5175]
      },
      "recommendedTimes": "8:00 AM - 10:00 AM, 4:00 PM - 7:00 PM",
      "estimatedReach": "1,50,000+ daily viewers"
    },
{
  "id": 2,
  "name": "Udyambhag to Auto Nagar, Belgaum",
  "description": "Strategic route connecting the industrial manufacturing zone to the automobile commercial hub. Perfect for business-to-business advertising and automotive-related promotions.",
  "visibility": "Medium-High",
  "traffic": "Consistent throughout workday with peak business hours",
  "demographics": "Business Owners, Industrial Workers, Automotive Professionals",
  "from": {
    "name": "Udyambag",
    "coords": [15.8184, 74.4907]
  },
  "to": {
    "name": "Auto Nagar, Belgaum",
    "coords": [15.8356, 74.4855]
  },
  "recommendedTimes": "9:00 AM - 6:00 PM",
  "estimatedReach": "1,20,000+ daily viewers"
}
  ];

  const RouteMap = ({ route }) => {
    useEffect(() => {
      if (L.DomUtil.get("route-map") !== null) {
        L.DomUtil.get("route-map")._leaflet_id = null;
      }

      const map = L.map("route-map", {
        zoomControl: true,
        scrollWheelZoom: false,
      }).setView(
        [
          (route.from.coords[0] + route.to.coords[0]) / 2,
          (route.from.coords[1] + route.to.coords[1]) / 2,
        ],
        13
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19,
      }).addTo(map);

      const customIcon = L.icon({
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        shadowSize: [41, 41],
      });

      const startPoint = L.latLng(route.from.coords[0], route.from.coords[1]);
      const endPoint = L.latLng(route.to.coords[0], route.to.coords[1]);

      L.marker(startPoint, { icon: customIcon })
        .addTo(map)
        .bindPopup(`<div class='font-bold'>${route.from.name}</div>`, {
          className: "custom-popup",
        });

      L.marker(endPoint, { icon: customIcon })
        .addTo(map)
        .bindPopup(`<div class='font-bold'>${route.to.name}</div>`, {
          className: "custom-popup",
        });

      L.Routing.control({
        waypoints: [startPoint, endPoint],
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: "#6366f1", weight: 5, opacity: 0.8 }],
        },
        createMarker: () => null,
        show: false,
      }).addTo(map);

      return () => {
        map.remove();
      };
    }, [route]);

    return (
      <div
        id="route-map"
        className="h-80 w-full rounded-xl overflow-hidden shadow-lg z-0"
      />
    );
  };

  useEffect(() => {
    routeRefs.current.forEach((ref, index) => {
      if (ref && selectedRoute === index) {
        gsap.fromTo(
          ref,
          { height: 0, opacity: 0 },
          {
            height: "auto",
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          }
        );
      }
    });
  }, [selectedRoute]);

  return (
    <div className="min-h-screen ">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="mb-16 text-center">
        <div className="text-center">
      <h2 className="text-4xl font-regular text-gray-900 tracking-tight sm:text-5xl flex flex-wrap justify-center gap-2">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          Belgaum's
        </motion.span>
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Elite
        </motion.span>
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Mobile
        </motion.span>
      </h2>
      <h2 className="text-4xl font-regular text-gray-900 tracking-tight sm:text-5xl flex flex-wrap justify-center gap-2">
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Billboard
        </motion.span>
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Network
        </motion.span>
      </h2>
    </div>
    <motion.p
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-4 max-w-3xl mx-auto text-lg text-gray-600"
    >
      Connect with your audience through our cutting-edge 3D mobile
      billboard routes across Belgaum.
    </motion.p>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Premium Routes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <div
                key={route.id}
                className="group relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
                onClick={(e) => {
                  if (e.target.closest(".route-map-container")) return;
                  setSelectedRoute(selectedRoute === index ? null : index);
                }}
              >
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors">
                    {route.name}
                  </h4>
                  <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                    {route.description}
                  </p>
                </div>

                {selectedRoute === index && (
                  <div
                    ref={(el) => (routeRefs.current[index] = el)}
                    className="bg-gray-50 p-6 border-t border-gray-100 overflow-hidden"
                  >
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Visibility</span>
                        <span className="font-medium text-gray-900">
                          {route.visibility}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Daily Reach</span>
                        <span className="font-medium text-gray-900">
                          {route.estimatedReach}
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 route-map-container">
                      <RouteMap route={route} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <CallToAction />
      </main>
    </div>
  );
};

export default MobileBillboardRoutes;