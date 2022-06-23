import './Search.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Search({ location, setLocation, searchParams, setSearchParams }) {
	const [locationText, setLocationText] = useState(location);
	const navigate = useNavigate();

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		setLocation(locationText);
		setSearchParams({ location: locationText });
		// navigate(`?query=${locationText}`);
	};

	return (
		<div className='search-container'>
			{/* Render a form with Bootstrap styling. */}
			<Form onSubmit={handleSearchSubmit} className='search-form'>
				<Form.Group>
					<Form.Label htmlFor='location' className='search-label'>
						Location
					</Form.Label>
					<Form.Control
						type='text'
						id='location'
						placeholder='san diego, ca'
						value={locationText}
						onChange={(e) => {
							setLocationText(e.target.value);
						}}
						required
					/>
				</Form.Group>
				<Button type='submit' className='search-button' variant='primary'>
					Search
				</Button>
			</Form>
		</div>
	);
}

export default Search;
