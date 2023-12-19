import {ADD_PARTICIPANTS, REMOVE_PARTICIPANTS, SET_USER} from "./actiontype";

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: {curretUser: user,},
    };
};

export const addParticipants = (participant) => {
    return {
        type: ADD_PARTICIPANTS,
        payload: {participant},
    };
};

export const removeParticipants = (partKey) => {
    return {
        type: REMOVE_PARTICIPANTS,
        payload: {key: partKey,},
    };
};