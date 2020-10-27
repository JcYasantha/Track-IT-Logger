import React,{useEffect} from 'react';
import TechListItem from './TechListItem';
import { connect } from 'react-redux';
import { getTechs } from '../actions/techActions';
import PropTypes from 'prop-types'


const TechList = ({ loading, techs, getTechs }) => {
    
    useEffect(() => {
      getTechs();
      // eslint-disable-next-line
    },[]);
    

    return (
        <div id="view-techs-modal" className="modal">
            <div className="modal-content">
                <h4 className="center">Techs</h4>
                <ul className="collection">

                    {!loading && techs == null ? <p>There are no techs to show</p> : 
                    techs.map(tech=>
                        <TechListItem key={tech.id} tech={tech}/>
                    )}
                    
                    
                </ul>
                
            </div>
        </div>
    )
}

TechList.prototype = {
    techs: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}
const mapStateToProp = state => ({
    techs: state.tech.techs,
    loading: state.tech.loading
});

export default connect(mapStateToProp,{getTechs})(TechList);
