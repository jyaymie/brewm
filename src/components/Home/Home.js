import { useState, useEffect, useReducer } from 'react';
import { useSearchParams } from 'react-router-dom';
import Search from '../Search/Search';
import FiltersNav from '../FiltersNav/FiltersNav';
import Cafes from '../Cafes/Cafes';

function Home() {
	// Retain state in browser refreshes.
	// Track the search query entered by the user in the Search form.
	const [searchParams, setSearchParams] = useSearchParams();
	const requestedLocation = searchParams.get('location');
	const requestedPrice = searchParams.get('price');
	const [cafeResults, setCafeResults] = useState(null);
	const [priceFilter, setPriceFilter] = useState('');

	const [location, setLocation] = useState('');
	const [cafes, setCafes] = useState([]);

	// Track loading and error states of the application for the API call.
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		// setCafes(null);
		setLoading(true);
		setError('');
		setLocation(requestedLocation);
		if (location) {
			// Fetch 15 cafes that are within a ~10-mile radius of the submitted location and sorted by distance.
			// Use Heroku as a workaround for CORS errors. (Thank you, Esin!)
			let url = `https://seir-cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=cafe,coffee,tea&location=${location}&radius=16000&limit=15&sort_by=distance`;
			// If a price filter is applied, modify the URL.
			url = priceFilter ? `${url}&price=${priceFilter}` : url;

			fetch(url, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
				},
			})
				.then((res) => {
					if (res.status === 404) {
						setError(
							`We couldn't find any brewms near ${location}. Please try another search! `
						);
						setLoading(false);
						return;
					} else if (res.status === 200) {
						return res.json();
					}
				})
				.then((data) => {
					console.log('Success!', data.businesses);
					setCafes(data.businesses);
					setCafeResults(data.businesses);
					setLoading(false);
				})
				.catch((err) => {
					console.log('Hm, something went wrong...', err);
					setError('Uh-oh! Something went wrong. Please try again later.');
					setLoading(false);
				});
		}
		// Trigger useEffect when a new location is submitted or a filter is applied.
	}, [location, priceFilter]);

	return (
		<div>
			<Search
				location={location}
				setLocation={setLocation}
				searchParams={searchParams}
				setSearchParams={setSearchParams}
			/>
			<FiltersNav
				location={location}
				cafes={cafes}
				searchParams={searchParams}
				setSearchParams={setSearchParams}
				setPriceFilter={setPriceFilter}
			/>
			<Cafes cafes={cafes} cafeResults={cafeResults} />
			{/* If error is truthy, display the error message. */}
			{error && error}
			{/* If loading is truthy, display the loading message. */}
			{loading && 'Grabbing the brewms!'}
		</div>
	);
}

export default Home;
