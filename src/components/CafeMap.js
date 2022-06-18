import React from 'react';
import './CafeMap.css'

function CafeMap({ cafe }) {
	return (
		<ul className='location-container'>
			<strong>Location:</strong>
			<li className="address">{cafe.location.display_address[0]}</li>
			<li className="address">{cafe.location.display_address[1]}</li>
		</ul>
	);
}

export default CafeMap;
