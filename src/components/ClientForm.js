import React from "react";

class ClientForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      address: '',
      planet: '',
      planetList: []
    }
  }

  componentDidMount() {
    if (localStorage.length > 0) {
      let username = localStorage.getItem('username');
      let address = localStorage.getItem('address');
      let planet = localStorage.getItem('planet');
      this.setState({ username,address,planet });
    }

    const urls = ['https://swapi.co/api/planets/?page=1',
      'https://swapi.co/api/planets/?page=2',
      'https://swapi.co/api/planets/?page=3',
      'https://swapi.co/api/planets/?page=4',
      'https://swapi.co/api/planets/?page=5',
      'https://swapi.co/api/planets/?page=6',
      'https://swapi.co/api/planets/?page=7',
    ];

    Promise.all(urls.map(url => {
      return fetch(url).then(response => response.json())
    })).then(res => {
      let arr = [];
      for (var i = 0; i < res.length; i++) {
        res[i].results.forEach(e => { arr.push(e.name) })
      }
      this.setState({ planetList: arr })
    }).catch(() => console.log('There was an error while fetching from the API'))
  }

  componentWillUnmount() {
    const { username, address, planet } = this.state;
    localStorage.setItem('username', username);
    localStorage.setItem('address', address);
    localStorage.setItem('planet', planet);
  }

  // This function does 2 things:
  goToApp = (event) => {
    // Set the state into localstorage so it can be retrieved
    event.preventDefault();
    // Go into the App container component
    this.props.history.push(`/ships`);
  }

  // This function gets the form input values and names, and sets them into state.
  handleChange = (event) => {
    const input = event.target;
    const value = event.target.value;
    this.setState({ [input.name]: value });
  }

  render() {
    const { planetList } = this.state;
    planetList.sort();
    return (
      <form className="client-information" onSubmit={this.goToApp}>
        <h1>STAR WARS</h1>
        <h2>Mechant Ship Nexus</h2>
        <h2>Name</h2>
        <input
          name="username"
          type="text"
          onChange={this.handleChange}
          value={this.state.username}
          required
        />
        <h2>Address</h2>
        <input
        	name="address"
          type="text"
          onChange={this.handleChange}
          value={this.state.address}
          required
        />
				<label>
				    <h2>Planet</h2>
				    <input list="planets" name="planet" onChange={this.handleChange} value={this.state.planet} />  
				</label>   
				<datalist id="planets">
          {planetList.map((planet,i) => {
            return (
              <option key={i} value={planet} onChange={this.handleChange} />
            );
            })
          }
				</datalist>
        <button type="submit"> Go to store </button>
      </form>
    );
  }
}

export default ClientForm;
