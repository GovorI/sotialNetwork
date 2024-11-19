import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Ilia"},
                {id: 2, name: "Valera"},
                {id: 3, name: "Kirill"}
            ],
            messagesData: [
                {id: 1, message: "Hi! How are you?"},
                {id: 2, message: "Hi! Im fine!"},
                {id: 3, message: "I love you!"},
            ],
            newMessageText: ''
        },
        postsPage: {
            posts: [
                {id: 1, message: "Hi, How are you?", likes: 15},
                {id: 2, message: "This is my first post!", likes: 20}
            ],
            newPostText: ''
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    dispatch(action) {
        // this._state.dialogsPage = dialogsReducer(action, this._state.dialogsPage);
        dialogsReducer(action, this._state.dialogsPage);
        // this._state.postsPage = profileReducer(action, this._state.postsPage);
        profileReducer(action, this._state.postsPage);
        this._callSubscriber(this._state)
    }
}
export default store;
window.store = store

