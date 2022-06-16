import React from 'react';

function Search(props) {
    return (
        <form>
            <label htmlFor="location">Location:{' '}</label>
            <input type="text" id="location" placeholder="San Diego, CA"/>
            <button type='submit'>Search</button>
        </form>
    );
}

export default Search;