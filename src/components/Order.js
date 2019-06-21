import React from 'react';

class Order extends React.Component {
	render() {
		const { starships, order } = this.props;
		return (
			<div className="order" >
				<div className="shiplist">
					<h2>Ships:</h2>
					<ul>
						<li>ship x quantity <button>&times;</button></li>
					</ul>
				</div>
				<div className="total">
					<h2>Total:</h2>
					<ul>
						<li>Cost in credits: 0</li>
						<li>Crew: 0</li>
						<li>Passengers: 0</li>
						<li>Cargo capacity: 0</li>
					</ul>
				</div>
				<button onClick={() => this.props.history.push(`/checkout`)}> Place Order </button>
			</div>
		);
	}
}

export default Order;