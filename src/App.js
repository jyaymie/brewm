import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import CafeDetails from './components/CafeDetails/CafeDetails';

function App() {
	return (
		<div>
			<header>
				<h1>
					<Link to='/'>brewm</Link>
				</h1>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='cafe-details/:id' element={<CafeDetails />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
