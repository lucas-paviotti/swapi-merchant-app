import React from 'react';

class Order extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h2>Ships:</h2>
					<ul>
						<li>ship x quantity <button>&times;</button></li>
						<li>ship x quantity <button>&times;</button></li>
						<li>ship x quantity <button>&times;</button></li>
					</ul>
				</div>
				<div>
					<h2>Total:</h2>
					<ul>
						<li>Cost in credits: 32154363512</li>
						<li>Crew: 321444</li>
						<li>Passengers: 498231</li>
						<li>Cargo capacity: 291048</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Order;