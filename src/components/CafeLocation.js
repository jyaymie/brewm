import './CafeLocation.css';

function CafeLocation({ cafe }) {
	return (
		<div>
			<ul className='location-container'>
				<strong>Location:</strong>
				<li className='address'>{cafe.location.display_address[0]}</li>
				<li className='address'>{cafe.location.display_address[1]}</li>
			</ul>
			{/* Redirect users to Google Maps with the cafe's location mapped. */}
			<a
				href={`https://maps.google.com?q=${cafe.coordinates.latitude},${cafe.coordinates.longitude}`}
				target='_blank'>
				Map It
			</a>
		</div>
	);
}

export default CafeLocation;
