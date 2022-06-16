import { useState } from 'react';
import Cafes from './Cafes';

const initialCafes = {
	businesses: [
		{
			id: 'YaUGYnfBjq1V-sI0BSokSQ',
			alias: 'ovation-coffee-and-tea-portland',
			name: 'Ovation Coffee & Tea',
			image_url:
				'https://s3-media4.fl.yelpcdn.com/bphoto/ID5RxkzemJgM1G3_o4sDcg/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/ovation-coffee-and-tea-portland?adjust_creative=7WSh5hm-77DZHx56Edv55g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7WSh5hm-77DZHx56Edv55g',
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
			coordinates: {
				latitude: 45.5323049662902,
				longitude: -122.681181021717,
			},
			transactions: ['delivery'],
			price: '$',
			location: {
				address1: '941 NW Overton St',
				address2: '',
				address3: '',
				city: 'Portland',
				zip_code: '97209',
				country: 'US',
				state: 'OR',
				display_address: ['941 NW Overton St', 'Portland, OR 97209'],
			},
			phone: '+15037197716',
			display_phone: '(503) 719-7716',
			distance: 2003.2002839012366,
		},
		{
			id: 'a-_h91FBXJs8sc-JIMuuAA',
			alias: 'la-perlita-portland-2',
			name: 'La Perlita',
			image_url:
				'https://s3-media1.fl.yelpcdn.com/bphoto/pS8ERjG53lrje9mJN99qww/o.jpg',
			is_closed: false,
			url: 'https://www.yelp.com/biz/la-perlita-portland-2?adjust_creative=7WSh5hm-77DZHx56Edv55g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=7WSh5hm-77DZHx56Edv55g',
			review_count: 218,
			categories: [
				{
					alias: 'coffee',
					title: 'Coffee & Tea',
				},
			],
			rating: 5,
			coordinates: {
				latitude: 45.5282302,
				longitude: -122.6805804,
			},
			transactions: ['delivery'],
			price: '$',
			location: {
				address1: '721 NW 9th Ave',
				address2: '',
				address3: null,
				city: 'Portland',
				zip_code: '97201',
				country: 'US',
				state: 'OR',
				display_address: ['721 NW 9th Ave', 'Portland, OR 97201'],
			},
			phone: '',
			display_phone: '',
			distance: 1544.1343956017656,
		},
	],
	total: 350,
	region: {
		center: {
			longitude: -122.68020629882812,
			latitude: 45.51434592424928,
		},
	},
};

function Search(props) {
	const [location, setLocation] = useState('');
	const [cafes, setCafes] = useState(initialCafes.businesses);
    console.log(cafes)
	return (
		<div>
			<form>
				<label htmlFor='location'>Location: </label>
				<input type='text' id='location' placeholder='San Diego, CA' />
				<button type='submit'>Search</button>
			</form>
			<Cafes cafes={cafes} />
		</div>
	);
}

export default Search;
