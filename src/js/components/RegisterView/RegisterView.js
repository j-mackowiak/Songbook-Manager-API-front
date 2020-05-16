import React, { Component } from 'react'
import Alert from '../Alert/Alert';
import './RegisterView.css';
import { connect } from 'react-redux';
import { logIn } from '../../redux/actions';

const apiURL = `https://stk-songbook.herokuapp.com`
const usernameRegEx = /^[a-zA-Z0-9 _-]{4,15}$/i;
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,40}$/;
const firstAndLastNameRegEx = /^[a-zA-Z ]{2,15}$/;
const emailRegEx = /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;

const mapStateToProps = state => {
    return { user: state.user };
};

function mapDispatchToProps(dispatch) {
    return {
        logIn: user => dispatch(logIn(user))
    };
};

class ConnectedRegisterView extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        errors: {
            username: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
        },
        registered: null,
        message: ''
    };

    handleOnChange = e => {
        const { id, value } = e.target;
        const { errors } = this.state;
        switch (id) {
            case 'username': {
                errors.username = '';
                break;
            }
            case 'password': {
                errors.password = ''
                break;
            }
            case 'email': {
                errors.email = '';
                break;
            }
            case 'firstName': {
                errors.firstName = '';
                break;
            }
            case 'lastName': {
                errors.lastName = '';
                break;
            }
            default:
        }
        this.setState({ [id]: value, registered: null });
    }

    handleOnBlur = e => {
        const { id, value } = e.target;
        let errors = this.state.errors;
        switch (id) {
            case 'username': {
                errors.username =
                    usernameRegEx.test(value) ?
                        "" :
                        "Username has to consist of 4 to 15 letters, numbers or ' ', '_', '-'";
                break;
            }
            case 'password': {
                errors.password =
                    passwordRegEx.test(value) ?
                        '' :
                        "Password has to consist of 6 to 40 letters or numbers (including at least 1 upper and lower case and 1 digit)";
                break;
            }
            case 'email': {
                errors.email =
                    emailRegEx.test(value) ?
                        '' :
                        "Incorrect email";
                break;
            }
            case 'firstName': {
                errors.firstName =
                    firstAndLastNameRegEx.test(value) ?
                        '' :
                        "Your name can only consist of 2 to 15 letters and or ' '";
                break;
            }
            case 'lastName': {
                errors.lastName =
                    firstAndLastNameRegEx.test(value) ?
                        '' :
                        "Your name can only consist of 2 to 15 letters and or ' '";
                break;
            }
            default:
        };
        this.setState({ errors });
    };

    handleOnSubmit = e => {
        e.preventDefault();
        const { username, password, email, firstName, lastName, errors } = this.state;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "email": email, "firstName": firstName, "lastName": lastName, "password": password, "username": username })
        };

        if (errors.username || errors.password || errors.email || errors.firstName || errors.lastName) {
            this.setState({ registered: false })
        } else {
            fetch(apiURL + '/api/users/register', options)
                .then(res => {
                    if (!res.ok) { throw res }
                    return res.json()
                })
                .then(res => {
                    this.props.logIn(res);
                    this.setState({ registered: true, username: '', password: '', email: '', firstName: '', lastName: '' });
                })
                .catch(err => {
                    switch (err.status) {
                        case 400: {
                            this.setState({ registered: false, message: 'There already exists an account with that name or under that email.' });
                            break;  
                        }
                        default:
                    }
                });
        };

    };

    render() {
        const { username, password, email, firstName, lastName, registered, errors, message } = this.state;
        const {user} = this.props;
        if (user.id) {
            return (
                <Alert status='success'>Succesfully registered. Do you want to <button onClick={this.props.logOut}>Log Out</button>?</Alert>
            )
        } else {
            return (
                <div id='registration-wrapper'>
                    <div className='introduction'>
                    <h1>User Registration</h1>
                    <p>Please fill in all the required fields to create a new user account.</p>
                    </div>
                    <form onSubmit={this.handleOnSubmit} id='registration-form' >
                        <div className='form-div'>
                            <label>
                                Email:
                        <input type='email' name='email' id='email' placeholder='E-mail' value={email} onChange={this.handleOnChange} onBlur={this.handleOnBlur} required />
                            </label>
                            {errors.email && <p style={{ color: 'red' }}>Incorrect e-mail.</p>}
                        </div>

                        <div className='form-div'>
                            <label>
                                Username:
                        <input type='text' name='username' id='username' placeholder='Username' value={username} onChange={this.handleOnChange} onBlur={this.handleOnBlur} required />
                            </label>
                            {errors.username ? <p style={{ color: 'red' }}> Username has to consist of 4 to 15 letters, numbers or ' ', '_', '-'.</p> : <p> Username has to consist of 4 to 15 letters, numbers or ' ', '_', '-'.</p>}
                        </div>

                        <div className='form-div'>
                            <label>
                                Password:
                        <input type='password' name='password' id='password' placeholder='Password' value={password} onChange={this.handleOnChange} onBlur={this.handleOnBlur} required />
                            </label>
                            {errors.password ? <p style={{ color: 'red' }}>Password has to consist of 6 to 40 letters or numbers (including at least 1 upper and lower case and 1 digit).</p> : <p>Password has to consist of 6 to 40 letters or numbers (including at least 1 upper and lower case and 1 digit).</p>}
                        </div>

                        <div className='form-div'>
                            <label>
                                First Name:
                        <input type='text' name='firstName' id='firstName' placeholder='First Name' value={firstName} onChange={this.handleOnChange} onBlur={this.handleOnBlur} required />
                            </label>
                            {errors.firstName ? <p style={{ color: 'red' }}> Your name can only consist of 2 to 15 letters and or ' '. Those are the rules boss.</p> : <p> Your name can only consist of 2 to 15 letters and or ' '. Those are the rules boss.</p>}
                        </div>

                        <div className='form-div'>
                            <label>
                                Last Name:
                        <input type='text' name='lastName' id='lastName' placeholder='Last Name' value={lastName} onChange={this.handleOnChange} onBlur={this.handleOnBlur} required />
                            </label>
                            {errors.lastName ? <p style={{ color: 'red' }}> Your name can only consist of 2 to 15 letters and or ' '. Those are the rules boss.</p> : <p> Your name can only consist of 2 to 15 letters and or ' '. Those are the rules boss.</p>}
                        </div>
                        
                        <div className='form-div'>
                        <button type='submit'>Submit!</button>
                        </div>
                    </form>
                    {registered && <Alert status='success'>Account created.</Alert>}
                    {registered === false && <Alert status='error'>{message}</Alert>}
                </div>
            );
        };
    };
}

const RegisterView = connect(mapStateToProps, mapDispatchToProps)(ConnectedRegisterView);

export default RegisterView;