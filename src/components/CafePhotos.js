import React from 'react';
import './CafePhotos.css'

function CafePhotos({ cafe }) {
	return (
		<div className='cafe-photo-container'>
			{cafe.photos.map((photo) => (
				<img src={photo} alt={cafe.name} className='cafe-photo'/>
			))}
		</div>
	);
}

export default CafePhotos;
