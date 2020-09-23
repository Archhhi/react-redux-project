import {profileAPI as ProfileAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import uuid from 'uuid/dist/v4';

const ADD_POST = 'ADD_POST';
const ADD_POST_FOR_USER = 'ADD_POST_FOR_USER';
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT';
const SET_USER_PROFILE_HEADER = 'SET_USER_PROFILE_HEADER';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const HANDLE_LIKE = 'HANDLE_LIKE';
const HANDLE_LIKE_FOR_USER = 'HANDLE_LIKE_FOR_USER';
const SET_POST_STATUS = 'SET_POST_STATUS';

let initialState = {
    myPosts: [],
    usersPosts: [],
    headerData: null,
    profile: null,
    status: '',
    newPostText: '',
    isTogglePostStatus: false
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: uuid(),
                postText: state.newPostText,
                like: 0,
                likeActive: false,
                date: 4000
            };
            return {
                ...state,
                myPosts: [...state.myPosts, newPost],
                newPostText: ''
            };
        }
        case ADD_POST_FOR_USER: {
            let newPost = {
                id: uuid(),
                postText: state.newPostText,
                like: 0,
                likeActive: false,
                date: 4000
            };
            return {
                ...state,
                usersPosts: [...state.usersPosts, newPost],
                newPostText: ''
            };
        }
        case CHANGE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE_HEADER: {
            return {
                ...state,
                headerData: action.data
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }
        case SET_POST_STATUS: {
            return {
                ...state,
                isTogglePostStatus: action.isToggle
            };
        }
        case HANDLE_LIKE: {
            return {
                ...state,
                myPosts: state.myPosts.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            likeActive: !item.likeActive,
                            like: item.likeActive
                                ? item.like - 1
                                : item.like + 1
                        }
                    }
                    return item;
                }),
            };
        }
        case HANDLE_LIKE_FOR_USER: {
            return {
                ...state,
                usersPosts: state.usersPosts.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            likeActive: !item.likeActive,
                            like: item.likeActive
                                ? item.like - 1
                                : item.like + 1
                        }
                    }
                    return item;
                }),
            };
        }
        default:
            return state;
    }
}

export const onAddPost = () => {
    return {
        type: ADD_POST
    }
}

export const onAddPostForUser = () => {
    return {
        type: ADD_POST_FOR_USER
    }
}

export const onChangeText = (newText) => {
    return {
        type: CHANGE_POST_TEXT, newText
    }
}

export const handleLike = (id) => {
    return {
        type: HANDLE_LIKE, id
    }
}

export const handleLikeForUser = (id) => {
    return {
        type: HANDLE_LIKE_FOR_USER, id
    }
}

export const setUserProfileHeader = (data) => {
    return {
        type: SET_USER_PROFILE_HEADER, data
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS, photos
    }
}

export const setPostStatus = (isToggle) => {
    return {
        type: SET_POST_STATUS, isToggle
    }
}

export const getUserHeaderData = (userId) => async (dispatch) => {
    const response = await ProfileAPI.getHeaderData(userId);

    dispatch(setUserProfileHeader(response.data));
}

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await ProfileAPI.getProfile(userId);

    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
        dispatch(getUserHeaderData(userId));
    } else {
        //dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0]} }));
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;