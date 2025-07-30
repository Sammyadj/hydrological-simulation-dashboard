import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

export default function MapOverlay() {
    const [geoData, setGeoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/geo/sample.geojson')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch GeoJSON');
                return res.json();
            })
            .then(data => setGeoData(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const onEachFeature = (feature, layer) => {
        const name = feature.properties?.name || 'Zone';
        layer.bindPopup(`<strong>${name}</strong>`);
    };

    if (loading) return <div className="p-4 text-center text-gray-600">Loading map...</div>;
    if (error) return <div className="p-4 text-center text-red-500">Error loading map: {error}</div>;

    return (
        <div className="h-[400px] rounded-xl shadow overflow-hidden">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className="h-full w-full">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
                />
                {geoData && (
                    <GeoJSON data={geoData} onEachFeature={onEachFeature} />
                )}
            </MapContainer>
        </div>
    );
}