import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import './SearchEngine.css';

const apiURL = 'https://stk-songbook.herokuapp.com/api/';

class SearchEngine extends Component {
    state = {
        results: [],
        searched: false
    }

    fetchStuff = stuff => {
        const {type} = this.props;

        if (stuff) {
            switch (type) {
                case "songs": {
                    fetch(apiURL + `songs/title/${stuff}`)
                        .then(res => {
                            if(!res.ok) {throw res};
                             return res.json();
                        })
                        .then(res => this.setState({ results: res, searched: true }))
                        .catch(err => console.log(err));
                    break;
                }
                case "authors": {
                    fetch(apiURL + `authors/name/${stuff}`)
                        .then(res => res.json())
                        .then(res => this.setState({ results: res, searched: true }));
                        break;
                }
                case "playlists": {
                    fetch(apiURL + `playlists/name/${stuff}`)
                        .then(res => res.json())
                        .then(res => this.setState({ results: res, searched: true }));
                        break;
                }
                // case "tags": {
                //     fetch(apiURL + `tags/name/${stuff}?limit=3`)
                //         .then(res => res.json())
                //         .then(res => this.setState({ results: res, searched: true }));
                //         break;
                // }
                case "songsForPlaylists": {
                    fetch(apiURL + `songs/title/${stuff}`)
                        .then(res => res.json())
                        .then(res => this.setState({ results: res, searched: true }));
                    break;
                }
                default:
            }
        } else {
            this.setState({ searched: false })
        }
    }

    render() {
        const { results, searched } = this.state;
        const {type, handleOnClick} = this.props;
        return (
            <div id='search-engine'>
                <SearchBar fetchStuff={this.fetchStuff} type={type} />
                {searched && <SearchResults list={results} type={type} handleOnClick={handleOnClick} />}
            </div>
        )
    }
}

export default SearchEngine;