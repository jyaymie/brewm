import './CafeDetails.css';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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

	const { id } = useParams();

	useEffect(() => {
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
					setCafe(data);
					console.log(data);
				})
				.catch((err) => {
					console.log('Uh-oh, something went wrong...', err);
				});
		}
	}, []);

	return (
		<div className='details-container'>
			<header className='details-header'>
				<div className='back-link'>
					<Link to='/cafes'>
						<p className='back-link-text'>Back</p>
					</Link>
				</div>
				<h2>{cafe.name}</h2>
				<CafeContact cafe={cafe} />
			</header>
			<section>
				<div>
					<CafePhotos cafe={cafe} />
				</div>
				<div className='details-text'>
					<CafeLocation cafe={cafe} />
					<CafeHours cafe={cafe} />
				</div>
			</section>
		</div>
	);
}

export default CafeDetails;
