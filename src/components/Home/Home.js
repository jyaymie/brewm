import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Search from '../Search/Search';
import FiltersNav from '../FiltersNav/FiltersNav';
import Cafes from '../Cafes/Cafes';

function Home() {
	// Retain state in browser refreshes.
	// Track the search query entered by the user in the Search form.
	const [searchParams, setSearchParams] = useSearchParams();
	const requestedSearch = searchParams.get('query');
	const [cafeResults, setCafeResults] = useState(null);

	const [location, setLocation] = useState('');
	const [cafes, setCafes] = useState([]);

	const [priceFilter, setPriceFilter] = useState('');

	useEffect(() => {
		setLocation(requestedSearch);
		console.log(priceFilter);
		if (location) {
			let url = `https://seir-cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=cafe,coffee,tea&location=${location}&radius=16000&limit=15&sort_by=distance`;
			url = priceFilter ? url + priceFilter : url;

			fetch(
				// Fetch 15 cafes that are within a ~10-mile radius of the submitted location and sorted by distance.
				// Use Heroku as a workaround for CORS errors. (Thank you, Esin!)
				url,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
					},
				}
			)
				.then((res) => res.json())
				.then((data) => {
					console.log('Success!', data.businesses);
					setCafes(data.businesses);
					setCafeResults(data.businesses);
				})
				.catch((err) => {
					console.log('Uh-oh, something went wrong...', err);
				});
		}
		// Trigger useEffect when a new location is submitted.
	}, [location, priceFilter]);

	return (
		<div>
			<Search
				location={location}
				setLocation={setLocation}
				setSearchParams={setSearchParams}
			/>
			<FiltersNav
				location={location}
				cafes={cafes}
				setSearchParams={setSearchParams}
				setPriceFilter={setPriceFilter}
			/>
			<Cafes cafes={cafes} cafeResults={cafeResults} />
		</div>
	);
}

export default Home;
