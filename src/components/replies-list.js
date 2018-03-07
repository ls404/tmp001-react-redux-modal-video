import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createReply } from '../actions/index';
import _ from 'lodash';

import classes from './replies-list.css';

class RepliesList extends Component {

	submitReply(ev) {
		ev.preventDefault();
		const reply = ev.target.reply.value;
		ev.target.reply.value = '';
		this.props.createReply(
			this.props.videoId, this.props.comment.timestamp, reply);
	}

	milisecToDateTime(timestamp) {
		const dateTime = new Date(timestamp).toDateString()
			+ ' AT ' + new Date(timestamp).toLocaleTimeString();
		return dateTime;
	}

	renderReplies(replies) {
		return _.map(replies, reply => {
			return (
				<li key={reply.timestamp}>
					<div className={classes['reply-header']+' '+ classes.row}>
						<img className={classes.avatar} src={require('../images/avatar.png')} alt='avatar' />
						<div className={classes.column}>
							<h4>{reply.author}</h4>
							<p>{this.milisecToDateTime(reply.timestamp)}</p>
						</div>
					</div>
					<p>{reply.content}</p>
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<ul className={classes['replies-list']}>
					{this.renderReplies(this.props.comment.replies)}
				</ul>
				<div className={classes['comment-reply']}>
					<ul className={classes.row}>
						<li><button className={classes['reply-comment']+' '+ classes.button+' '+ classes.active}>comment</button></li>
						<li><button className={classes['reply-photo']+' '+ classes.button}>photo</button></li>
						<li><button className={classes['reply-feedback']+' '+ classes.button}>feedback</button></li>
					</ul>
					<form onSubmit={this.submitReply.bind(this)}>
		        		<input
			            	type='text'
			            	name='reply'
			            	placeholder='Reply...' />
		        	</form>
				</div>
			</div>
		);
	}
}

export default connect(null , { createReply })(RepliesList);