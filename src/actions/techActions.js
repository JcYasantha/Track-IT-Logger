import { GET_TECHS, SET_LOADING, ERROR_TECH } from './types';

export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
}

export const getTechs = () => async dispatch => {
    try {
        const res = await fetch('/techs');
        const data = res.json();

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