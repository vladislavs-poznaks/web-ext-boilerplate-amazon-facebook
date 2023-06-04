import React, {useEffect, useState} from 'react';
import '../../../assets/styles/tailwind.css';
import Card from "./Card";
import Geolocation from 'react-geolocation';

const Content = (props) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        fetchLocation();
    }, []);

    const fetchLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    setLocation({ latitude, longitude });
                },
                (error) => {
                    console.error(error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    const sampleCardProps = {
        title: "Product title",
        price: "500$",
        location: "Riga",
    }

    return <div>
        <h1 className="bg-red-500">The product to search in FB: {props.product}</h1>
        {location && (
            <p className="mt-2">
            Your location: Latitude - {location.latitude}, Longitude - {location.longitude}
            </p>
        )}
        {!location && <p className="mt-2">Fetching location...</p>}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <Card {...sampleCardProps}/>
            <Card {...sampleCardProps}/>
            <Card {...sampleCardProps}/>
        </div>
    </div>;
};

export default Content;