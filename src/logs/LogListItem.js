import React from 'react'
import PropTypes from 'prop-types'

const LogListItem = ({log}) => {
    return (
        <li class="collection-item" key={log.id}>
            <div>
            <a className={`modal-trigger ${log.attention ? 'red-text' : 'green-text'}`} href="#edit-log-modal">
                {log.message}
            </a>
            <br/>
            <span className="grey-text">
                ID #<span className="black-text">{log.id}</span> last updated by: <span className='black-text'>{log.tech}</span>
            </span>
            <a href="#!" class="secondary-content">
                <i class="material-icons grey-text">delete</i>
            </a>
            
            </div>
        </li>
    )
}

LogListItem.propTypes = {
log:PropTypes.object.isRequired,
}

export default LogListItem
