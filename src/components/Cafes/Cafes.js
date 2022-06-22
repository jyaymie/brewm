import './Cafes.css';
import { Link } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';
// import Filters from '../Filters/Filters';

// Convert default meters to miles.
// Round to the hundredths place.
const getMiles = (meters) => {
	return (meters * 0.000621371).toFixed(2);
};

function Cafes({ location, cafes, setCafes }) {
	return (
		<div>
			<header className='cafes-header'>
				{/* <div className='filters-container'> */}
				{/* <Filters location={location} setCafes={setCafes} /> */}
				{/* </div> */}
				{/* <div className='header-text-container'>
					<h2 className='header-text'>brewms near</h2>
					<h2 className='location-text'>{location}</h2>
				</div>
				<div className='search-link-container'>
					<Link to='/'>
						<FaSearch className='search-icon' />
					</Link>
				</div> */}
			</header>
			<section className='results-container'>
				{/* Make each result a link to the result's details page. */}
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
