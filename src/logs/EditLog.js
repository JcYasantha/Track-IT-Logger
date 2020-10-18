import React,{useState} from 'react';
import M from "materialize-css/dist/js/materialize.min";


const EditLog = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () =>{
        if(message === '' || tech === ''){
            M.toast({html: 'Please enter a message and a tech'})
        }else{
            console.log(message);
        }
    }
    
    return (
        <div id="edit-log-modal" className="modal" style={ModalStyle}>
            <div className="modal-content">
                <h4 className="center">Edit log</h4>
                <div className="row">
                    <div className="input-field">
                        <input id="message" type="text" className="validate" name="message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                        <label htmlFor="message">Log Message</label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field">
                        <input type="text" className="datepicker" />
                        <label htmlFor="message">Date</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select className='browser-default' name="tech" value={tech} onChange={(e)=>setTech(e.target.value)}>
                            <option value="" disabled>select a technician</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
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
export default EditLog
