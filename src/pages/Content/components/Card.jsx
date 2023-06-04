import React from 'react';
import '../../../assets/styles/tailwind.css';

const Card = (props) => {
    return <div id="facebook-product-card">
                <div className="relative">
                    <a href="#">
                        <img
                            src="https://scontent.frix7-1.fna.fbcdn.net/v/t45.5328-4/328285377_8876761889064007_3666937959392068286_n.jpg?stp=c0.0.750.750a_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=c48759&_nc_ohc=GwHbg0bn4jsAX-4KfL7&_nc_ht=scontent.frix7-1.fna&oh=00_AfD8MvGn6m5PRP5jluq1qZtOBW-6aQiciS3vGpZFaKWyEw&oe=6480D755"
                            alt="product-image"
                            className="hover:opacity-75 transition ease-in-out duration-150"
                        />
                    </a>
                </div>
                <div className="mt-4">
                    <a href="#" className="text-lg font-bold hover:text-gray-300">
                        Product title
                    </a>
                </div>
                <div className="flex items-center text-gray-400 space-x-2 text-sm mt-1">
                    <div className="flex space-x-1">
                        <span>Price</span>
                        <span>Location</span>
                        <span>CTA</span>
                    </div>
                </div>
            </div>;
};

export default Card;