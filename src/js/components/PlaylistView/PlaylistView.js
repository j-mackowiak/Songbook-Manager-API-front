import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Alert from '../Alert/Alert';

const mapStateToProps = state => {
    return { user: state.user };
};

class ConnectedPlaylistView extends Component {
    state = {
        playlist: [],
        owner: '',
        songs: [],
        message: '',
        redirect: false
    };

    componentDidMount() {
        const { playlistId } = this.props.match.params;
        fetch(`https://stk-songbook.herokuapp.com/api/playlists/id/${playlistId}`)
            .then(res => {
                if (!res.ok) { throw res }
                return res.json()
            })
            .then(res => this.setState({ playlist: res }))
            .catch(err => {
                switch (err.status) {
                    case 404: {
                        this.setState({ message: 'There is no such playlist' });
                        break;
                    }
                    default:
                }
            })
    }

    componentDidUpdate(prevProps, prevState) {
        const { playlist } = this.state;
        if (prevState.playlist.id !== playlist.id) {
            Promise.all([
                fetch(`https://stk-songbook.herokuapp.com/api/users/id/${playlist.ownerId}`)
                    .then(res => res.json()),
                fetch(`https://stk-songbook.herokuapp.com/api/songs`)
                    .then(res => res.json())
            ])
                .then(res => this.setState({ owner: res[0].username, songs: res[1].filter(song => playlist.songs.includes(song.id)) }))
        }
    }


    handleDelete = () => {
        const { playlist } = this.state;
        const { user } = this.props;
        if (user.id === playlist.ownerId) {
            fetch(`https://stk-songbook.herokuapp.com/api/playlists/id/${playlist.id}`, { method: 'DELETE' })
            .then(res => {
                if(!res.ok) { throw res }
                this.setRedirect();
            })
            .catch(err => console.log(err));
        }
    }

    setRedirect = () => {
        this.setState({redirect: true});
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render() {
        const { playlist, owner, songs, message } = this.state;
        const { user } = this.props;
        if (playlist.songs) {
            return (
                <div id='main'>
                    <h1>{playlist.name}</h1>
                    <h2>Created by: {owner}</h2>
                    {user.id === playlist.ownerId && <button onClick={this.handleDelete}>Delete this playlist</button>}
                    <div id='song-;=list'>Songs: {songs.map(song => (
                        <div id='single-song' key={song.id}>
                            <h3>{song.title}</h3>
                            <p>Guitar Tabs: {song.guitarTabs}</p>
                            <p>Lyrics: {song.lyrics}</p>
                            <p><Link to={`/songs/${song.id}`}>Song page</Link></p>
                        </div>
                    ))}</div>
                </div>
            )
        } else {
            return (
            <>
            {this.renderRedirect()}
            {message && <Alert status='error' >{message}</Alert>}
            {!message && <div>Loading...</div>}    
                </>
            )
        }
    }
}

const PlaylistView = connect(mapStateToProps)(ConnectedPlaylistView);

export default PlaylistView;