import React, {Component} from 'react';

export default class MessageBox extends Component {
	constructor(props, context) {
		super(props, context);

		this.messageInput = this.messageInput.bind(this);
	}

	messageInput(e) {
		if(e.keyCode != 13) return;
		
		this.props.onMessageSubmit(e.target.value);
		
		e.target.value = '';
	}

	render () {
		return (
			<div className="message-box">
	      		<div className="ui input">
	      			<input type="text" placeholder="Type and hit enter" onKeyDown={this.messageInput}/>
	      		</div>
	      		<div className="suggestions">
	      			<span>Or try one of these:</span>
	      		</div>
	      	</div>
		);
	}
}