import { useState } from 'react';

function Search({ location, setLocation }) {
	const [locationText, setLocationText] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		setLocation(locationText);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
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
