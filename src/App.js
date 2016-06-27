import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
	      <div className="full-screen container">
	      	<div className="headline">
	      		<h1>Ed Davis</h1>
	      		<h3>Mostly a Web Developer</h3>
	      	</div>
	      	<div className="message-thread">
	      	</div>
	      	<div className="bot-container">
	      	</div>
	      	<div className="message-box">
	      		<div className="ui input">
	      			<input type="text" placeholder="Type and hit enter"></input>
	      		</div>
	      		<div className="suggestions">
	      			<span>Or try one of these:</span>
	      		</div>
	      	</div>
	      	<i className="scroll-down fa fa-angle-down"></i>
	      </div>
	      <div className="classic-ui container"></div>
      </div>
    );
  }
}