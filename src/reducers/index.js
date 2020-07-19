import {combineReducers} from "redux";

const SongsReducer = () => {
    //return action
    return [
        {title: 'No Scrubs', duration: '4:50'},
        {title: 'I want it that way', duration: '3:30'},
        {title: 'All stars', duration: '5:20'}
    ]
}

const SelectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECT') {
        return action.payload
    }

    return selectedSong;
}


export default combineReducers({
    songs: SongsReducer,
    SelectedSong: SelectedSongReducer
})
