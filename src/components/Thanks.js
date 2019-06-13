import React from "react";

class Thanks extends React.Component {
  
  clearAndGo = event =>{
    localStorage.clear();
    this.props.history.push(`/`);
  };

  render() {
    return (
      <div>
      	<h2>Dear {localStorage.getItem('username')},</h2>
      	<p>Thank you for your order.</p>
      	<p>A guild's representative will arrive in {localStorage.getItem('address')} on {localStorage.getItem('planet')} soon in order to process payment</p>
      	<p>Best regards,</p>
      	<p>The Galactic Federation (Github: @Imhest).</p>
      	<button onClick={this.clearAndGo}>Back to start</button>
      </div>
    );
  }
}

export default Thanks;