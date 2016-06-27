import React, { Component } from 'react';
import LandingScreen from './components/LandingScreen';

export default class App extends Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
		  <div>
		      <LandingScreen />
		      <div className="classic-ui container"></div>
		  </div>
		);
	}
}