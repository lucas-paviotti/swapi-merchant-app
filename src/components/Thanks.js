import React from "react";

class Thanks extends React.Component {
  
  clearAndGo = event =>{
    localStorage.clear();
    this.props.history.push(`/`);
  };

  render() {
    return (
      <div className="thanks-component">
        <div className="stars"></div>
        <div className="twinkling"></div>
      	<h1>Dear {localStorage.getItem('username')},</h1>
      	<h2>Thank you for your order.</h2>
      	<p>A representative will arrive in {localStorage.getItem('address')} on {localStorage.getItem('planet')} soon in order to process payment</p>
      	<p>Best regards,</p>
      	<p>The Black Market (Github: @Imhest).</p>
      	<button onClick={this.clearAndGo}>Back to start</button>
      </div>
    );
  }
}

export default Thanks;