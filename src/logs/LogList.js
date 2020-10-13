import React,{useState, useEffect} from 'react'
import LogListItem from './LogListItem';

const LogList = () => {

    const [logs, setLogs] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
      getLogs();
    },[]);

    const getLogs= async () => {

      const res = await fetch('/logs');
      const data = await res.json();

      setLoading(false);
      setLogs(data);
    };

    if(loading){
      return <p>Loading....</p>
    }

    return (
        <ul className="collection with-header">
        <li className="collection-header"><h4 className="center">Logs</h4></li>

        {!loading && logs.length === 0 ? <p>There are no logs to show</p> : 
          logs.map(log=><LogListItem log={log} />)
        }
        
        
      </ul>
    )
}

export default LogList