import React,{useState, useEffect} from 'react';
import TechListItem from './TechListItem';

const TechList = () => {

    const[loading, setLoading] = useState(true);
    const[techs, setTechs] = useState([]);

    useEffect(() => {
      getTechs();
    },[]);

    const getTechs= async () => {

      const res = await fetch('/techs');
      const data = await res.json();

      setLoading(false);
      setTechs(data);
    };

    

    return (
        <div id="view-techs-modal" className="modal">
            <div className="modal-content">
                <h4 className="center">Techs</h4>
                <ul className="collection">

                    {!loading && techs.length === 0 ? <p>There are no techs to show</p> : 
                    techs.map(tech=>
                        <TechListItem key={tech.id} tech={tech}/>
                    )}
                    
                    
                </ul>
                
            </div>
        </div>
    )
}

export default TechList
