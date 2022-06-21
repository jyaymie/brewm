import './Search.css';
// Photo by <a href="https://unsplash.com/@nbo3?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">TariQ instagram: nbo3</a> on <a href="https://unsplash.com/s/photos/cafe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import backgroundImg from '../assets/search-background.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search({ location, setLocation }) {
	const [locationText, setLocationText] = useState(location);
	let navigate = useNavigate();

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		setLocation(locationText);
		// Programmatically navigate to the search results.
		// https://reactrouter.com/docs/en/v6/hooks/use-navigate
		navigate('cafes');
	};

	return (
		<div
			className='search-container'
			style={{ backgroundImage: `url(${backgroundImg})`}}>
			<header>
				<h1>Find a Brewm</h1>
			</header>
			<form onSubmit={handleSearchSubmit} className='search-form'>
				<label htmlFor='location' className='search-label'>
					Location:
				</label>

				<input
					type='text'
					id='location'
					placeholder='San Diego, CA'
					onChange={(e) => {
						setLocationText(e.target.value);
					}}
					value={locationText}
				/>
				<button type='submit'>Search</button>
			</form>
		</div>
	);
}

export default Search;
