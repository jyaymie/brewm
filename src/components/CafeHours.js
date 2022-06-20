import './CafeHours.css';

const daysOfWeek = {
	0: 'Monday',
	1: 'Tuesday',
	2: 'Wednesday',
	3: 'Thursday',
	4: 'Friday',
	5: 'Saturday',
	6: 'Sunday',
};

// Convert the fetched military time to standard time.
// https://stackoverflow.com/a/14403158
const getFormattedTime = (fourDigitTime) => {
	const hours24 = parseInt(fourDigitTime.substring(0, 2));
	const hours = ((hours24 + 11) % 12) + 1;
	const amPm = hours24 > 11 ? 'pm' : 'am';
	const minutes = fourDigitTime.substring(2);
	return hours + ':' + minutes + amPm;
};

function CafeHours({ cafe }) {
	return (
		<div>
			<div className='business-hours-container'>
				{cafe.hours[0].open.map((businessHours) => (
					<p className='business-hours' key={businessHours.day}>
						{`${daysOfWeek[businessHours.day]}: ${getFormattedTime(
							businessHours.start
						)} - ${getFormattedTime(businessHours.end)}`}
					</p>
				))}
			</div>
            <br/>
			<a href={`tel:${cafe.phone}`} className='call-link'>
				<strong>Call 📞</strong>
			</a>
			<p className="phone-number">{cafe.display_phone}</p>
		</div>
	);
}

export default CafeHours;
