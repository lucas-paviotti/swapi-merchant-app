import React from 'react';
import './App.css';
import CardList from '../components/CardList';
import Order from '../components/Order';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			starships: []
		}
	}

	componentDidMount(){
	  /*
		fetch('https://swapi.co/api/starships')
		.then(response => response.json())
		.then(ships => {
			const pages = Math.round(ships.count / 10);
			for (var i = pages - 1; i >= 0; i--) {
				if (i !== 1) {
					fetch('https://swapi.co/api/starships/?page='+ (i + 1))
					.then(response => response.json())
					.then(newShips => newShips.results.forEach(e => { ships.results.push(e) }));
				}
			}
			this.setState({ starships: ships });
		});
	  */




	}

  render() {
    return (
    	<div className='merchant-app'>
	      <h1>APP</h1>
	      <CardList/>
	      <div>
	      	<Order/>
	      	<button onClick={() => this.props.history.push(`/checkout`)}> Place Order </button>
	      </div>
	    </div>
    );
  }
}

export default App;