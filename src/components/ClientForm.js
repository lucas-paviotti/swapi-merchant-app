import React from "react";

class ClientForm extends React.Component {
  render() {
    return (
      <form className="client-information" /*onSubmit={Go to App}*/>
        <h1>STAR WARS</h1>
        <h2>Mechant Ship Nexus</h2>
        <h2>Name</h2>
        <input
          name="username"
          type="text"
          /*ref={this.myInput}*/
          required
        />
        <h2>Address</h2>
        <input
        	name="address"
          type="text"
          /*ref={this.myInput}*/
          required
        />
				<label>
				    <h2>Planet</h2>
				    <input list="planets" name="selectPlanet" />  
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
