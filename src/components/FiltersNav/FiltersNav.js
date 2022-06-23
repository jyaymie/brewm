import './FiltersNav.css';
import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function FiltersNav({ location, cafes, setSearchParams, setPriceFilter }) {
	// Create a state for the Price dropdown.
	const [isOpen, setIsOpen] = useState(false);

	// Create states for the Price checkboxes.
	const [is1$Checked, setIs1$Checked] = useState(false);
	const [is2$Checked, setIs2$Checked] = useState(false);
	const [is3$Checked, setIs3$Checked] = useState(false);
	const [is4$Checked, setIs4$Checked] = useState(false);

	// const handleFilterByOpen = () => {
	// 	setUrl(`${baseUrl}&open_now`);
	// };

	const handleFilterByPrice = (e) => {
		e.preventDefault();
		let price1 = '';
		let price2 = '';
		let price3 = '';
		let price4 = '';

		if (is1$Checked) {
			price1 = '1';
		}
		if (
			(is1$Checked && is2$Checked) ||
			(is1$Checked && is3$Checked) ||
			(is1$Checked && is4$Checked) ||
			(is1$Checked && is2$Checked && is3$Checked) ||
			(is1$Checked && is2$Checked && is4$Checked) ||
			(is1$Checked && is3$Checked && is4$Checked) ||
			(is1$Checked && is2$Checked && is3$Checked && is4$Checked)
		) {
			price1 = '1,';
		}
		if (is2$Checked) {
			price2 = '2';
		}
		if (
			(is2$Checked && is3$Checked) ||
			(is2$Checked && is4$Checked) ||
			(is2$Checked && is3$Checked && is4$Checked)
		) {
			price2 = '2,';
		}
		if (is3$Checked) {
			price3 = '3';
		}
		if (is3$Checked && is4$Checked) {
			price3 = '3,';
		}
		if (is4$Checked) {
			price4 = '4';
		}

		setPriceFilter(`&price=${price1}${price2}${price3}${price4}`);
		setSearchParams({
			query: `${location}&${price1}${price2}${price3}${price4}`,
		});
		setIsOpen(!isOpen);
	};

	// When results have loaded, show the navigation bar.
	if (cafes.length) {
		return (
			// Render a navigation bar using Bootstrap styling.
			<div className='navbar-container'>
				<Navbar expand='sm'>
					<Navbar.Brand>Filters</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse>
						<Nav>
							{/* <Nav.Link href='#' onClick={handleFilterByOpen}>
								Open Now
							</Nav.Link> */}
							<NavDropdown
								title='Price'
								autoClose='outside'
								show={isOpen}
								onToggle={() => {
									setIsOpen(!isOpen);
								}}>
								<NavDropdown.Item onClick={() => setIs1$Checked(!is1$Checked)}>
									<input
										type='checkbox'
										name='price-1$'
										id='price-1$'
										checked={is1$Checked}
										readOnly
									/>
									<label htmlFor='price-1$'>$</label>
								</NavDropdown.Item>
								<NavDropdown.Item onClick={() => setIs2$Checked(!is2$Checked)}>
									<input
										type='checkbox'
										name='price-2$'
										id='price-2$'
										checked={is2$Checked}
										readOnly
									/>
									<label htmlFor='price-2$'>$$</label>
								</NavDropdown.Item>
								<NavDropdown.Item onClick={() => setIs3$Checked(!is3$Checked)}>
									<input
										type='checkbox'
										name='price-3$'
										id='price-3$'
										checked={is3$Checked}
										readOnly
									/>
									<label htmlFor='price-3$'>$$$</label>
								</NavDropdown.Item>
								<NavDropdown.Item onClick={() => setIs4$Checked(!is4$Checked)}>
									<input
										type='checkbox'
										name='price-4$'
										id='price-4$'
										checked={is4$Checked}
										readOnly
									/>
									<label htmlFor='price-4$'>$$$$</label>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item onClick={handleFilterByPrice}>
									Apply
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default FiltersNav;
