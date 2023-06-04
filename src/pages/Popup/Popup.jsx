import React, {useState} from 'react';
import '../../assets/styles/tailwind.css';

const Popup = () => {
    const [radius, setRadius] = useState(100)

    return (
        <div className="px-3 py-2">
            <div>
                <span className="text-gray-500">The radius is set to {radius}</span>
            </div>
            <label htmlFor="location-range" className="block mb-2 text-sm font-medium text-gray-500">
                Location radius
            </label>
            <input
                id="location-range"
                type="range"
                value={radius}
                onInput={(e) => setRadius(e.target.value)}
                min="1"
                max="250"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
        </div>
      );
};

export default Popup;
