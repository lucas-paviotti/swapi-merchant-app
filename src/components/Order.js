import React from 'react';

class Order extends React.Component {
	renderOrder = key => {
		const starships = this.props.starships[key];
		const count = this.props.order[key];
		return <li key={key}>
			{count} {starships.name} <button onClick={() => this.props.deleteFromOrder(key)}>X</button>
		</li>
	}

	render() {
		const orderIds = Object.keys(this.props.order);
		const total = orderIds.reduce((previous, key) => {
			const starships = this.props.starships[key];
			const count = this.props.order[key];
			return previous + (count * starships.cost_in_credits);
		}, 0);

		return (
			<div className="order" >
				<div className="title-bar">
					<h2>Order</h2>
					<div className="hamburger-menu">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				<div className="shiplist">
					<h2>Ships:</h2>
					<ul>
						{orderIds.map(this.renderOrder)}
					</ul>
				</div>
				<div className="total">
					<h2>Total:</h2>
					<ul>
						<li>Cost in credits: {total.toLocaleString()}</li>
					</ul>
				</div>
				<button className="submit-button" onClick={() => this.props.history.push(`/checkout`)}> Place Order </button>
			</div>
		);
	}
}

export default Order;