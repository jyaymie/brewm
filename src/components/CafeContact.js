import './CafeContact.css';

function CafeContact({ cafe }) {
	if (!cafe.phone) {
		return (
			<p className="no-phone-number-text">
				<em>No phone number available.</em>
			</p>
		);
	} else {
		return (
			<div className="phone-number-text">
				<a href={`tel:${cafe.phone}`} className='call-link'>
					<strong>Call 📞</strong>
				</a>
				<p className='phone-number'>{cafe.display_phone}</p>
			</div>
		);
	}
}

export default CafeContact;
