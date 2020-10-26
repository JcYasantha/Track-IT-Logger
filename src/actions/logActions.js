import {GET_LOGS, SET_LOADING, ERROR_LOGS, ADD_LOG} from './types';

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