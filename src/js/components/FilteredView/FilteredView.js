import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchEngine from '../SearchEngine/SearchEngine';

class FilteredView extends Component {
    state = {
        songs: []
    }

    componentDidMount() {
        //const url = this.props.match.url;
        const filterName = this.props.match.params.filterName;
        fetch(`https://stk-songbook.herokuapp.com/api/categories`)
            .then(res => res.json())
            .then(res => res.find(category => category.name === filterName).id)
            .then(res => {
                fetch(`https://stk-songbook.herokuapp.com/api/categories/id/${res}/songs`)
                    .then(res => res.json())
                    .then(res => this.setState({ songs: res }))
            })

        // if (url.startsWith('/tags')) {
        //     fetch(`https://stk-songbook.herokuapp.com/api/tags`)
        //         .then(res => res.json())
        //         .then(res => res.find(tag => tag.name === filterName).id)
        //         .then(res => {
        //             fetch(`https://stk-songbook.herokuapp.com/api/tags/id/${res}/songs`)
        //                 .then(res => res.json())
        //                 .then(res => this.setState({ songs: res }))
        //         })
        // }
        // else if (url.startsWith('/categories')) {
        //     fetch(`https://stk-songbook.herokuapp.com/api/categories`)
        //         .then(res => res.json())
        //         .then(res => res.find(category => category.name === filterName).id)
        //         .then(res => {
        //             fetch(`https://stk-songbook.herokuapp.com/api/categories/id/${res}/songs`)
        //                 .then(res => res.json())
        //                 .then(res => this.setState({ songs: res }))
        //         })
        // }
    }

    render() {
        const { songs } = this.state;
        if (songs) {
            return (
                <div id='main'>
                    <SearchEngine type='songs' />
                    <ul>
                        {songs.map(song =>
                            <li key={song.id}><Link to={`/songs/${song.id}`}>{song.title}</Link></li>)}
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

export default FilteredView;