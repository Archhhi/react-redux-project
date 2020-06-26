import profileReducer, { addPostActionCreator } from "./profile-reducer";

let state = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', LikesCount: 12},
        {id: 2, message: 'Hi meeeeen!!', LikesCount: 11},
        {id: 3, message: 'Yo', LikesCount: 11},
        {id: 4, message: 'Yo', LikesCount: 11},
    ]
};

it('length of postsData should be incremented', () => {
    let action = addPostActionCreator('it-action');

    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(5);
});

it('message of new postsData should be correct', () => {
    let action = addPostActionCreator('it-action');

    let newState = profileReducer(state, action);

    expect(newState.postsData[4].message).toBe('it-action');
});