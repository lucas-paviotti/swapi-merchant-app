import React from 'react';
import CardList from '../components/CardList';
import Order from '../components/Order';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			starships: []
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
	  		res[i].results.forEach(e => { arr.push(e) })
	  	}
	  	this.setState({ starships: arr })
	  }).catch(() => console.log('There was an error while fetching from the API'))
	}

  render() {
  	const { starships } = this.state;
  	const { history } = this.props;
    return !starships.length ?
    <h1>Loading</h1> :
    (
    	<div className='merchant-app'>
	      <h1>SHIPS IN STORAGE</h1>
	      <CardList starships={starships} />
	      <div>
	      	<Order history={history} />
	      </div>
	    </div>
    );
  }
}

export default App;