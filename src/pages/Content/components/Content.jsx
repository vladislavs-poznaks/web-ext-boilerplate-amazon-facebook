import React from "react";
import '../../../assets/styles/tailwind.css';
import Card from "./Card";

const Content = (props) => {
    return <div className="mt-4 mb-4 px-4 py-3 rounded-lg shadow-xl space-y-2">
        <div>
            <h3 className="text-sky-700">Consider buying {props.product} used</h3>
            <span className="text-gray-500"></span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {props.items?.length && props.items.slice(0, 10).map(it => {
                return <Card {...it}/>
            })}
        </div>
    </div>;
};

export default Content;