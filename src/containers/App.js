import React from 'react';
import './App.css';
import CardList from '../components/CardList';
import Order from '../components/Order';

class App extends React.Component {
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