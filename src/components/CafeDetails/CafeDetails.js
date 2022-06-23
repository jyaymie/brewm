import './CafeDetails.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CafePhotos from '../CafePhotos/CafePhotos';
import CafeLocation from '../CafeLocation/CafeLocation';
import CafeHours from '../CafeHours/CafeHours';
import CafeContact from '../CafeContact/CafeContact';

function CafeDetails() {
	const [cafe, setCafe] = useState({
		location: {
			display_address: [],
		},
		coordinates: {},
		photos: [],
	});

	// Grab the id param from the URL.
	const { id } = useParams();

	// Track loading and error states of the application for the API call.
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		setLoading(true);
		setError('');
		if (!cafe.id) {
			fetch(
				`https://seir-cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
					},
				}
			)
				.then((res) => res.json())
				.then((data) => {
					console.log('Success!', data);
					setCafe(data);
					setLoading(false);
				})
				.catch((err) => {
					console.log('Hm, something went wrong...', err);
					setError(
						'Uh-oh! Something went wrong. Please check this brewm out later.'
					);
					setLoading(false);
				});
		}
	}, []);

	return (
		<div className='details-container'>
			<header className='details-header'>
				<h2>{cafe.name}</h2>
			</header>
			<section>
				<div>
					<CafePhotos cafe={cafe} />
					<br />
				</div>
				<div className='details-text'>
					{!loading && <CafeLocation cafe={cafe} />}
					<br />
					{!loading && <CafeHours cafe={cafe} />}
					<br />
					{!loading && <CafeContact cafe={cafe} />}
				</div>
			</section>
			{/* If error is truthy, display the error message. */}
			{error && error}
			{/* If loading is truthy, display the loading message. */}
			{loading && 'Grabbing the deets!'}
		</div>
	);
}

export default CafeDetails;
