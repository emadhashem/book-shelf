import React, { useEffect , useState } from 'react'
import Book from '../book/Book'
import './search.css'

const Search = (props) => {
    const [data , setData] = useState(props.books);
    const [res , setRes] = useState([]);
    return (
        <div>
            <form onSubmit = {(e) => {
            e.preventDefault();
        }}>
            <input className = "srh" type = "search" placeholder = "search" onChange = {
                (e) => {
                    const cur = data.filter((book) => (
                        book.name.toLowerCase().includes(e.target.value.toLowerCase())
                    ))
                    setRes(cur);
                    if(e.target.value === '') setRes([])
                }
            }/>
        </form>
        <div className = "search-holder">
            {
                res.map((item) => {
                    let ran = Math.random() * 200;
                    return(
                        <Book key = {item.id + "" + ran} {...item} 
                        onwant = {() => props.onWant(item.id)}
                        onCur = {() => props.onCur(item.id)}
                        onDone = {() => props.onDone(item.id)}
                        onRemove = {() => props.onRemove(item.id)}
                        />
                    )
                })
            }
        </div>
        </div>
    )

}
export default Search
