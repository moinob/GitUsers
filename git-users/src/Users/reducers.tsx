import {GET_USERS_PENDING, GET_USERS_SUCCESS, GET_USERS_ERROR, GET_USER_PENDING, GET_USER_SUCCESS, GET_USER_ERROR} from './actions';

export const initialState = {
    pending: true,
    users: [],
    error: null,
    user: null,
}

export default function reducers(state = initialState, action: any) {
    switch(action.type) {
        case GET_USERS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case GET_USERS_SUCCESS: 
            return {
                ...state,
                pending: false,
                users: action.users
            }
        case GET_USERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
            case GET_USER_PENDING: 
            return {
                ...state,
                pending: true
            }
        case GET_USER_SUCCESS: 
            return {
                ...state,
                pending: false,
                user: action.user
            }
        case GET_USER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
    
}

export const getUsersSuccess = (state: any) => state.users;
export const getUsersPending = (state: any) => state.pending;
export const getUsersError = (state: any) => state.error;
export const getUserSuccess = (state: any) => state.user;
export const getUserPending = (state: any) => state.pending;
export const getUserError = (state: any) => state.error;