import React from 'react';
import CafePhotos from './CafePhotos';
import CafeMap from './CafeMap';
import CafeHours from './CafeHours';

function CafeDetails(props) {
	return (
		<div>
			Hello from CafeDetails
			<CafePhotos />
			<CafeMap />
			<CafeHours />
		</div>
	);
}

export default CafeDetails;
