import './CafePhotos.css';

function CafePhotos({ cafe }) {
	// The Yelp Fusion API provides URLs of up to three photos. Render the UI accordingly.
	if (!cafe.photos || cafe.photos.length === 0) {
		return (
			<div className='no-photo-container'>
				<p>
					<em>No photos available.</em>
				</p>
			</div>
		);
	} else if (cafe.photos.length === 1) {
		return (
			<div className='one-photo-container'>
				<img src={cafe.photos[0]} alt={cafe.name} />
			</div>
		);
	} else if (cafe.photos.length === 2) {
		return (
			<div className='two-photos-container'>
				{cafe.photos.map((photo) => (
					<img src={photo} alt={cafe.name} key={photo} className='photo' />
				))}
			</div>
		);
	} else {
		return (
			<div className='three-photos-container'>
				{cafe.photos.map((photo) => (
					<img src={photo} alt={cafe.name} key={photo} className='photo' />
				))}
			</div>
		);
	}
}

export default CafePhotos;
