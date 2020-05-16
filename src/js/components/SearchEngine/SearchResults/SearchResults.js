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
                        {list.map(song => <Link to={`/songs/${song.id}`} key={song.id} ><li>{song.title}</li></Link>)}
                    </ul>
                )
            }
            case "tags": {
                return (
                    <ul className='results-list'>Results:
                        {list.map(tag => <Link to={`/tags/${tag.id}`} key={tag.id} ><li>{tag.name}</li></Link>)}
                    </ul>
                )
            }
            case "authors": {
                return (
                    <ul className='results-list'>Results:
                        {list.map(author => <li key={author.id} onClick={handleOnClick} className='result-author'>{author.name}</li>)}
                    </ul>
                )
            }
            case "songsForPlaylists": {
                return (
                    <ul className='results-list'>Results:
                        {list.map(song => <li key={song.id} value={song.id} onClick={handleOnClick}>"{song.title}" by {song.author.name} </li>)}
                    </ul>
                )
            }
            default:
        }

    } else if (type === "authors") {
        return <p>{`This author has not been created yet. When you submit this form he/she will be automatically created.`}</p>
    } else if (type === "songsForPlatlists") {
        return <p>{`Couldn't find any songs matching this phrase`}</p>
    } else {
        return <p>{`Couldn't find any ${type} matching this phrase`}</p>
    }
}

export default SearchResults;