import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Search from '../Search/Search';
import FiltersNav from '../FiltersNav/FiltersNav';
import Cafes from '../Cafes/Cafes';

function Home() {
	// use setSearchParams to track the search query entered by the user in the Search form.
	const [searchParams, setSearchParams] = useSearchParams();
	// Pull the query out of the URL.
	const requestedSearch = searchParams.get('location');
	// Handle API results.
	const [cafeResults, setCafeResults] = useState(null);

	const [location, setLocation] = useState('');
	// Use setCafes when data is retrieved in the following useEffect.
	const [cafes, setCafes] = useState([]);

	useEffect(() => {
		console.log(searchParams.get('query'));
		setLocation(requestedSearch);
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
					setCafeResults(data.businesses);
				})
				.catch((err) => {
					console.log('Uh-oh, something went wrong...', err);
				});
		}
		// Trigger useEffect when a new location is submitted.
	}, [location, requestedSearch]);

	return (
		<div>
			<Search
				location={location}
				setLocation={setLocation}
				searchParams={searchParams}
				setSearchParams={setSearchParams}
			/>
			<FiltersNav location={location} cafes={cafes} setCafes={setCafes} />
			<Cafes
				cafes={cafes}
				requestedSearch={requestedSearch}
				cafeResults={cafeResults}
			/>
		</div>
	);
}

export default Home;
