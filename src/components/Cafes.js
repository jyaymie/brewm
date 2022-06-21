import './Cafes.css';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Filters from './Filters';

// Convert meters to miles.
const getMiles = (meters) => {
	return meters * 0.000621371;
};

function Cafes({ location, cafes, setCafes }) {
	return (
		<div>
			<header className='cafes-header'>
				<div className='filters-container'>
					<Filters location={location} setCafes={setCafes} />
				</div>
				<div className='header-text-container'>
					<p className='header-text'>brewms near</p>
					<p className='location-text'>{location}</p>
				</div>
				<div className='search-link-container'>
					<Link to='/'>
						<FaSearch className='search-icon' />
					</Link>
				</div>
			</header>
			<section className='results-container'>
				{cafes.map((cafe) => (
					<Link to={`${cafe.id}`} key={cafe.id}>
						<div className='result'>
							<div className='result-text'>
								<div className='result-name'>{cafe.name}</div>
								<div className='result-distance'>
									{getMiles(cafe.distance).toFixed(2)} miles away
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
