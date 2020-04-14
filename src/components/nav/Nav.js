import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './mybooks.css'
 const  Nav = () =>  {
    return (
        <div style = {{display : 'flex' , width : '90%' , margin : 'auto'}}>
            <h1><Link style = {{textDecoration : "none"}} to = "/home">Bookshelf</Link></h1>
            <p style = {{flex : 1}}></p>
            <h3 className = "mb"><Link style = {{textDecoration : "none"}} to = "/mybooks">mybooks</Link></h3>
            <h3><Link to = "/search"><i className="fa fa-search" aria-hidden="true"></i></Link></h3>
            
        </div>
    )
    
}
export default Nav