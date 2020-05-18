import React, { Component } from 'react'
import Alert from '../Alert/Alert';
import SearchEngine from '../SearchEngine/SearchEngine';
import './AddSongView.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const bigRegEx = /^[a-zA-Z 0-9]{2,20}$/i; //- regex for: Tag, Category, UserRole, Author, Playlist 'name' property and Song 'title'

const mapStateToProps = state => {
    return { user: state.user };
};

class ConnectedAddSongView extends Component {
    state = {
        categories: [],
        authorName: '',
        categoryId: '',
        title: '',
        lyrics: '',
        guitarTabs: '',
        curio: '',
        songAdded: null,
        errors: {
            authorName: '',
            title: '',
            lyrics: '',
            curio: '',
            guitarTabs: ''
        },
        message: ''
    };

    componentDidMount() {
        fetch(`https://stk-songbook.herokuapp.com/api/categories`)
            .then(res => res.json())
            .then(res => this.setState({ categories: res }));
    }

    handleOnChange = e => {
        const id = e.target.id;
        let errors = this.state.errors;
        this.setState({ [id]: e.target.value, songAdded: null, [errors.id]: '' });
    }

    handleOnBlur = e => {
        const { id, value } = e.target;
        let errors = this.state.errors;
        switch (id) {
            case 'authorName': {
                errors.authorName =
                    bigRegEx.test(value) ?
                        "" :
                        "Author name has to consist of 2 to 20 letters, numbers or ' '.";
                break;
            }
            case 'title': {
                errors.title =
                    bigRegEx.test(value) ?
                        '' :
                        "Song title has to consist of 2 to 20 letters, numbers or ' '.";
                break;
            }
            case 'lyrics': {
                errors.lyrics =
                    value.length > 0 ?
                        '' :
                        "Might as well put 'none' or 'instrumental' into lyrics";
                break;
            }
            case 'guitarTabs': {
                errors.guitarTabs =
                    value.length > 0 ?
                        '' :
                        "A song has to have guitar tabs";
                break;
            }
            case 'categoryId': {
                errors.categoryId =
                    value !== '' ?
                        '' :
                        "You need to choose the category";
                break;
            }
            default:
        };
        this.setState({ errors });
    };

