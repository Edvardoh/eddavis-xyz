import React, {Component} from 'react';
import ChatArea from './ChatArea';

export default class LandingScreen extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render () {
		return (
			<div className="full-screen container">
	      		<div className="headline">
	      			<h1>Ed Davis</h1>
	      			<h3>Mostly a Web Developer</h3>
	      		</div>
	      		<ChatArea />
	      		<i className="scroll-down fa fa-angle-down"></i>
	      	</div>
		);
	}
}