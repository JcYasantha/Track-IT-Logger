import React, { useRef } from 'react'
import { connect } from 'react-redux';
import { searchLogs } from '../actions/logActions';
import PropTypes from 'prop-types'


const Navbar = ({searchLogs}) => {
  const text = useRef('');

  const logSearch = e => {
    searchLogs(text.current.value);
  };
    return (
        <nav>
    <div className="nav-wrapper blue">
      <form>
        <div className="input-field">
          <input id="search" type="search"placeholder="Search Logs..." onChange={logSearch} ref={text}/>
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
    )
}

Navbar.prototype = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(Navbar);
