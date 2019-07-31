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
        <div className="stars"></div>
        <div className="twinkling"></div>
        <h1>STAR WARS</h1>
        <h2>BLACK MARKET SHIP NEXUS</h2>
        <div className="form-fill">
          <p>Name</p>
          <input
            name="username"
            type="text"
            onChange={this.handleChange}
            value={this.state.username}
            required
          />
          <p>Address</p>
          <input
            name="address"
            type="text"
            onChange={this.handleChange}
            value={this.state.address}
            required
          />
          <label>
              <p>Planet</p>
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
        </div>
        <button type="submit"> GO TO STORE </button>
      </form>
    );
  }
}

export default ClientForm;
