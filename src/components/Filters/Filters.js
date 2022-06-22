import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './Filters.css';

function Filters({ location, setCafes }) {
	const [isOpen, setIsOpen] = useState(false);

	const [is1$Checked, setIs1$Checked] = useState(false);
	const [is2$Checked, setIs2$Checked] = useState(false);
	const [is3$Checked, setIs3$Checked] = useState(false);

	const baseUrl = `https://seir-cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=cafe,coffee,tea&location=${location}&radius=16000&limit=10&sort_by=distance`;

	const [url, setUrl] = useState(baseUrl);

	const handleApplyFilters = (e) => {
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
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (location) {
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
		}
	}, [url]);

	if (location) {
		return (
			<div>
				{/* Render a dropdown with Bootstrap styling. */}
				<DropdownButton
					title='Filters'
					autoClose='outside'
					show={isOpen}
					onToggle={() => {
						setIsOpen(!isOpen);
					}}>
					<Dropdown.ItemText>Price</Dropdown.ItemText>
					<Dropdown.Item onClick={() => setIs1$Checked(!is1$Checked)}>
						<input
							type='checkbox'
							name='price-1$'
							id='price-1$'
							checked={is1$Checked}
							readOnly
						/>
						<label htmlFor='price-1$'>$</label>
					</Dropdown.Item>
					<Dropdown.Item onClick={() => setIs2$Checked(!is2$Checked)}>
						<input
							type='checkbox'
							name='price-2$'
							id='price-2$'
							checked={is2$Checked}
							readOnly
						/>
						<label htmlFor='price-2$'>$$</label>
					</Dropdown.Item>
					<Dropdown.Item onClick={() => setIs3$Checked(!is3$Checked)}>
						<input
							type='checkbox'
							name='price-3$'
							id='price-3$'
							checked={is3$Checked}
							readOnly
						/>
						<label htmlFor='price-3$'>$$$</label>
					</Dropdown.Item>
					<Dropdown.Item>
						<button onClick={handleApplyFilters}>Apply</button>
					</Dropdown.Item>
				</DropdownButton>
			</div>
		);
	}
}

export default Filters;
