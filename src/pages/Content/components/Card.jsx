import React from 'react';
import '../../../assets/styles/tailwind.css';

const Card = (props) => {

    let title = props.marketplace_listing_title;

    if (title.length > 15) {
        title = title.substring(0, 15).concat('...')
    }

    return <div id="facebook-product-card">
                <div className="relative">
                    <a target="_blank" href={props.share_uri}>
                        <img
                            src={props.primary_listing_photo.thumbnail.uri}
                            alt="product-image"
                            className="rounded-md hover:opacity-75 transition ease-in-out duration-150"
                        />
                    </a>
                </div>
                <div className="mt-4">
                    <a target="_blank" href={props.share_uri} className="text-sky-700 hover:decoration-sky-600">
                        <span className="text-sky-700 text-md font-bold hover:text-sky-600">{title}</span>
                    </a>
                </div>
                <div className="flex items-center space-x-2 text-sm mt-1">
                    <div className="flex space-x-1">
                        <span className="text-gray-500">{props.formatted_price.text}</span>
                        <span className="text-gray-500">{props.location.reverse_geocode_detailed.city}</span>
                    </div>
                </div>
            </div>;
};

export default Card;