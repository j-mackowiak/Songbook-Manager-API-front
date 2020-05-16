import React from 'react';
import { NavLink } from "react-router-dom";
import '../NavBar/NavBar.css';
import { connect } from 'react-redux';
import UserBar from '../UserBar/UserBar';

const mapStateToProps = state => {
    return { user: state.user };
};

function ConnectedNavbar(props) {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" activeClassName="active" exact>Songs</NavLink></li>
                {/* <li><NavLink to="/tags" activeClassName="active">Tags</NavLink></li> */}
                <li><NavLink to="/categories" activeClassName="active">Categories</NavLink></li>
                <li><NavLink to="/playlists" activeClassName="active">Playlists</NavLink></li>
                {props.user.id && <li><NavLink to="/add" activeClassName="active">Add a song</NavLink></li>}
                {props.user.id &&  <li><NavLink to="/create" activeClassName="active">Create a playlist</NavLink></li>}
                {props.user.id && <li><NavLink to='/myPlaylists' activeClassName="active">My playlists</NavLink> </li>}
                {!props.user.id && <li><NavLink to="/login" activeClassName="active">Log In</NavLink></li>}
                {!props.user.id && <li><NavLink to="/register" activeClassName="active">Register</NavLink></li>}
                {props.user.id && <li><UserBar /></li>}
            </ul>
        </nav>
    );
}

const Navbar = connect(mapStateToProps)(ConnectedNavbar);

export default Navbar