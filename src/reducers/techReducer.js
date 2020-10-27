import { GET_TECHS, SET_LOADING, ERROR_TECH } from '../actions/types';

const initialState= {
    techs: null,
    loading:false,
    error: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loading:true
            };
        case ERROR_TECH:
            console.log(action.payload)
            return{
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};