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
  // Original airports
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
  },
  // New airports
  { name: 'Sarnia Chris Hadfield Airport', position: [42.9994, -82.3089], code: 'CYZR' },
  { name: 'Coleman A. Young International Airport', position: [42.4095, -83.0101], code: 'KDET' },
  { name: 'Chatham-Kent Airport', position: [42.3064, -82.0819], code: 'CYCK' },
  { name: 'London International Airport', position: [43.0336, -81.1511], code: 'CYXU' },
  { name: 'Region of Waterloo International Airport', position: [43.4602, -80.3832], code: 'CYKF' },
  { name: 'Wiarton Airport', position: [44.7458, -81.1072], code: 'CYVV' },
  { name: 'Toronto Buttonville Municipal Airport', position: [43.8622, -79.3703], code: 'CNY3' },
  { name: 'Toronto/Markham Airport', position: [43.9289, -79.2611], code: 'CNV8' },
  { name: 'Lake Simcoe Regional Airport', position: [44.4853, -79.5556], code: 'CYLS' },
  { name: 'Midland/Huronia Airport', position: [44.6947, -79.9283], code: 'CYEE' },
  { name: 'Muskoka Airport', position: [44.9747, -79.3033], code: 'CYQA' },
  { name: 'Kingston/Norman Rogers Airport', position: [44.2253, -76.5969], code: 'CYGK' },
  { name: 'Peterborough Airport', position: [44.2300, -78.3633], code: 'CYPQ' },
  { name: 'Gatineau-Ottawa Executive Airport', position: [45.5208, -75.5664], code: 'CYND' },
  { name: 'Cornwall Regional Airport', position: [45.0919, -74.5636], code: 'CYCC' },
  { name: 'Montreal/Mirabel International Airport', position: [45.6795, -74.0387], code: 'CYMX' },
  { name: 'Montreal/Saint-Hubert Airport', position: [45.5178, -73.4169], code: 'CYHU' },
  { name: 'Trois-Rivières Airport', position: [46.3528, -72.6794], code: 'CYRQ' },
  { name: 'Buffalo Niagara International Airport', position: [42.9404, -78.7322], code: 'KBUF' },
  { name: 'Niagara Falls International Airport', position: [43.1073, -78.9454], code: 'KIAG' },
  { name: 'Syracuse Hancock International Airport', position: [43.1112, -76.1063], code: 'KSYR' },
  { name: 'Greater Rochester International Airport', position: [43.1189, -77.6724], code: 'KROC' },
  { name: 'Albany International Airport', position: [42.7483, -73.8017], code: 'KALB' },
  { name: 'Sault Ste. Marie Airport', position: [44.9375, -76.0167], code: 'KANJ' },
  { name: 'Watertown International Airport', position: [43.9919, -76.0217], code: 'KART' },
  { name: 'Kalamazoo/Battle Creek International Airport', position: [42.2349, -85.5521], code: 'KAZO' },
  { name: 'Laurence G. Hanscom Field', position: [42.4701, -71.2897], code: 'KBED' },
  { name: 'Beverly Regional Airport', position: [42.5841, -70.9166], code: 'KBVY' },
  { name: 'Burlington International Airport', position: [44.4720, -73.1533], code: 'KBTV' },
  { name: 'Bishop International Airport', position: [42.9655, -83.7435], code: 'KFNT' },
  { name: 'Republic Airport', position: [40.7288, -73.4134], code: 'KFRG' },
  { name: 'Gerald R. Ford International Airport', position: [42.8808, -85.5228], code: 'KGRR' },
  { name: 'Westchester County Airport', position: [41.0670, -73.7076], code: 'KHPN' },
  { name: 'Long Island MacArthur Airport', position: [40.7952, -73.1002], code: 'KISP' },
  { name: 'Capital Region International Airport', position: [42.7786, -84.5874], code: 'KLAN' },
  { name: 'Manchester-Boston Regional Airport', position: [42.9326, -71.4357], code: 'KMHT' },
  { name: 'St. Clair County International Airport', position: [42.9109, -82.5288], code: 'KPHN' },
  { name: 'Willow Run Airport', position: [42.2377, -83.5303], code: 'KYIP' },
  { name: 'Teterboro Airport', position: [40.8502, -74.0608], code: 'KTEB' },
  { name: 'Lehigh Valley International Airport', position: [40.6521, -75.4408], code: 'KABE' },
  { name: 'Erie International Airport', position: [42.0831, -80.1739], code: 'KERI' },
  { name: 'Philadelphia International Airport', position: [39.8721, -75.2411], code: 'KPHL' },
  { name: 'Pittsburgh International Airport', position: [40.4915, -80.2329], code: 'KPIT' },
  { name: 'Washington Dulles International Airport', position: [38.9531, -77.4565], code: 'KIAD' },
  { name: 'Norfolk International Airport', position: [36.8946, -76.2012], code: 'KORF' },
  { name: 'Newport News/Williamsburg International Airport', position: [37.1319, -76.4930], code: 'KPHF' },
  { name: 'John Glenn Columbus International Airport', position: [39.9980, -82.8918], code: 'KCMH' },
  { name: 'Akron-Canton Airport', position: [40.9161, -81.4422], code: 'KCAK' },
  { name: 'Yeager Airport', position: [38.3731, -81.5932], code: 'KCRW' },  
  { name: 'Cleveland Hopkins International Airport', position: [41.4117, -81.8500], code: 'KCLE' }
];

airports.sort((a, b) => a.code.localeCompare(b.code));

export default function LeafletMap() {
  return (
    <MapContainer 
      center={[43.0, -77.0]} // Adjusted center to show more airports
      zoom={5} // Zoomed out to show more area
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
