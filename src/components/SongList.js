import React, {Component} from "react";
import {connect} from 'react-redux'
import {SelectSong} from "../actions";

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            const {title} = song;
            return (
                <div className='item' key={title}>
                    <div className='right floated content'>
                        <div className="ui button primary"
                        onClick={()=> this.props.SelectSong(song)}>
                            Select
                        </div>
                    </div>
                    <div className="content">
                        {title}
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='ui divided list'>
                {this.renderList()}
            </div>
        )
    }
}


//чрез mapStateToProps
// ще вземем цялата информация от state обекта от redux store-a
// ще я минем през някакви изчисляния и ще я подадем като props в компонента SongList
//всеки път когато променяме state-a чрез компонента,
// mapStateToProps ще се презареди с новите промени
const mapStateToProps = (state) => {
    //връща ни списък с песните
    // console.log(state);
    // {songs: state.songs} ще служи за props в SongList
    // console.log(state);
    return {songs: state.songs};
}

export default connect(mapStateToProps, {SelectSong: SelectSong})(SongList);

//connect e функция, която връща ф-а
// function returnFunction() {
//     return function () {
//         return 'hi, there'
//     }
// }
//
// returnFunction()()

//Ще укажем на connect, че искаме списъка със songs
//извън redux store от provider-a
//вски път, когато списъка се промени
//the provider ще праща информация на connect()
//connect() ще изпраща информацията до компонента, който я иска
