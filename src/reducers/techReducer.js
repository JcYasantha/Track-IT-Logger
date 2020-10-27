import { GET_TECHS, SET_LOADING, ERROR_TECH, ADD_TECH } from '../actions/types';

const initialState= {
    techs: null,
    loading:false,
    error: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload]
            };
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading:false
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