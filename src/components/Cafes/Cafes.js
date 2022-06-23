import './Cafes.css';
import { Link } from 'react-router-dom';

// Convert meters to miles and round to the hundredths place.
const getMiles = (meters) => {
	return (meters * 0.000621371).toFixed(2);
};

function Cafes({ cafes, cafeResults }) {
	// While results are loading, return null.
	if (!cafeResults) {
		return null;
	}
	// When results have loaded, show the results.
	return (
		<div>
			<section className='results-container'>
				{/* Render each result as a link to that result's cafe-details page. */}
				{cafes.map((cafe) => (
					<Link
						to={`cafe-details/${cafe.id}`}
						key={cafe.id}
						className='result-link'>
						<div className='result'>
							<div className='result-text'>
								<div className='result-name'>{cafe.name}</div>
								<div className='result-distance'>
									{getMiles(cafe.distance)} miles away
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
		</div>
	);
}

export default Cafes;
