import React, {Component} from 'react';
import MessageBox from './MessageBox';
import MessageThread from './MessageThread';

export default class ChatArea extends Component {

	constructor(props, context) {
		super(props, context);

		//TODO better way to initialize state?
		this.state = {
			messages: [{
				id: 1,
				author: 'bot',
				text: 'Hello!'
			},{
				id: 2,
				author: 'bot',
				text: 'I\'m Ed\'s digital surrogate, Edbot.'
			},{
				id: 3,
				author: 'bot',
				text: 'Allow me to guide you through Ed\'s world.'
			},{
				id: 4,
				author: 'bot',
				text: 'If I get annoying, you can just scroll down to read for yourself.'
			}]
		}

		this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
	}

	handleMessageSubmit (message) {
		var messages = this.state.messages;

		messages.push({
			id: Date.now(), //TODO this is not robust
			author: 'user',
			text: message
		});

		$.ajax({
			url: 'https://aiaas.pandorabots.com/talk/1409612792851/edbot', //TODO this should be built dynamically from chatbot.json
			dataType: 'json',
			type: 'POST',
			data: {
				user_key: 'e634fc50f7f5416a331870a66a63574b', //TODO this should also be from chatbot.json
				input: message
			},
			success: function(data) {
				var messages = this.state.messages;

				messages.push({
					id: Date.now(), //TODO this is not robust
					author: 'bot',
					text: data.responses[0]
				});

				this.setState({
					pb_sessionid: data.sessionid,
					messages: messages
				});
			}.bind(this),
			error: function(xhr, status, err) {
				debugger;
				//this.setState({data: comments});
				//console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}

	render () {
		return (
			<div className="chat-area">
				<MessageThread messages={this.state.messages}/>
		      	<div className="bot-container">
		      	</div>
		      	<MessageBox onMessageSubmit={this.handleMessageSubmit}/>
		    </div>
		);
	}
}