import './Search.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Search({ location, setLocation, searchParams, setSearchParams }) {
	const [locationText, setLocationText] = useState(location);

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		setLocation(locationText);
		setSearchParams({ ...searchParams, location: locationText });
	};

	return (
		<div className='search-container'>
			{/* Render a form with Bootstrap styling. */}
			<Form onSubmit={handleSearchSubmit} className='search-form'>
				<Form.Label htmlFor='location' className='search-label'>
					Location:
				</Form.Label>
				<Form.Control
					type='text'
					id='location'
					placeholder='123 sesame st'
					value={locationText}
					onChange={(e) => {
						setLocationText(e.target.value);
					}}
					required
				/>
				<Button type='submit' className='search-button'>
					Search
				</Button>
			</Form>
		</div>
	);
}

export default Search;
