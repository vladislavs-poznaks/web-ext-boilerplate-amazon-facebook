import React, {useEffect, useState} from 'react';
import '../../../assets/styles/tailwind.css';
import Card from "./Card";
import axios from "axios";

const Content = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        // http://localhost:3333/?product=playstation5&latitude=56.9656&longitude=24.0947

        axios({
            method: 'get',
            url: `http://localhost:3333/?product=${encodeURIComponent(props.product)}&latitude=56.9656&longitude=24.0947`,
        })
            .then((res, err) => {
                console.log(res, err)
            });

    }, []);

    const sampleCardProps = {
        title: "Product title",
        price: "500$",
        location: "Riga",
    }

    return <div className="mt-4 mb-4 px-4 py-3 rounded-lg shadow-xl space-y-2">
        <div>
            <h3 className="text-sky-700">Consider buying {props.product} used</h3>
            <span className="text-gray-500">Here are some options around you...</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <Card {...sampleCardProps}/>
            <Card {...sampleCardProps}/>
            <Card {...sampleCardProps}/>
        </div>
    </div>;
};

export default Content;