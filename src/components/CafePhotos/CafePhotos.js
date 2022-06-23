import './CafePhotos.css';

function CafePhotos({ cafe }) {
	if (!cafe.photos) {
		return (
			<p>
				<em>No photos available.</em>
			</p>
		);
	} else {
		return (
			<div className='photos-container'>
				{cafe.photos.map((photo) => (
					<img src={photo} alt={cafe.name} className='photo' key={photo} />
				))}
			</div>
		);
	}
}

export default CafePhotos;
