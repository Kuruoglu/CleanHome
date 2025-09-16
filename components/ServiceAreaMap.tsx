import { useEffect, useRef } from 'react';
import type { Map } from 'leaflet';

const coordinates: [number, number][] = [
  [45.51405867790738, -94.0904099887802],
  [45.516701377417675, -93.22894319918407],
  [44.90160745470492, -93.22832733627872],
  [44.901511154550684, -94.09592324401353]
];

const ServiceAreaMap = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<Map | null>(null);

  useEffect(() => {
    const initMap = async () => {
      if (!mapContainerRef.current || mapInstanceRef.current) {
        return;
      }

      const L = await import('leaflet');
      mapInstanceRef.current = L.map(mapContainerRef.current, { scrollWheelZoom: false });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapInstanceRef.current);

      const polygon = L.polygon(coordinates, {
        color: '#1B5FFF',
        weight: 2,
        fillColor: '#17B26A',
        fillOpacity: 0.2,
        lineJoin: 'round'
      }).addTo(mapInstanceRef.current);

      mapInstanceRef.current.fitBounds(polygon.getBounds(), { padding: [20, 20] });
      polygon.bindPopup('CleanHome service area');
    };

    initMap();

    return () => {
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div
      id="service-map"
      ref={mapContainerRef}
      className="service-area__map"
      role="region"
      aria-label="Service area map"
    />
  );
};

export default ServiceAreaMap;
