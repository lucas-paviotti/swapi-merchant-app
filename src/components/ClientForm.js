import React from "react";

class ClientForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      address: '',
      planet: ''
    }
  }

  componentDidMount() {
    if (localStorage.length > 0) {
      let username = localStorage.getItem('username');
      let address = localStorage.getItem('address');
      let planet = localStorage.getItem('planet');
      this.setState({ username,address,planet });
    }
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
				    <option value="Tatooine" />
				</datalist>
        <button type="submit"> Go to store </button>
      </form>
    );
  }
}

export default ClientForm;