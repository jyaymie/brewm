import React from 'react';
import './CafeHours.css';

function CafeHours({ cafe }) {
	const businessHours = cafe.hours ? cafe.hours[0].open : []
	return (
		<ul>
			Business Hours
			{businessHours.map((day) => (
				<li className='hours' key={day.day}>
					{day.day}: {day.start} - {day.end}
				</li>
			))}
		</ul>
	);
}

export default CafeHours;
