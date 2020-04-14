import React, { Component } from 'react'
import './book.css'
const Book = (props) => {
    let name = (props.kind !== 'none') ? "book active" : "book";
    return (
        <div className = {name}>
            <div className = "nm-hol">{props.name}</div>
            <div className = "btn-holder">
                <button className = "btn btn-dark" onClick = {props.onwant}>want to read</button>
                <button className = "btn btn-dark" onClick = {props.onCur}>curuntly reading </button>
                <button className = "btn btn-dark" onClick = {props.onDone}>readed</button>
                <button className = "btn btn-dark" onClick = {props.onRemove}>none</button>
            </div>
        </div>
    )
}
export default Book
