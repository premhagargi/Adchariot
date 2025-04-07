/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import CallToAction from "../services/CTA";
const MobileBillboardRoutes = () => {
  const [selectedRoute, setSelectedRoute] = useState(0);
  
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
      // Check if map already exists
      if (L.DomUtil.get("route-map") !== null) {
        L.DomUtil.get("route-map")._leaflet_id = null;
      }
      
      // Initialize map
      const map = L.map("route-map").setView([
        (route.from.coords[0] + route.to.coords[0]) / 2,
        (route.from.coords[1] + route.to.coords[1]) / 2
      ], 13);
      
      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19
      }).addTo(map);
      
      // Custom icon for markers
      const customIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        shadowSize: [41, 41]
      });
      
      // Add markers for the two points
      const startPoint = L.latLng(route.from.coords[0], route.from.coords[1]);
      const endPoint = L.latLng(route.to.coords[0], route.to.coords[1]);
      
      // Add markers with popups
      L.marker(startPoint, {icon: customIcon})
        .addTo(map)
        .bindPopup(`<div class='font-bold'>${route.from.name}</div>`, 
          {className: 'custom-popup'})
        .openPopup();
      
      L.marker(endPoint, {icon: customIcon})
        .addTo(map)
        .bindPopup(`<div class='font-bold'>${route.to.name}</div>`, 
          {className: 'custom-popup'})
        .openPopup();
      
      // Add routing between points
      const routingControl = L.Routing.control({
        waypoints: [startPoint, endPoint],
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: "#3B82F6", weight: 5, opacity: 0.7 }],
          extendToWaypoints: true,
          missingRouteTolerance: 0
        },
        createMarker: function() { return null; },
        show: false
      }).addTo(map);
      
      // Add a route info box
      const routeInfoBox = L.control({position: 'bottomleft'});
      routeInfoBox.onAdd = function() {
        const div = L.DomUtil.create('div', 'route-info-box bg-white bg-opacity-80 p-4 rounded-lg shadow-lg m-4');
        div.innerHTML = `
          <h3 class="text-lg font-bold text-blue-600 mb-2">Billboard Route ${route.id}</h3>
          <p><strong>From:</strong> ${route.from.name}</p>
          <p><strong>To:</strong> ${route.to.name}</p>
          <p class="text-sm text-gray-600 mt-2">Loading route details...</p>
        `;
        return div;
      };
      // routeInfoBox.addTo(map); //route info on map
      
      // Update info when route is calculated
      routingControl.on('routesfound', function(e) {
        const routes = e.routes;
        const summary = routes[0].summary;
        const distanceInKm = Math.round((summary.totalDistance / 1000) * 10) / 10;
        const timeInMin = Math.round(summary.totalTime / 60);
        
        const routeInfoElement = document.querySelector('.route-info-box');
        if (routeInfoElement) {
          routeInfoElement.querySelector('.text-sm').innerHTML = 
            `<span class="font-semibold">Distance:</span> ${distanceInKm} km<br>` +
            `<span class="font-semibold">Drive time:</span> ${timeInMin} min<br>` +
            `<span class="font-semibold">Est. reach:</span> ${route.estimatedReach}`;
        }
      });
      
      return () => {
        map.remove(); // Clean up map on unmount
      };
    }, [route]);
    
    return <div id="route-map" className="h-96 w-full rounded-md overflow-hidden shadow-md"></div>;
  };
  
  return (
    <div className="bg-gray-50 fit-content bg-transparent">
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4">
        {/* Intro Section */}
        <section className="mb-12 text-center">
  <h2 className="text-2xl font-bold text-black mb-4">Belgaum's Premier Mobile Billboard Routes</h2>
  <p className="max-w-3xl mx-auto text-black">
    Reach your target audience effectively across Belgaum with our strategically planned 3D mobile billboard routes.
  </p>
</section>
        
        {/* Featured Routes */}
        <section className="mb-12">
  <h3 className="text-xl font-semibold text-black mb-6 border-b pb-2">Featured Routes</h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  {routes.map((route, index) => (
    <div
      key={route.id}
      className={`rounded-2xl overflow-hidden cursor-pointer transition-all`}
      onClick={(e) => {
        // Prevent click propagation from RouteMap to the parent div
        if (e.target.closest('.route-map-container')) {
          return;
        }
        setSelectedRoute(selectedRoute === index ? null : index);
      }}
    >
<div className="p-4 rounded-b-2xl h-[135px] transition-colors duration-300 ease-in-out"
     style={{ backgroundColor: selectedRoute === index ? 'rgb(19, 12, 213)' : 'white' }}
>        <h4 style={{ color: selectedRoute === index ? '#fff' : 'blue' }} className="font-bold text-lg ">{route.name}</h4>
        <p style={{ color: selectedRoute === index ? '#fff' : 'gray' }}  className="text-sm mt-1 line-clamp-2">{route.description}</p>
      </div>
      {selectedRoute === index && (
        <div className="bg-transparent p-4 text-sm transition-all duration-500 ease-in-out">
          <div className="flex justify-between">
            <span className="text-black">Visibility</span>
            <span className="font-medium text-black">{route.visibility}</span>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-black">Est. Daily Reach</span>
            <span className="font-medium text-black">{route.estimatedReach}</span>
          </div>
          <div className="mt-4 route-map-container"> 
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