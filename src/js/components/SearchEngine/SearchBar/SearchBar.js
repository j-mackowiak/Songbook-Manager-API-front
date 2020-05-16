import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        inputValue: ''
    }

    debounce = (func, delay) => {
        let inDebounce;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(inDebounce);
            inDebounce = setTimeout(() => func.apply(context, args), delay);
        }
    };

    handleOnChange = e => {
        this.setState({ inputValue: e.target.value });

    }

    handleOnKeyUp = () => {
        const { fetchStuff } = this.props;
        const { inputValue } = this.state;
        fetchStuff(inputValue);
    }

    render() {
        const { inputValue } = this.state;
        const { type } = this.props;
        if (type === 'songsForPlaylists') {
            return (
                <input type='text' placeholder={`Search songs`} value={inputValue} onChange={this.handleOnChange} onKeyUp={this.debounce(this.handleOnKeyUp, 750)} />
            )
        } else {
            return (
                <input type='text' placeholder={`Search ${type}`} value={inputValue} onChange={this.handleOnChange} onKeyUp={this.debounce(this.handleOnKeyUp, 750)} />
            )
        }
    }
}

export default SearchBar;