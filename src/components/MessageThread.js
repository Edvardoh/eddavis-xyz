import React, {Component} from 'react';

export default class MessageThread extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render () {
		var messageNodes = this.props.messages.map(function(message) {
			return (
				<li key={message.id}>
					<div className={message.author + ' message'}>{message.text}</div>
				</li>
			);
		});

		return (
			<div className="message-thread">
				<ol className="messages">
					{messageNodes}
				</ol>
		    </div>
		);
	}
}