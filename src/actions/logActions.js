import {GET_LOGS, SET_LOADING, ERROR_LOGS, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG} from './types';

export const setLoading = () => {
    return{
        type:SET_LOADING
    };
};

// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();
//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type:GET_LOGS,
//             payload:data
//         });
//     };
// };

//get logs from the server
export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type:GET_LOGS,
            payload:data
        });
    } catch (error) {
        dispatch({
            type:ERROR_LOGS,
            payload:error.response.data
        });
    }
    
};

//adding a new log
export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs',{
            method: 'POST',
            body:JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            },
            
        });
        const data = await res.json();

        dispatch({
            type:ADD_LOG,
            payload:data
        });
    } catch (error) {
        dispatch({
            type:ERROR_LOGS,
            payload:error.response.data
        });
    }
};

//deleting a log
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/logs/${id}`,{
            method: "DELETE"
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: ERROR_LOGS,
            payload: error.response.data
        });
    }


};

export const setCurrent = (log) =>  {

    return {
        type: SET_CURRENT,
        payload: log
    };

};

export const clearCurrent = () => {

    return {
        type: CLEAR_CURRENT,
    };
};

export const updateLog = log => async dispatch => {
    console.log(log.id);
    try {
        setLoading();
        const res = await fetch(`/logs/${log.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(log)
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    } catch (error) {
        dispatch({
            type:ERROR_LOGS,
            payload: error.response.data
        });
    }
};