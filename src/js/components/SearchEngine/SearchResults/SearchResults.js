import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';

function SearchResults(props) {
    const { list, type, handleOnClick } = props;

    if (list[0]) {
        switch (type) {
            case "songs": {
                return (
                    <ul className='results-list'>Results:
                        {list.map(song => <li className='search-result-li' key={song.id}><Link to={`/songs/${song.id}`} >{song.title}</Link></li>)}
                    </ul>
                )
            }
            case "playlists": {
                return (
                    <ul className='results-list'>Results:
                        {list.map(playlist => <li className='search-result-li' key={playlist.id}><Link to={`/playlists/${playlist.id}`} >{playlist.name}</Link></li>)}
                    </ul>
                )
            }
            // case "tags": {
            //     return (
            //         <ul className='results-list'>Results:
            //             {list.map(tag => <Link to={`/tags/${tag.id}`} key={tag.id} ><li>{tag.name}</li></Link>)}
            //         </ul>
            //     )
            // }
            case "authors": {
                return (
                    <ul className='results-list'>Results:
                        {list.map(author => <li className='search-result-li' key={author.id} onClick={handleOnClick}>{author.name}</li>)}
                    </ul>
                )
            }
            case "songsForPlaylists": {
                return (
                    <ul className='results-list'>Results:
                        {list.map(song => <li className='search-result-li' key={song.id} value={song.id} onClick={handleOnClick}>"{song.title}" by {song.author.name} </li>)}
                    </ul>
                )
            }
            default:
        }

    } else if (type === "authors") {
        return <p id='no-results-p'>{`This author has not been created yet. When you submit this form he/she will be automatically created.`}</p>
    } else if (type === "songsForPlatlists") {
        return <p id='no-results-p'>{`Couldn't find any songs matching this phrase`}</p>
    } else {
        return <p id='no-results-p'>{`Couldn't find any ${type} matching this phrase`}</p>
    }
}

export default SearchResults;