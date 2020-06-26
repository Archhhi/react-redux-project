const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi meeen eee!!'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return  {
                ...state,
                messages: [ ...state.messages, {id: 5, message: action.newMessageText} ],
                newMessageText: ''
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageText) => {
    return {
        type: SEND_MESSAGE, newMessageText
    }
}

export default dialogsReducer;