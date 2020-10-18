import React,{useState} from 'react';
import M from "materialize-css/dist/js/materialize.min.js";


const AddTech = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const onSubmit = () =>{
        if(firstname === '' || lastname === ''){
            M.toast({html: 'Please enter the details'})
        }else{
            console.log(firstname);
        }
    }
    

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4 className="center">Add a Tech</h4>
                <div className="row">
                    <div className="input-field">
                        <input id="firstname" type="text" className="validate" name="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                        <label htmlFor="firstname">First Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input id="lastname" type="text" className="validate" name="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                        <label htmlFor="lastname">Last Name</label>
                    </div>
                </div>
                
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn blue" onClick={onSubmit}>Enter</a>
            </div>
        </div>
    )
}

export default AddTech
