import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import M from "materialize-css/dist/js/materialize.min.js";
import {connect} from 'react-redux';
import { deleteLog } from '../actions/logActions';

const LogListItem = ({log, deleteLog}) => {

    const logDelete = () => {
        deleteLog(log.id);
        M.toast({html: 'Log deleted'})
    };
    return (
        <li className="collection-item" key={log.id}>
            <div>
            <a className={`modal-trigger ${log.attention ? 'red-text' : 'green-text'}`} href="#edit-log-modal">
                {log.message}
            </a>
            <br/>
            <span className="grey-text">
                ID #<span className="black-text">{log.id}</span> last updated by: {' '}
                <span className='black-text'>{log.tech}</span> on {' '}
                <span className='black-text'><Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment></span>
                
            </span>
            <a href="#!" onClick={ logDelete } className="secondary-content">
                <i className="material-icons grey-text">delete</i>
            </a>
            
            </div>
        </li>
    )
}

LogListItem.propTypes = {
log:PropTypes.object.isRequired,
deleteLog:PropTypes.func.isRequired,
}

export default connect(null, { deleteLog })(LogListItem);
