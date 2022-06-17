import { useEffect, useState } from 'react';
import CafePhotos from './CafePhotos';
import CafeMap from './CafeMap';
import CafeHours from './CafeHours';

const initialCafe = {
	id: 'YaUGYnfBjq1V-sI0BSokSQ',
	alias: 'ovation-coffee-and-tea-portland',
	name: 'Ovation Coffee & Tea',
	image_url:
		'https://s3-media4.fl.yelpcdn.com/bphoto/ID5RxkzemJgM1G3_o4sDcg/o.jpg',
	is_claimed: true,
	is_closed: false,
	url: 'https://www.yelp.com/biz/ovation-coffee-and-tea-portland?adjust_creative=7WSh5hm-77DZHx56Edv55g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=7WSh5hm-77DZHx56Edv55g',
	phone: '+15037197716',
	display_phone: '(503) 719-7716',
	review_count: 793,
	categories: [
		{
			alias: 'breakfast_brunch',
			title: 'Breakfast & Brunch',
		},
		{
			alias: 'gluten_free',
			title: 'Gluten-Free',
		},
		{
			alias: 'coffee',
			title: 'Coffee & Tea',
		},
	],
	rating: 5,
	location: {
		address1: '941 NW Overton St',
		address2: '',
		address3: '',
		city: 'Portland',
		zip_code: '97209',
		country: 'US',
		state: 'OR',
		display_address: ['941 NW Overton St', 'Portland, OR 97209'],
		cross_streets: '',
	},
	coordinates: {
		latitude: 45.5323049662902,
		longitude: -122.681181021717,
	},
	photos: [
		'https://s3-media4.fl.yelpcdn.com/bphoto/ID5RxkzemJgM1G3_o4sDcg/o.jpg',
		'https://s3-media4.fl.yelpcdn.com/bphoto/vaGyB9u9nhV-Z1XWV9ixBg/o.jpg',
		'https://s3-media2.fl.yelpcdn.com/bphoto/TmgO-Db06XaWze9irs92IA/o.jpg',
	],
	price: '$',
	hours: [
		{
			open: [
				{
					is_overnight: false,
					start: '0600',
					end: '1800',
					day: 0,
				},
				{
					is_overnight: false,
					start: '0600',
					end: '1800',
					day: 1,
				},
				{
					is_overnight: false,
					start: '0600',
					end: '1800',
					day: 2,
				},
				{
					is_overnight: false,
					start: '0600',
					end: '1800',
					day: 3,
				},
				{
					is_overnight: false,
					start: '0600',
					end: '1800',
					day: 4,
				},
				{
					is_overnight: false,
					start: '0700',
					end: '1700',
					day: 5,
				},
				{
					is_overnight: false,
					start: '0700',
					end: '1700',
					day: 6,
				},
			],
			hours_type: 'REGULAR',
			is_open_now: true,
		},
	],
	transactions: ['delivery'],
};

function CafeDetails(props) {
	const [cafe, setCafe] = useState(initialCafe);

	useEffect(() => {
		fetch(
			// Fetch 10 cafes that are within a ~10-mile radius of the submitted location.
			`https://api.yelp.com/v3/businesses/${cafe.alias}`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				setCafe(data);
				console.log(cafe);
			})
			.catch((err) => {
				console.err('Uh-oh, something went wrong...', err);
			});
	}, [cafe]);

	return (
		<section>
			<CafePhotos cafe={cafe} />
			<CafeMap cafe={cafe} />
			<CafeHours cafe={cafe} />
		</section>
	);
}

export default CafeDetails;
