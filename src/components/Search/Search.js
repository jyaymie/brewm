import './Search.css';
// Photo by <a href="https://unsplash.com/@jckbck?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jakub Dziubak</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// import backgroundImage from '../assets/search-background.jpg';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Search({ location, setLocation }) {
	const [locationText, setLocationText] = useState(location);
	// let navigate = useNavigate();

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		setLocation(locationText);
		// Programmatically navigate to the search results.
		// https://reactrouter.com/docs/en/v6/hooks/use-navigate
		// navigate('cafes');
	};

	// For the .search-container div: style={{ backgroundImage: `url(${backgroundImage})` }}
	return (
		<div className='search-container'>
			{/* <header>
				<h1>brewm</h1>
			</header> */}
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
