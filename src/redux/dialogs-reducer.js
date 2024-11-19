const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Ilia" },
    { id: 2, name: "Valera" },
    { id: 3, name: "Kirill" },
  ],
  messagesData: [
    { id: 1, message: "Hi! How are you?" },
    { id: 2, message: "Hi! Im fine!" },
    { id: 3, message: "I'm fine too!" },
  ],
};

export function dialogsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messagesData[state.messagesData.length - 1]?.id + 1 || 1,
        message: action.messageText,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    default:
      return state;
  }
}

export function addMessageActionCreator(messageText) {
  return { type: ADD_MESSAGE, messageText: messageText };
}
