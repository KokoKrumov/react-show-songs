import React, {Component} from "react";
import {connect} from 'react-redux'

const SongDetail = ({SelectedSong}) => {
    if (!SelectedSong) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <p>{SelectedSong.title}</p>
            <p>{SelectedSong.duration}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {SelectedSong: state.SelectedSong};
}

export default connect(mapStateToProps)(SongDetail);
