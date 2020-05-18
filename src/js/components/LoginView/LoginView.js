import React, { Component } from 'react';
import Alert from '../Alert/Alert';
import { connect } from "react-redux";
import { logIn, logOut } from '../../redux/actions/index';

const apiURL = `https://stk-songbook.herokuapp.com`

function mapDispatchToProps(dispatch) {
    return {
        logIn: user => dispatch(logIn(user)),
        logOut: () => dispatch(logOut())
    };
};

const mapStateToProps = state => {
    return { user: state.user };
};

class ConnectedLoginView extends Component {
    state = {
        email: '',
        password: '',
        loggedIn: null,
        message: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "email": email, "password": password })
        };

        if (email && password) {
            fetch(apiURL + '/api/users/login', options)
                .then(res => {
                    if (!res.ok) { throw res }
                    return res.json()
                })
                .then(res => {
                    this.props.logIn(res);
                    this.setState({ loggedIn: true, password: '', email: '', message: `Hello ${res.firstName}.` });
                })
                .catch(err => {
                    if (err.status === 401) {
                        this.setState({ loggedIn: false, message: 'Wrong password' });
                    } else if (err.status === 404) {
                        this.setState({ loggedIn: false, message: 'There is no user with that e-mail in the database' });
                    }
                });
        } else {
            this.setState({ loggedIn: false, message: 'Please fill in the form' });
        };
    }

    handleOnChange = e => {
        const id = e.target.id;
        this.setState({ [id]: e.target.value, loggedIn: null })
    }

    render() {
        const { email, password, loggedIn, message } = this.state;
        const { user } = this.props;

        if (user.id) {
            return (
                <Alert status='success'>Succesfully logged in. Do you want to <button onClick={this.props.logOut}>Log Out</button>?</Alert>
            )
        } else {
            return (
                <div>
                    <div className='introduction'>
                        <h1>Login</h1>
                        <p>Logging in allows you to add songs and create your own playlists</p>
                    </div>

                    <form onSubmit={this.handleSubmit} id='login-form'>
                        <div className='form-div'>
                        <label> E-mail:
                    <input type='email' name='email' id='email' placeholder='email' value={email} onChange={this.handleOnChange} />
                        </label>
                        </div>

                        <div className='form-div'>
                        <label> Password:
                    <input type='password' name='password' id='password' placeholder='Password' value={password} onChange={this.handleOnChange} />
                        </label>
                        </div>

                        <div className='form-div'>
                        <button type='submit' id='login-submit'>Login</button>
                        </div>

                    </form>
                    {loggedIn && <Alert status='success'>{message}</Alert>}
                    {loggedIn === false && <Alert status='error'>{message}</Alert>}
                </div>
            )
        }
    }
}

const LoginView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedLoginView);


export default LoginView;