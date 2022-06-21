import './Cafes.css';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Filters from './Filters';

function Cafes({ location, cafes, setCafes }) {
	// Convert meters to miles.
	const getMiles = (meters) => {
		return meters * 0.000621371;
	};

	return (
		<div>
			<header className='cafes-header'>
				<div className='filters-component'>
					<Filters location={location} setCafes={setCafes} />
				</div>
				<h1>
					Brewms Near <span className='location-text'>{location}</span>
				</h1>
				<div className='search-link'>
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
