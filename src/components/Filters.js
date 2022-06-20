import { useState, useEffect } from 'react';

function Filters({ location }) {
	const [is1$Checked, setIs1$Checked] = useState(false);
	const [is2$Checked, setIs2$Checked] = useState(false);
	const [is3$Checked, setIs3$Checked] = useState(false);

	const baseUrl = `https://api.yelp.com/v3/businesses/search?categories=cafe,coffee,tea&location=${location}&radius=16000&limit=10&sort_by=distance`;

	useEffect(() => {
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
	}, [is1$Checked, is2$Checked, is3$Checked]);

	return (
		<div>
			Filters
			<div>
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
			</div>
		</div>
	);
}

export default Filters;
