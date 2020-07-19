import React from "react";
//къдравите скопи указват, че ние искаме да импортнем ф-я,
// коато е била експорнтата с export const nameFunc - named export (наименуван export)
import {SelectSong} from "../actions";
import SongList from "./SongList";
import SongDetail from "./SongDetails";

const App = () => {
    return (
        <div className='ui container grid'>
            <div className="ui row">
                <div className="column eight wide">
                    <SongList/>
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}

export default App;
