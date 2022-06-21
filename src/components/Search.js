import './Search.css';
// Photo by <a href="https://unsplash.com/@jckbck?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jakub Dziubak</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  import backgroundImage from '../assets/search-background.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

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
			style={{ backgroundImage: `url(${backgroundImage})` }}>
			<header>
				<h1>brewm</h1>
			</header>
			<Form onSubmit={handleSearchSubmit} className='search-form'>
				<Form.Group>
					<Form.Label htmlFor='location' className='search-label'>
						Location
					</Form.Label>
					<Form.Control
						type='text'
						id='location'
						placeholder='san diego, ca'
						onChange={(e) => {
							setLocationText(e.target.value);
						}}
						value={locationText}
					/>
				</Form.Group>
				<Button type='submit' variant='primary' className='search-submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default Search;
