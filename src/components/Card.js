import React from 'react';

class Card extends React.Component {
	render() {
		const { name, model, manufacturer, cost_in_credits, length, crew, passengers, cargo_capacity } = this.props;
		return (
			<div className="card" onClick={() => this.props.addToOrder(this.props.index)}>
				<div className="card-image">
					<img src={require('../css/images/square-placeholder.jpg')} alt="placeholder"/>
				</div>
				<div className="card-info">
					<h2>{name}</h2>
					<p>Model: {model}</p>
					<p>Manufacturer: {manufacturer}</p>
					<p>Cost in credits: {cost_in_credits}</p>
					<p>Length: {length}</p>
					<p>Crew: {crew}</p>
					<p>Passengers: {passengers}</p>
					<p>Cargo Capacity: {cargo_capacity}</p>
				</div>
			</div>
		);
	}
}

export default Card;