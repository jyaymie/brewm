import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CafePhotos from './CafePhotos';
import CafeMap from './CafeMap';
import CafeHours from './CafeHours';

function CafeDetails() {
	const [cafe, setCafe] = useState({
		location: {
			display_address: [],
		},
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
		<section>
			<CafePhotos cafe={cafe} />
			<CafeMap cafe={cafe} />
			<CafeHours cafe={cafe} />
		</section>
	);
}

export default CafeDetails;
