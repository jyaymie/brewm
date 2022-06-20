import './CafeDetails.css';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CafePhotos from './CafePhotos';
import CafeLocation from './CafeLocation';
import CafeHours from './CafeHours';

function CafeDetails() {
	const [cafe, setCafe] = useState({
		location: {
			display_address: [],
		},
		coordinates: {},
		photos: [],
		hours: [
			{
				open: [],
			},
		],
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
			<header>
				<h1>{cafe.name}</h1>
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
