import React, {useEffect, useState} from 'react';
import '../../../assets/styles/tailwind.css';
import Card from "./Card";

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

    return <div className="mt-4 mb-4 px-4 py-3 rounded-lg shadow-xl space-y-2">
        <div>
            <h3 className="text-sky-700">Consider buying {props.product} used</h3>
            <span className="text-gray-500">
                {location
                    ? `Your location: Latitude - ${location.latitude}, Longitude - ${location.longitude}`
                    : `Fetching location...`
                }</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <Card {...sampleCardProps}/>
            <Card {...sampleCardProps}/>
            <Card {...sampleCardProps}/>
        </div>
    </div>;
};

export default Content;