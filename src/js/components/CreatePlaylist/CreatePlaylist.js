import React, { Component } from 'react';
import SearchEngine from '../SearchEngine/SearchEngine';
import './CreatePlaylist.css';
import Alert from '../Alert/Alert';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const bigRegEx = /^[a-zA-Z 0-9]{2,20}$/i; //- regex for: Tag, Category, UserRole, Author, Playlist 'name' property and Song 'title'

const mapStateToProps = state => {
    return { user: state.user };
};

class ConnectedCreatePlaylist extends Component {
    state = {
        name: '',
        isPrivate: false,
        songList: [],
        errors: {
            name: '',
        },
        playlistAdded: null,
        message: ''
    };

    handleOnChange = e => {
        const id = e.target.id;
        switch (id) {
            case "name": {
                this.setState({ name: e.target.value });
                break;
            }
            case "isPrivateCheckbox": {
                this.setState({ isPrivate: e.target.checked });
                break;
            }
            default:
        }
        this.setState({ playlistAdded: null })
    }

    handleOnClick = e => {
        const { songList } = this.state;
        let list = [...songList];
        list.push({ id: e.target.value, title: e.target.innerHTML });
        this.setState({ songList: list });
    }

    handleDelete = e => {
        const { songList } = this.state;
        e.preventDefault();
        let list = [...songList];
        list.splice(e.target.value, 1);
        this.setState({ songList: list });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { name, isPrivate, songList, errors } = this.state;

        if (errors.name || songList.length === 0) {
            this.setState({ playlistAdded: false, message: "Either the name doesn't meet the requirements or the list is empty" });
        } else {
            let idList = [];
            songList.forEach(song => idList.push(song.id));
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ creationTime: null, id: 0, "isPrivate": isPrivate, "name": name, "ownerId": this.props.user.id, "songs": idList })
            };
            // console.log({ creationTime: null, id: 0, "isPrivate": isPrivate, "name": name, "ownerId": this.props.user.id, "songs": idList })
            fetch('https://stk-songbook.herokuapp.com/api/playlists/', options)
                .then(res => {
                    if (!res.ok) { throw res }
                    return res.json();
                })
                .then(res => this.setState({ playlistAdded: true, name: '', songList: [], message: res.id }))
                .catch(err => {
                    switch (err.status) {
                        case "401": {
                            this.setState({ songAdded: false, message: 'Unauthorized' });
                            break;
                        }
                        case "403": {
                            this.setState({ songAdded: false, message: 'Forbidden' });
                            break;
                        }
                        case "404": {
                            this.setState({ songAdded: false, message: 'Not found' });
                            break;
                        }
                        default:
                    }
                });
            // console.log({ creationTime: null, id: 0, "isPrivate": isPrivate, "name": name, "ownerId": 1, "songs": idList });
        }
    }

    handleOnBlur = e => {
        const { id, value } = e.target;
        let errors = this.state.errors;
        switch (id) {
            case 'name': {
                errors.name =
                    bigRegEx.test(value) ?
                        "" :
                        "Playlist name has to consist of 2 to 20 letters, numbers or ' '.";
                break;
            }
            default:
        }
    }

    render() {
        const { name, songList, playlistAdded, message } = this.state;
        const { user } = this.props;
        if (!user.id) {
            return (
                <div>
                    <h3>You have to be logged in to create a playlist.</h3>
                    <Link to='/login'>Log In</Link> or <Link to='/register' >Register</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <div className='introduction'>
                        <h1>Create a playlist</h1>
                        <p>Fill the form below to create a new playlist</p>
                        </div>

                        <form onSubmit={this.handleSubmit} id='create-playlist-form'>
                            <div className='form-div'>
                            <label>name:
                        <input type='text' id='name' placeholder='name' value={name} onChange={this.handleOnChange} onBlur={this.handleOnBlur} />
                            </label>
                            </div>

                            <div className='form-div'>
                            <label>Private:
                        <input type="checkbox" id="isPrivateCheckbox" name="isPrivate" value="isPrivate" onChange={this.handleOnChange} />
                            </label >
                            </div>

                            <div className='form-div'>
                            <SearchEngine type='songsForPlaylists' handleOnClick={this.handleOnClick} />
                            </div>

                            <div className='form-div'>
                            <button type='submit'>Create playlist</button>
                            </div>

                        </form>
                        {playlistAdded && <Alert status='success'>Playlist added. You can view it <Link to={`/playlists/${message}`}>here</Link>. </Alert>}
                        {playlistAdded === false && <Alert status='error'>{message}</Alert>}

                        {songList[0] && <div id='current-playlist' >
                            <p>{songList.length === 1 ? `${songList.length} song` : `${songList.length} songs`}  currently in the playlist:</p>
                            <ul>
                                {songList.map((song, i) => <li key={i}>{song.title}<button onClick={this.handleDelete} value={i}>Delete</button></li>)}
                            </ul>
                        </div>}
                    </div>
            )
        }
    }
}

const CreatePlaylist = connect(mapStateToProps)(ConnectedCreatePlaylist);

export default CreatePlaylist;