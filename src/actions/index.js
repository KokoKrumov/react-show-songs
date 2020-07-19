//Create Actions

export const SelectSong = (song) => {
    //return action
    return {
        type: 'SONG_SELECT',
        payload: song
    }
}
