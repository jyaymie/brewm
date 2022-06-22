import { useState, useEffect } from 'react';
import Search from '../Search/Search';
import Cafes from '../Cafes/Cafes';
import Filters from '../Filters/Filters';

function Home() {
	const [location, setLocation] = useState('');
	// Use setCafes when data is retrieved in the following useEffect.
	const [cafes, setCafes] = useState([]);

	useEffect(() => {
		if (location) {
			fetch(
				// Fetch 10 cafes that are within a ~10-mile radius of the submitted location.
				// Use Heroku as a workaround for CORS errors. (Thank you, Esin!)
				`https://seir-cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=cafe,coffee,tea&location=${location}&radius=16000&limit=10&sort_by=distance`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
					},
				}
			)
				.then((res) => res.json())
				.then((data) => {
					console.log(data.businesses);
					setCafes(data.businesses);
				})
				.catch((err) => {
					console.log('Uh-oh, something went wrong...', err);
				});
		}
		// Trigger useEffect when a new location is submitted.
	}, [location]);

	return (
		<div>
			<Search location={location} setLocation={setLocation} />
			<Filters location={location} setCafes={setCafes} />
			<Cafes location={location} cafes={cafes} setCafes={setCafes} />
		</div>
	);
}

export default Home;
