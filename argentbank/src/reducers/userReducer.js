const initialState = {
    user: null,
    token: null, 
    loading: false,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.payload, 
                loading: false,
                error: null
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        
        case 'START_UPDATE_USER_PROFILE':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'UPDATE_USER_PROFILE_SUCCESS':
            return {
                ...state,
                user: action.payload, 
                loading: false,
                error: null,
            };
        case 'UPDATE_USER_PROFILE_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
