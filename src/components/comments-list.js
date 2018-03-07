import React, {Component} from 'react';
import _ from 'lodash';
import RepliesList from './replies-list';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/fontawesome-free-regular';
import { faFlag} from '@fortawesome/fontawesome-free-regular'

import classes from './comments-list.css';

export default class CommentsList extends Component {

    milisecToDateTime(timestamp) {
        const dateTime = new Date(timestamp).toDateString()
            + ' AT ' + new Date(timestamp).toLocaleTimeString();
        return dateTime;
    }

    renderComments() {
        return _.map(this.props.comments, comment => {
            return (
                <li key={comment.timestamp}>
                    <div className={classes['comment-header']+' '+classes['row']}>
                        <img className={classes.avatar} src={require('../images/avatar.png')} alt='avatar'/>
                        <div className={classes.column}>
                            <h4>{comment.author}</h4>
                            <p>{this.milisecToDateTime(comment.timestamp)}</p>
                        </div>
                    </div>
                    <div className={classes["comment-content"]}>
                        <p>{comment.content}</p>
                        <ul className={classes.row}>
                            <li>
                                <button className={classes['like-btn']+' '+ classes['icon']+' '+ classes['button']}>
                                    <FontAwesomeIcon className={classes.faCol} icon={faHeart}/>  like
                                </button>
                            </li>
                            <li>
                                <button className={classes['share-btn']+' '+ classes.icon+' '+ classes.button}>
                                    <FontAwesomeIcon className={classes.faCol} icon="share-alt"/>   share</button>
                            </li>
                            <li>
                                <button className={classes['comment-btn']+' '+ classes.icon+' '+ classes.button}>
                                    <FontAwesomeIcon className={classes.faCol} icon="comment-alt"/>   comment</button>
                            </li>
                            <li>
                                <button className={classes['report-btn']+' '+ classes.icon+' '+ classes.button}>
                                    <FontAwesomeIcon icon={faFlag}/>   report</button>
                            </li>
                        </ul>
                    </div>
                    <RepliesList
                        videoId={this.props.videoId}
                        comment={comment}/>
                </li>
            );
        });
    }

    render() {
        return (
            <ul className={classes['comments-list']}>
                {this.renderComments()}
            </ul>
        );
    }
}