import React, { useEffect , useState } from 'react'
import './mybooks.css'
import Book from '../book/Book'
const MyBooks = (props) => {
    
    return (
        <div style = {{width : '100%' ,margin : 'auto' }}>
            <div className = "block">
                <strong className = "str-blk">want to read</strong>
                <div>
                    {
                        
                        props.want.map(item => {
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
                <hr/>
            </div>
            <div className = "block">
            <strong className = "str-blk">currently</strong>
                <div>
                {
                        
                        props.cur.map(item => {
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
                <hr/>
            </div>
            <div className = "block">
            <strong className = "str-blk">readed</strong>
                <div>
                {
                        
                        props.done.map(item => {
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
                <hr/>
            </div>
        </div>
    )
}
export default MyBooks
