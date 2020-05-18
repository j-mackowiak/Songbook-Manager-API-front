import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../redux/actions';
import { useHistory } from 'react-router-dom';

const mapStateToProps = state => {
    return { user: state.user };
};

function mapDispatchToProps(dispatch) {
    return {
      logOut: () => dispatch(logOut())
    };
  }

function ConnectedUserBar (props) {
    const history = useHistory();
    const {user} = props;

    const handleLogOut = () => {
        props.logOut();
        history.push('/');
    }

    return(
        <div id='user-bar'>Hello, {user.firstName}. <button id='logout-button' onClick={handleLogOut}>Log Out</button></div>
    )
}

const UserBar = connect(mapStateToProps, mapDispatchToProps)(ConnectedUserBar);

export default UserBar;