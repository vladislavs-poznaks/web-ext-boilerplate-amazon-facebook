import React, {useEffect} from 'react';
import '../../../assets/styles/tailwind.css';

const Content = (props) => {
    useEffect(() => {

    }, []);

    return <div>
        <h1 className="bg-red-500">TTTThe product to search in FB: {props.product}</h1>
    </div>;
};

export default Content;