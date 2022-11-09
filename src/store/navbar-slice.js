import {createSlice} from '@reduxjs/toolkit'

const navbarSlice =  createSlice({
    name: 'navbar',
    initialState: {
        showPostsSection : true,
        showAboutSection : false,
        showPhotosSection: false,
        showVideosSection: false,
    },
    reducers: {
        openPostsSection(state){
            state.showPostsSection = true;
            state.showAboutSection = false;
            state.showPhotosSection = false;
            state.showVideosSection = false;
        },
        openAboutSection(state){
            state.showPostsSection = false;
            state.showAboutSection = true;
            state.showPhotosSection = false;
            state.showVideosSection = false;
        },
        openPhotosSection(state){
            state.showPostsSection = false;
            state.showAboutSection = false;
            state.showPhotosSection = true;
            state.showVideosSection = false;
        },
        openVideoSection(state){
            state.showPostsSection = false;
            state.showAboutSection = false;
            state.showPhotosSection = false;
            state.showVideosSection = true;
        },
    }  
})

export const navbarActions = navbarSlice.actions;
export default navbarSlice;