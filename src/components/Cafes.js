import React from 'react';
import {Link} from 'react-router-dom';
import CafeDetails from './CafeDetails';

function Cafes({ cafes }) {
	return (
		<section>
			{cafes.map((cafe) => (
				<div className='result' key={cafe.id}>
					<div className='result-name'>{cafe.name}</div>
					<div className='result-distance'>{cafe.distance} meters away</div>
					<CafeDetails />
				</div>
			))}
		</section>
	);
}

export default Cafes;
