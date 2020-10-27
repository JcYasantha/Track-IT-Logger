import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux';
import M from "materialize-css/dist/js/materialize.min.js";
import { addLog } from '../actions/logActions';
import { getTechs } from '../actions/techActions';
import PropTypes from 'prop-types';



const AddLog = ({addLog, techs, getTechs}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, [])

    const onSubmit = () =>{
        if(message === '' || tech === ''){
            M.toast({html: 'Please enter a message and a tech'})
        }else{
            const logNew = {
                message,
                attention,
                tech,
                date: new Date()
            };

            addLog(logNew);
            setMessage('');
            setAttention(false);
            setTech('');
            
            M.toast({html: `Log added by ${tech}`})
        }
    }
    
    return (
        <div id="add-logs-modal" className="modal" style={ModalStyle}>
            <div className="modal-content">
                <h4 className="center">Add a log</h4>
                <div className="row">
                    <div className="input-field">
                        <input id="message" type="text" className="validate" name="message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                        <label htmlFor="message">Log Message</label>
                    </div>
                </div>
                
                {/* <div className="row">
                    <div className="input-field">
                        <input type="text" className="datepicker" />
                        <label htmlFor="message">Date</label>
                    </div>
                </div> */}

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

AddLog.prototype = {
    addLog: PropTypes.func.isRequired,
    getTechs:PropTypes.func.isRequired,
}

const mapStateToProp = state => ({
    techs: state.tech.techs
});
export default connect(mapStateToProp,{addLog,getTechs})(AddLog);
