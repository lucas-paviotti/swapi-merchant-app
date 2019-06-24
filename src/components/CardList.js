import React from 'react';
import Card from './Card';

class CardList extends React.Component {
	render() {
		const {starships}=this.props;
		const cardComponent = starships.map((ship, i) => {
			return (
				<Card
					key={i}
					index={i}
					name={starships[i].name}
					model={starships[i].model}
					manufacturer={starships[i].manufacturer}
					cost_in_credits={starships[i].cost_in_credits.toLocaleString()}
					length={starships[i].length}
					crew={starships[i].crew}
					passengers={starships[i].passengers}
					cargo_capacity={starships[i].cargo_capacity}
					addToOrder={this.props.addToOrder}
				/>
			);
		})

		return (
			<div>
				{cardComponent}
			</div>
		);
	}
}


export default CardList;