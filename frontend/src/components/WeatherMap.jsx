import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

export default function WeatherMap({ city }) {

    const position = [city?.lat, city?.lon]

    const RecenterAutomatically = ({lat,lng}) => {
        const map = useMap();
         useEffect(() => {
           map.setView([lat, lng]);
         }, [lat, lng]);
         return null;
    }

    return (
        <>
            <h6 className='mb-3'>
                <strong>Ciudad:</strong> {city?.city} - <strong>Humedad:</strong> {city?.humidity}%
            </h6>
            <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <strong>Ciudad:</strong> {city?.city} <br />
                        <strong>Humedad:</strong> {city?.humidity}%
                    </Popup>
                </Marker>
                <RecenterAutomatically lat={city?.lat} lng={city?.lon} />
            </MapContainer>
        </>
    )
}
