// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
//
// let store = {
//     _state: {
//         ProfilePage: {
//             postsData: [
//                 {id: 1, message: 'Hi, how are you?', LikesCount: 12},
//                 {id: 2, message: 'Hi meeeeen!!', LikesCount: 11},
//                 {id: 3, message: 'Yo', LikesCount: 11},
//                 {id: 4, message: 'Yo', LikesCount: 11},
//             ],
//             newPostText: 'it-kamasutra.com'
//         },
//         DialogsPage: {
//             dialogsData: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Viktor'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'Hi meeen eee!!'},
//                 {id: 3, message: 'Yo'},
//                 {id: 4, message: 'Yo'},
//                 {id: 5, message: 'Yo'}
//             ],
//             newMessageText: 'MatherFucker'
//         }
//     },
//     _callSubscriber() {
//         console.log('state changed');
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//
//         this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
//         this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);
//
//         this._callSubscriber(this._state);
//     }
// }
//
// export default store;