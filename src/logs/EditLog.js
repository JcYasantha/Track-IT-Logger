import React,{ useState, useEffect } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { updateLog } from '../actions/logActions';
import { getTechs } from '../actions/techActions';



const EditLog = ({ current , updateLog, techs, getTechs}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if(current){
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }

        getTechs();
        // eslint-disable-next-line
    }, [current]);

    const onSubmit = () =>{
        if(message === '' || tech === ''){
            M.toast({html: 'Please enter a message and a tech'})
        }else{
            const upLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date()
            };
            updateLog(upLog);
            M.toast({html: 'Updated Successfully'})
        }
    }
    
    return (
        <div id="edit-log-modal" className="modal" style={ModalStyle}>
            <div className="modal-content">
                <h4 className="center">Edit log</h4>
                <div className="row">
                    <div className="input-field">
                        <input id="message" type="text" className="validate" name="message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field">
                        <select className='browser-default' name="tech" value={tech} onChange={(e)=>setTech(e.target.value)}>
                            <option value="" disabled>select a technician</option>
                            {techs !== null ? techs.map(tech => (
                                <option value={tech.id} key={tech.id}>{tech.firstname} {tech.lastname}</option>
                            )): <option value="" disabled>No Technicians</option>}
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <label>
                            <input type="checkbox" className="filled-in" checked={attention} name="attention" value={attention} onChange={(e)=>setAttention(!attention)}/>
                            <span>Needs Attention</span>
                        </label>
                    </div>
                </div>
                
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn blue" onClick={onSubmit}>Enter</a>
            </div>
        </div>
    )
}

const ModalStyle = {
    width:'75%',
    height:'75%',
};

EditLog.prototype = {
    current: PropTypes.object.isRequired,
    updateLog: PropTypes.func.isRequired,
    getTechs: PropTypes.func.isRequired,
};
const mapStateToProp = (state) => ({
    current: state.log.current,
    techs: state.tech.techs
});
export default connect(mapStateToProp, {updateLog, getTechs})(EditLog);
