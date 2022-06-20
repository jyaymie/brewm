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
		<div>
			<header>
				<h1>Find a Brewm</h1>
			</header>
			<form onSubmit={handleSearchSubmit}>
				<label htmlFor='location'>Location: </label>
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
