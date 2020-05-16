import React, { Component } from 'react';
import './SongView.css';
import { Link } from 'react-router-dom';
import SearchEngine from '../SearchEngine/SearchEngine';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { user: state.user };
};

class ConnectedSongView extends Component {
    state = {
        song: [],
    };

    componentDidMount() {
        const { songId } = this.props.match.params;
        fetch(`https://stk-songbook.herokuapp.com/api/songs/id/${songId}`)
            .then(res => res.json())
            .then(res => this.setState({ song: res }))
    }

    handleDelete = () => {
        const { song } = this.state;
        fetch(`https://stk-songbook.herokuapp.com/api/songs/id/${song.id}`, { method: 'DELETE' })
            .then(res => {
                if (!res.ok) { throw res }
                return res.json()
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        // .then(() => this.setState({ message: 'Successfuly deleted this song.'}));
    }

    render() {
        const { song } = this.state;
        const { user } = this.props;
        if (song.author) {
            return (
                <div id='main'>
                    <SearchEngine type='songs' />
                    <ul>
                        <li>Title: {song.title}</li>
                        <li>Author: {song.author.name}</li>
                        {/* {coauthors[0] && <li>Coauthors: {song.coauthors.join(', ')}</li>} */}
                        <li>Lyrics: {song.lyrics}</li>
                        <li>Guitar Tabs: {song.guitarTabs}</li>
                        <li>Category:<Link to={`/categories/${song.category.name}`}> {song.category.name} </Link></li>
                        {user.id && <button onClick={this.handleDelete} >Delete</button>}
                        {/* <li>Tags: {song.tags.map(tag => <Link to={`/tags/${tag.name}`} key={tag.id}> {`${tag.name} `} </Link>)}</li> */}
                    </ul>
                </div>
            )
        } else {
            return (<div>Loading...</div>)
        }
    }
}

const SongView = connect(mapStateToProps)(ConnectedSongView);

export default SongView;