import React from 'react';
import './CafePhotos.css';

function CafePhotos({ cafe }) {
	return (
		<div className='photos-container'>
			{cafe.photos.map((photo) => (
				<img src={photo} alt={cafe.name} className='photo' key={photo} />
			))}
		</div>
	);
}

export default CafePhotos;
