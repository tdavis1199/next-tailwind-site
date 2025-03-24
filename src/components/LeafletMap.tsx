'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers
delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
});

// Airport locations
const airports = [
  {
    name: 'Toronto Pearson International Airport',
    position: [43.6777, -79.6248],
    code: 'YYZ'
  },
  {
    name: 'Billy Bishop Toronto City Airport',
    position: [43.6284, -79.3956],
    code: 'YTZ'
  },
  {
    name: 'Oshawa Executive Airport',
    position: [43.9227, -78.8947],
    code: 'YOO'
  },
  {
    name: 'Windsor International Airport',
    position: [42.2756, -82.9556],
    code: 'CYQG'
  },
  {
    name: 'Ottawa Macdonald-Cartier International Airport',
    position: [45.3223, -75.6692],
    code: 'CYOW'
  },
  {
    name: 'Montréal-Pierre Elliott Trudeau International Airport',
    position: [45.4706, -73.7408],
    code: 'CYUL'
  },
  {
    name: 'Québec City Jean Lesage International Airport',
    position: [46.7934, -71.3967],
    code: 'CYQB'
  }
];

export default function LeafletMap() {
  return (
    <MapContainer 
      center={[44.5, -76]} // Centered to show all airports
      zoom={6} // Zoomed out to show the wider area
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {airports.map((airport) => (
        <Marker 
          key={airport.code}
          position={airport.position as [number, number]} 
        >
          <Popup>
            <div className="font-semibold">{airport.name}</div>
            <div className="text-sm text-gray-600">{airport.code}</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
