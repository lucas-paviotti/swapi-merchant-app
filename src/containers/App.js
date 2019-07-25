import React from 'react';
import CardList from '../components/CardList';
import Order from '../components/Order';
import { randomIntFromInterval } from "../helper-functions";


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			starships: [],
			order: {}
		}
	}

	componentDidMount(){
		const urls = ['https://swapi.co/api/starships/?page=1',
			'https://swapi.co/api/starships/?page=2',
			'https://swapi.co/api/starships/?page=3',
			'https://swapi.co/api/starships/?page=4'
		];

		/*
		// I wrote this code below because I didn't like fetching a fixed number of pages. I want to calculate how many pages there are and then add them to array, but I couldn't manage to make it work using promises.
	  fetch('https://swapi.co/api/starships')
		.then(response => response.json())
		.then(number => {
			const pages = Math.round(number.count / 10);
			for (var i = 0; i < pages; i++) {
				urls.push('https://swapi.co/api/starships/?page='+ (i + 1))
				console.log(urls);
			}		
		})
		*/

	  Promise.all(urls.map(url => {
	  	return fetch(url).then(response => response.json())
	  })).then(res => {
	  	let arr = [];
	  	for (var i = 0; i < res.length; i++) {
	  		res[i].results.forEach(e => { 
	  			if (e.cost_in_credits === "unknown") {
						e.cost_in_credits = randomIntFromInterval(100000,500000);
						arr.push(e);
	  			} else {
	  				e.cost_in_credits = Number(e.cost_in_credits);
	  				arr.push(e);
	  			}
	  		})
	  	}
	  	this.setState({ starships: arr })
	  }).catch(() => console.log('There was an error while fetching from the API'))
	}

	addToOrder = (key) => {
		// you get a copy of state
		const order = { ...this.state.order };
		// you add one to the corresponding key
		order[key] = order[key] + 1 || 1;
		// you set the state
		this.setState({ order });
	};

	deleteFromOrder = key => {
		const order = { ...this.state.order };
		if (order[key] > 1) {
			order[key] = order[key] - 1;
			this.setState({ order });
		} else {
    	delete order[key];
    	this.setState({ order });
		}
	}

  render() {
  	const { starships, order } = this.state;
  	const { history } = this.props;
		return !starships.length ?
		<div className="loading-screen">
			<div className="stars"></div>
			<div className="twinkling"></div>
			<div className="clouds"></div>
			<h1>Loading</h1>
		</div> :
    (
    	<div className='merchant-app'>
				<div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
	      <h1>Ships in storage</h1>
	      <CardList starships={starships} addToOrder={this.addToOrder} />
	      <div className="order-tab">
	      	<Order starships={starships} order={order} history={history} deleteFromOrder={this.deleteFromOrder} />
	      </div>
	    </div>
    );
  }
}

export default App;