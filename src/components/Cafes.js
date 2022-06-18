import React from 'react';
import { Link } from 'react-router-dom';

function Cafes({ cafes }) {
	return (
		<section>
			{cafes.map((cafe) => (
				<Link to={`${cafe.id}`} key={cafe.id}>
					<div className='result'>
						<div className='result-name'>{cafe.name}</div>
						<div className='result-distance'>{cafe.distance} meters away</div>
					</div>
				</Link>
			))}
		</section>
	);
}

export default Cafes;