    handleOnFormSubmit = e => {
        e.preventDefault();
        const { title, authorName, categoryId, lyrics, guitarTabs, curio, errors } = this.state;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "authorName": authorName, "categoryId": parseInt(categoryId), "coauthors": [], "curio": curio, "guitarTabs": guitarTabs, "lyrics": lyrics, "tags": [], "title": title })
        };

        if (title && authorName && categoryId && lyrics && guitarTabs) {
            if (errors.title || errors.authorName || errors.categoryId || errors.lyrics || errors.guitarTabs) {
                this.setState({ songAdded: false, message: "One or more space doesn't meet the requirements" })
            } else {
                fetch('https://stk-songbook.herokuapp.com/api/songs/', options)
                    .then(res => {
                        if (!res.ok) { throw res }
                        return res.json();
                    })
                    .then(res => this.setState({ songAdded: true, message: res.id, authorName: '', categoryId: '', curio: '', guitarTabs: '', lyrics: '', title: '' }))
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
                    })
                // console.log({ "authorName": authorName, "categoryId": parseInt(categoryId), "coauthors": [], "curio": curio, "guitarTabs": guitarTabs, "lyrics": lyrics, "tags": [], "title": title })
            }
        } else {
            this.setState({ songAdded: false, message: 'Fill in all of the required spaces' });
        }
    }

    handleOnFileSubmit = e => {
        e.preventDefault();
        const songFileInput = document.querySelector('#song-file-input');
        const formData = new FormData();
        formData.append('file', songFileInput.files[0]);
        const options = {
            method: "POST",
            body: formData
        }
        fetch("https://stk-songbook.herokuapp.com/api/songs/upload", options)
        .then(res => {
            if(!res.ok) {throw res}
            return res.json();
        })
        .then(res => {
            this.setState({ songAdded: true, message: res.id })
        })
        .catch(err => {
            console.log(err);
            this.setState({songAdded: false, message: 'Incorrect file'});
        })
    }

    handleOnClick = e => {
        this.setState({ authorName: e.target.innerHTML });
    }

    render() {
        const { authorName, title, lyrics, guitarTabs, curio, categories, songAdded, errors, message } = this.state;
        const { user } = this.props;
        if (!user.id) {
            return (
                <div>
                    <h3>You have to be logged in to add a song.</h3>
                    <Link to='/login'>Log In</Link> or <Link to='/register' >Register</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <div className='introduction'>
                        <h1>Add song form</h1>
                        <p>Please fill in all the required fields to create a new song.</p>
                    </div>

                    <form onSubmit={this.handleOnFormSubmit} id='add-song-form'>
                        <div className='form-div'>
                            <label> Title*:
                    <input type='text' name='title' id='title' placeholder='title' value={title} onChange={this.handleOnChange} onBlur={this.handleOnBlur} />
                            </label>
                            {errors.title ? <p style={{ color: 'red' }}>Song title has to consist of 2 to 20 letters, numbers or ' '.</p> : <p>Song title has to consist of 2 to 20 letters, numbers or ' '.</p>}
                        </div>

                        <div className='form-div'>
                            <label> Author*:
                    <input type='text' id='authorName' placeholder='Author' value={authorName} onChange={this.handleOnChange} onBlur={this.handleOnBlur} />
                            </label>
                            {errors.authorName ? <p style={{ color: 'red' }}>Author name has to consist of 2 to 20 letters, numbers or ' '.</p> : <p>Author name has to consist of 2 to 20 letters, numbers or ' '.</p>}

                            <label>Search existing authors (after you use this you have to still click on the input - a feature not a bug):
                    <SearchEngine id='author-search' type='authors' handleOnClick={this.handleOnClick} />
                            </label>
                        </div>

                        <div className='form-div'>
                            <label>Category*:
                    <select id='categoryId' name="categoryId" onChange={this.handleOnChange} defaultValue='' onBlur={this.handleOnBlur}>
                                    <option value='' disabled > --- </option>
                                    {categories.map(category => (
                                        <option className='generated-option' key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                            </label>
                            {errors.categoryId ? <p style={{ color: 'red' }}>You need to choose the category.</p> : <p>Choose the category.</p>}
                        </div>

                        {/* coauthors*/}
                        <div className='form-div'>
                            <label>Song trivia:
                    <textarea name='curio' id='curio' placeholder='Możesz tu napisać coś o piosence' value={curio} onChange={this.handleOnChange} onBlur={this.handleOnBlur} />
                            </label>
                            <p>You can write something interesting about the song (not required).</p>
                        </div>

                        <div className='form-div'>
                            <label>Song lyrics*:
                    <textarea name='lyrics' id='lyrics' placeholder='lyrics' value={lyrics} onChange={this.handleOnChange} onBlur={this.handleOnBlur} required />
                            </label>
                            {errors.lyrics ? <p style={{ color: 'red' }}>Might as well put 'none' or 'instrumental' into lyrics</p> : <p>You can type in the lyrics here.</p>}
                        </div>

                        <div className='form-div'>
                            <label>Guitar tabs*:
                    <textarea name='guitarTabs' id='guitarTabs' placeholder='guitarTabs' value={guitarTabs} onChange={this.handleOnChange} onBlur={this.handleOnBlur} required />
                            </label>
                            {errors.guitarTabs ? <p style={{ color: 'red' }}>A song has to have guitar tabs</p> : <p>A song has to have guitar tabs</p>}
                        </div>
                        {/* <textarea name='tags' id='tags' placeholder='List tags here. Make sure to add a # before each one' /> */}
                        <button type='submit'>Submit!</button>
                    </form >

                    <p>OR alternatively you can add a song from a json file</p>

                    <form id='song-from-file' onSubmit={this.handleOnFileSubmit}>
                        <input type='file' accept=".json" id='song-file-input' />
                        <button type='submit'>Upload!</button>
                    </form>

                    {songAdded && <Alert status='success'>Song added. You can view it <Link to={`/songs/${message}`}>here</Link></Alert>}
                    {songAdded === false && <Alert status='error'>{message}</Alert>}
                </div >
            )
        }
    }
}

const AddSongView = connect(mapStateToProps)(ConnectedAddSongView);

export default AddSongView;