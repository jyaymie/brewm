import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Search from './components/Search';
import Cafes from './components/Cafes';
import CafeDetails from './components/CafeDetails';

function App() {
	const [location, setLocation] = useState('');
	const [cafes, setCafes] = useState([]);

	useEffect(() => {
		if (location) {
			fetch(
				// Fetch 10 cafes that are within a ~10-mile radius of the submitted location.
				// Use Heroku as a workaround for CORS errors. (Thank you, Esin Saridubak!)
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
	}, [location]);

	return (
		<div className='app'>
			<main>
				<Routes>
					<Route
						path='/'
						element={<Search location={location} setLocation={setLocation} />}
					/>
					<Route
						path='cafes'
						element={
							<Cafes location={location} cafes={cafes} setCafes={setCafes} />
						}
					/>
					<Route path='cafes/:id' element={<CafeDetails />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
