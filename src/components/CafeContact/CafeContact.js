import './CafeContact.css';

function CafeContact({ cafe }) {
	return (
		<section>
			<h6>
				<strong>Contact</strong>
			</h6>
			{!cafe.phone ? (
				<p>
					<em>No phone number available.</em>
				</p>
			) : (
				<>
					<p>{cafe.display_phone}</p>
					<a href={`tel:${cafe.phone}`} className='call-link'>
						Call 📞
					</a>
				</>
			)}
		</section>
	);
}

export default CafeContact;
