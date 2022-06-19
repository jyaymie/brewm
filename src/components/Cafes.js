import React from 'react';
import { Link } from 'react-router-dom';
import './Cafes.css';

function Cafes({ cafes }) {
	// Convert meters to miles.
	const getMiles = (meters) => {
		return meters * 0.000621371;
	};

	return (
		<section className='results-container'>
			{cafes.map((cafe) => (
				<Link to={`${cafe.id}`} key={cafe.id}>
					<div className='result'>
						<div className='result-text'>
							<div className='result-name'>{cafe.name}</div>
							<div className='result-distance'>
								{getMiles(cafe.distance).toFixed(2)} mi away
							</div>
						</div>
						<div
							className='result-image'
							style={{
								backgroundImage: `url(${cafe.image_url})`,
							}}
						/>
					</div>
				</Link>
			))}
		</section>
	);
}

export default Cafes;
