import './Cafes.css';
import { Link } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';

// Convert default meters to miles.
// Round to the hundredths place.
const getMiles = (meters) => {
	return (meters * 0.000621371).toFixed(2);
};

function Cafes({ cafes, requestedSearch, cafeResults }) {
	// Show an error message if the user did not submit a query.
	// if (!requestedSearch) {
	// 	return (
	// 		<div>Oops, you must enter a location! Click <Link to='/'>here</Link> to go back.</div>
	// 	)
	// }

	// While results are loading, return null.
	if (!cafeResults) {
		return null;
	}

	// When results have loaded, show the results.
	return (
		<div>
			<header className='cafes-header'></header>
			<section className='results-container'>
				{/* Make each result a link to the selected cafe's details page. */}
				{cafes.map((cafe) => (
					<Link to={`cafe-details/${cafe.id}`} key={cafe.id}>
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
