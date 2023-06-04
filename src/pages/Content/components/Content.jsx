import React, {useEffect} from 'react';
import '../../../assets/styles/tailwind.css';
import Card from "./Card";

const Content = (props) => {
    useEffect(() => {

    }, []);

    return <div>
        <h1 className="bg-red-500">TTTThe product to search in FB: {props.product}</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <Card />
            <Card />
            <Card />
        </div>
    </div>;
};

export default Content;