import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchEngine from '../SearchEngine/SearchEngine';
import './MainView.css';
// import index from '../../redux/index';

class MainView extends Component {
    state = {
        songs: [],
    };

    componentDidMount() {
        fetch('https://stk-songbook.herokuapp.com/api/songs?limit=10')
            .then(res => res.json())
            .then(res => this.setState({ songs: res }));
    };

    render() {
        const { songs } = this.state;
        if (songs) {
            return (
                <div id='main'>
                    <SearchEngine type='songs' />
                    <div className='introduction'>
                    <h1>Latest songs: </h1>
                    </div>

                    <ul>
                        {songs.map(song =>
                            <li className="song-list-li" key={song.id}><Link to={`/songs/${song.id}`}>{song.title}</Link></li>)}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
}

export default MainView;