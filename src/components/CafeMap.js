import React from 'react';

function CafeMap({ cafe }) {
	return (
		<div>Location:
			<p>{cafe.coordinates.latitude}</p>
			<p>{cafe.coordinates.longitude}</p>
		</div>
	);
}

export default CafeMap;
