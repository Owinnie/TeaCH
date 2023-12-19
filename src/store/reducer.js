import { ADD_PARTICIPANTS, REMOVE_PARTICIPANTS, SET_USER } from "./actiontype";

let initState = {
    currentUser: null,
    participants: {},
}

export const reducer = (state = initState, action) => {
    switch(action.type) {
        case SET_USER: {
            let { payload } = action;
            state = { ...state, currentUser:{ ...payload.currentUser} };
            return state;
        }
        case ADD_PARTICIPANTS: {
            let { payload } = action;
            const currentUserId = Object.keys(state.currentUser)[0];
            const partId = Object.keys(payload.participant)[0];
            if (currentUserId === partId) {
                payload.participant[partId].currentUser = true;
            }
            let participants = { ...state.participants, ...payload.participant }
            state = { ...state, participants };
            return state;
        }
        case REMOVE_PARTICIPANTS: {
            let { payload } = action;
            let participants = { ...state.participants };
            delete participants[payload.partKey];
            state = { ...state, participants };
            return state;
        }
        default: {
            return state;
        }
        
    }
};