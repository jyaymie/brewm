import './CafeLocation.css';

function CafeLocation({ cafe }) {
	if (!cafe.location) {
		return (
			<p>
				<em>No address available.</em>
			</p>
		);
	} else {
		return (
			<section>
				<h6>
					<strong>Address</strong>
				</h6>
				<p>{cafe.location.display_address[0]}</p>
				<p>{cafe.location.display_address[1]}</p>
				<p>{cafe.location.display_address[2]}</p>
				<p>{cafe.location.display_address[3]}</p>
				{/* Redirect the user to Google Maps with the cafe's mapped location. */}
				<a
					href={`https://maps.google.com?q=${cafe.coordinates.latitude},${cafe.coordinates.longitude}`}
					target='_blank'
					className='map-link'>
					Map It 📍
				</a>
			</section>
		);
	}
}

export default CafeLocation;
