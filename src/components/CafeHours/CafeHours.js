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
// Code was created with the help of Stack Overflow.
// https://stackoverflow.com/a/14403158
const getFormattedTime = (militaryTime) => {
	// Grab the first two digits of the military time
	const hours24 = parseInt(militaryTime.substring(0, 2));
	// and convert them into standard time hours.
	const hours = ((hours24 + 11) % 12) + 1;
	const amPm = hours24 > 11 ? 'pm' : 'am';
	const minutes = militaryTime.substring(2);
	return hours + ':' + minutes + amPm;
};

function CafeHours({ cafe }) {
	return (
		<section>
			<h6>
				<strong>Business Hours</strong>
			</h6>
			{!cafe.hours ? (
				<p>
					<em>No business hours available.</em>
				</p>
			) : (
				<>
					{cafe.hours[0].open.map((businessHours) => (
						<p key={businessHours.day}>
							{`${daysOfWeek[businessHours.day]}: ${getFormattedTime(
								businessHours.start
							)} - ${getFormattedTime(businessHours.end)}`}
						</p>
					))}
					<p>
						<em>{'(Closed days are not listed.)'}</em>
					</p>
				</>
			)}
		</section>
	);
}

export default CafeHours;
