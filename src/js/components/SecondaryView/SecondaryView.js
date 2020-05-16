import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchEngine from '../SearchEngine/SearchEngine';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { user: state.user };
};

class ConnectedSecondaryView extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        const url = this.props.match.url;
        const { user } = this.props;
        if (url === '/myPlaylists') {
            if (user.id) {
                fetch(`https://stk-songbook.herokuapp.com/api/playlists/ownerId/${this.props.user.id}?include_private=true`)
                    .then(res => res.json())
                    .then(res => this.setState({ list: res }));
            }
        } else {
            fetch(`https://stk-songbook.herokuapp.com/api${url}?limit=10`)
                .then(res => res.json())
                .then(res => this.setState({ list: res }));
        }
    }

    render() {
        const { list } = this.state;
        const url = this.props.match.url;
        const { user } = this.props;

        // if (url === '/myPlaylist') {
        //     if (!user.id) {
        //         return (
        //             <div>You have to be logged in to view this page. <Link to='/login'>Log In</Link> or <Link to='/register'>Register</Link></div>
        //         )
        //         } else if (!list[0]) {
        //             return(
        //                 <div>You haven't created any playlist. You can do so <Link to='/create'>here</Link>.</div>
        //             )
        //     } else {
        //         return (
        //             <>
        //                 {/* <SearchEngine type='playlists' /> */}
        //                 <h1>Your playlists:</h1>
        //                 <ul>
        //                     {list.map(playlist => (
        //                         <li key={playlist.id}><Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link></li>
        //                     ))}
        //                 </ul>
        //             </>
        //         )
        //     }
        if (url === '/myPlaylists') {
            if (!user.id) {
                return <div>You have to be logged in to view this page. <Link to='/login'>Log In</Link> or <Link to='/register'>Register</Link></div>
            } else if (!list[0]) {
                return <div>You haven't created any playlist. You can do so <Link to='/create'>here</Link>.</div>
            } else {
                return (
                    <>
                        <h1>My playlists:</h1>
                        <ul>
                            {list.map(playlist => (
                                <li key={playlist.id}><Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link></li>
                            ))}
                        </ul>
                    </>
                )
            };
        } else if (list[0]) {
            switch (url) {
                case "/playlists": {
                    return (
                        <>
                            <SearchEngine type='playlists' />
                            <h1>Latest playlists:</h1>
                            <ul>
                                {list.map(playlist => (
                                    <li key={playlist.id}><Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link></li>
                                ))}
                            </ul>
                        </>
                    )
                }
                case "/categories": {
                    return (
                        <>
                            <SearchEngine type='songs' />
                            <h1>Categories:</h1>
                            <ul>
                                {list.map(category => (
                                    <li key={category.id}><Link to={`/categories/${category.name}`}>{category.name}</Link></li>
                                ))}
                            </ul>
                        </>
                    )
                }
                // case "/myPlaylists": {
                //     return (
                //         <>
                //             <h1>My playlists:</h1>
                //             <ul>
                //                 {list.map(playlist => (
                //                     <li key={playlist.id}><Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link></li>
                //                 ))}
                //             </ul>
                //         </>
                //     )      
                //          }
                default:
            }
            // } else if (url === '/tags') {
            //     return (
            //         <>
            //             <SearchEngine type='tags' />
            //             <h1>Latest tags:</h1>
            //             <ul>
            //                 {list.map(tag => (
            //                     <li key={tag.id}><Link to={`/tags/${tag.name}`}>{tag.name}</Link></li>
            //                 ))}
            //             </ul>
            //         </>
            //     )
            // }
        } else {
            return <div>Loading...</div>
        }
    }
}

const SecondaryView = connect(mapStateToProps)(ConnectedSecondaryView);

export default SecondaryView;