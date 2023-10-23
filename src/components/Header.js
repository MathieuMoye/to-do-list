import React from "react"
import '../styles/Header.css'


export const Header = ({ toggle, setToggle }) => {

    const handleClick = () => {
        setToggle(!toggle)
    }
    return (
        <div id='header-container'>
        <toggle id='header-button' onClick={handleClick}>{toggle ? '☀️' : '🌙' }</toggle>
        <h1 id='title'>To-Do</h1>
        </div>
    )
}