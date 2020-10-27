import { GET_TECHS, SET_LOADING, ERROR_TECH, ADD_TECH } from './types';

export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
}

export const getTechs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ERROR_TECH,
            payload: error.response.data
        });
    }
};

export const addTech = (tech) => async dispatch => {
    try {
        const res = await fetch('/techs',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tech)
        });

        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ERROR_TECH,
            payload: error.response.data
        });
    }
};