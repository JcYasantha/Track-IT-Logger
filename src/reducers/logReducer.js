import {GET_LOGS, SET_LOADING, ERROR_LOGS} from '../actions/types';

const initialState = {
    logs:null,
    current:null,
    loading:false,
    error:null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false,
            };
        case ERROR_LOGS:
            console.log(action.payload)
            return {
                ...state,
                error: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loading:true
            };
        default:
            return state;
    }
};