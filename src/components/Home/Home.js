import './Home.css';
import backgroundImage from '../../assets/cup-of-brew.jpg';
import { useState, useEffect } from 'react';
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
	const [cafeResults, setCafeResults] = useState('');
	const [priceFilter, setPriceFilter] = useState('');

	const [location, setLocation] = useState('');
	const [cafes, setCafes] = useState([]);

	// Track loading and error states of the application for the API call.
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		setError('');
		setLocation(requestedLocation);
		if (location) {
			// Fetch 15 cafes that are within a ~10-mile radius of the submitted location and sorted by distance.
			// Use Heroku as a workaround for CORS errors. (Thank you, Esin!)
			let url = `https://seir-cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=cafe,coffee,tea&location=${location}&radius=16000&limit=15&sort_by=distance`;
			// If a price filter is applied, modify the URL.
			url = priceFilter ? `${url}&price=${priceFilter}` : url;
			setLoading(true);
			fetch(url, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
				},
			})
				.then((res) => {
					if (res.status === 400) {
						setError(
							`Hm...we couldn't find any brewms near "${location}". Let's do another search.`
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
					console.log('An error! What could this bean...', err);
					setLoading(false);
				});
		}
	}, [location, priceFilter]);

	// Render a background image on the initial load of the application.
	if (!cafes.length) {
		return (
			<div
				className='home-container'
				style={{ backgroundImage: `url(${backgroundImage})` }}>
				<Search
					location={location}
					setLocation={setLocation}
					searchParams={searchParams}
					setSearchParams={setSearchParams}
				/>
				{loading && 'Finding the brewms!'}
				{error && error}
			</div>
		);
	}
	return (
		<div className='home-container'>
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
			{loading && 'Finding your brewms!'}
			{error && error}
		</div>
	);
}

export default Home;
