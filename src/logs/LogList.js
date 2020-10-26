import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import LogListItem from './LogListItem';
import Preloader from '../layouts/Preloader';
import PropTypes from 'prop-types';
import {getLogs} from '../actions/logActions';


const LogList = ({log: {logs,loading}, getLogs}) => {


    useEffect(() => {
      getLogs();
      //eslint-disable-next-line
    },[]);


    if(loading || logs == null){
      return <div className="center"><Preloader /></div>
    }

    return (
        <ul className="collection with-header">
        <li className="collection-header"><h4 className="center">Logs</h4></li>

        {!loading && logs.length === 0 ? <p>There are no logs to show</p> : 
          logs.map(log=><LogListItem key={log.id} log={log} />)
        }
        
        
      </ul>
    )
}

LogList.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs:PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps,{getLogs})(LogList)
