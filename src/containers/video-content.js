import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments, createComment } from '../actions/index';
import VideoPlayer from '../components/video-player';
import CommentsList from '../components/comments-list';

import classes from './video-content.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faHeart} from "@fortawesome/fontawesome-free-regular/index";

class VideoContent extends Component {

	componentDidMount() {
		this.props.fetchComments(this.props.videoId);
	}

	submitComment(ev) {
		ev.preventDefault();
		const comment = ev.target.comment.value;
		ev.target.comment.value = '';
		this.props.createComment(this.props.videoId, comment);
	}

// Some comment

	render() {
		return (
			<div>
				<VideoPlayer videoUrl={this.props.videoUrl}/>
        		<div className={classes.row}>
        			<ul>
        				<button className={classes['like-btn']+' '+ classes['icon']+' '+ classes['button']}>
							<FontAwesomeIcon className={classes.faCol} icon={faHeart}/>  like</button>
        				<button className={classes['share-btn']+' '+ classes['icon']+' '+ classes['button']}>
							<FontAwesomeIcon className={classes.faCol} icon="share-alt"/>  share</button>
        			</ul>
        			<ul>
        				<button className={classes['edit-btn']+' '+ classes['button']}>edit</button>
        				<button className={classes['delete-btn']+' '+ classes['button']}>delete</button>
        			</ul>
        		</div>
        		<form onSubmit={this.submitComment.bind(this)}>
	        		<input
		            	type='text'
		            	name='comment'
		            	placeholder='comment...' />
            	</form>
            	<CommentsList 
            		videoId={this.props.videoId}
            		comments={this.props.comments} />
			</div>
		);
	}
}

function mapStateToProps({ comments }) {
	return { comments };
}

export default connect(mapStateToProps, { fetchComments, createComment })(VideoContent);