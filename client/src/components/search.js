import React, { useState } from 'react'
import SearchIcon from '../assets/images/icons/search.svg';

export default function Search(props) {
    const [title, setTitle] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        props.history.push(`/search/title/${title}`);
    };

    return (
        <form className="search" onSubmit={submitHandler} name="search-form">
            <div className="row">
                <input
                    type="text"
                    name="q"
                    id="q"
                    className="search-input"
                    placeholder="Пошук.."
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <button type="submit" className="search-submit">
                    <div className="icon-block" >
                        <div className="icon">
                            <img src={SearchIcon} alt="catalog-icon" />
                        </div>
                    </div>
                </button>
                
            </div>
        </form>
    )
}