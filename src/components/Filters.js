import { Dropdown } from 'bootstrap';
import { useState, useEffect } from 'react';
import './Filters.css';

function Filters({ location, setCafes }) {
	// Display the filters with a dropdown button.
	const [isOpen, setIsOpen] = useState(false);

	const handleDropdownDisplay = () => {
		setIsOpen(!isOpen);
	};

	const [is1$Checked, setIs1$Checked] = useState(false);
	const [is2$Checked, setIs2$Checked] = useState(false);
	const [is3$Checked, setIs3$Checked] = useState(false);

	const baseUrl = `https://seir-cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=cafe,coffee,tea&location=${location}&radius=16000&limit=10&sort_by=distance`;

	const [url, setUrl] = useState(baseUrl);

	const handleFilterSubmit = (e) => {
		e.preventDefault();
		let formattedUrl = '';
		let price1 = '';
		let price2 = '';
		let price3 = '';

		if (is1$Checked) {
			price1 = '1';
		}
		if (
			(is1$Checked && is2$Checked) ||
			(is1$Checked && is3$Checked) ||
			(is1$Checked && is2$Checked && is3$Checked)
		) {
			price1 = '1,';
		}
		if (is2$Checked) {
			price2 = '2';
		}
		if (is2$Checked && is3$Checked) {
			price2 = '2,';
		}
		if (is3$Checked) {
			price3 = '3';
		}

		formattedUrl = `${baseUrl}&price=${price1}${price2}${price3}`;

		if (!is1$Checked && !is2$Checked && !is3$Checked) {
			formattedUrl = baseUrl;
		}
		setUrl(formattedUrl);
	};

	useEffect(() => {
		fetch(url, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data.businesses);
				setCafes(data.businesses);
			})
			.catch((err) => {
				console.log('Uh-oh, something went wrong...', err);
			});
	}, [url]);

	return (
		<div>
			<button type='button' onClick={handleDropdownDisplay}>
				Filters
			</button>
			<form
				onSubmit={handleFilterSubmit}
				className={isOpen ? 'form-display' : 'form-display-none'}>
				<p>Price</p>
				<input
					type='checkbox'
					name='price-1$'
					id='price-1$'
					checked={is1$Checked}
					onChange={() => setIs1$Checked(!is1$Checked)}
				/>
				<label htmlFor='price-1$'>$</label>
				<input
					type='checkbox'
					name='price-2$'
					id='price-2$'
					checked={is2$Checked}
					onChange={() => setIs2$Checked(!is2$Checked)}
				/>
				<label htmlFor='price-2$'>$$</label>
				<input
					type='checkbox'
					name='price-3$'
					id='price-3$'
					checked={is3$Checked}
					onChange={() => setIs3$Checked(!is3$Checked)}
				/>
				<label htmlFor='price-3$'>$$$</label>
				<br />
				<button type='submit' onClick={handleDropdownDisplay}>
					Apply
				</button>
			</form>
		</div>
	);
}

export default Filters;
