import React , {useEffect , useState}from 'react';
import './App.css';
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import { BrowserRouter , Route , Switch, HashRouter} from 'react-router-dom';
import Search from './components/search/Search';
import MyBooks from './components/mybooks/MyBooks';
import {v4} from 'uuid';
const books = [
  {
    name : 'c++1',
    id : v4() + "" + Math.random() * 200,
    kind : "none"
  },
  {
    name : 'c++2',
    id : v4() + "" + Math.random() * 200,
    kind : "none"
  },
  {
    name : 'c++3',
    id : v4() + "" + Math.random() * 200,
    kind : "none"
  },
  {
    name : 'c++4',
    id : v4() + "" + Math.random() * 200,
    kind : "none"
  },
  {
    name : 'c++5',
    id : v4() + "" + Math.random() * 200,
    kind : "none"
  },
  {
    name : 'javascript1',
    id : v4() + "" + Math.random() * 200,
    kind : "none"
  },
  {
    name : 'javascript2',
    id : v4() + "" + Math.random() * 200,
    kind : "none"
  },
  {
    name : 'javascript3',
    id : v4() + "" + Math.random() * 200,
    kind : "none"
  },
  {
    name : 'javascript5',
    id : v4() + "" + Math.random() * 200,
    kind : "none"
  },
  {
    name : 'javascript6',
    id : v4() + "" + Math.random() * 200,
    kind : "none"
  }
];

const  App = () => {
    const [data , setData] = useState(books);
    const [want , setWant] = useState([]);
    const [cur , setCur] = useState([]);
    const [done , setDone] = useState([]);

    const onWant = (id) => {
      console.log("wnat")
      let x;
      data.map(item => {
        if(item.id === id) {
          x = item
        }
      })
      x.kind = "want"
      let arr = data;
      arr = data.filter(item => item.id !== id);
      setData([...arr , x]);
    }
    const onCur = (id) => {
      console.log("cur")
      let x;
      data.map(item => {
        if(item.id === id) {
          x = item
        }
      })
      x.kind = "cur"
      let arr = data;
      arr = data.filter(item => item.id !== id);
      setData([...arr , x]);
    }
    const onDone = (id) => {
      console.log("dobne")
      let x;
      data.map(item => {
        if(item.id === id) {
          x = item
        }
      })
      x.kind = "done"
      let arr = data;
      arr = data.filter(item => item.id !== id);
      setData([...arr , x]);
    }
    const onRemove = (id) => {
      let x;
      data.map(item => {
        if(item.id === id) {
          x = item
        }
      })
      x.kind = "none"
      let arr = data;
      arr = data.filter(item => item.id !== id);
      setData([...arr , x]);
    }

    useEffect(() => {
        console.log("effect")
        let nWant = [], nCur = [], nDone = [];
        nWant = data.filter(item => item.kind == "want");
        nCur = data.filter(item => item.kind == "cur");
        nDone = data.filter(item => item.kind == "done");
        setDone(nDone);
        setWant(nWant);
        setCur(nCur);
    } , [data])
    
    
    return (
     <div style = {{width : '100%'}}>
       <BrowserRouter>
          <Nav/>
          <div style = {{width : '80%' , margin : 'auto'}}>
            <Switch>
              <Route path = "/home" render = {() => <Home/>}/>
              <Route path = "/search" render = {() => <Search 
              books = {data} onWant = {onWant} onDone = {onDone} onCur = {onCur} onRemove = {onRemove}/>}/>
              <Route path = "/mybooks" render = {() => 
              
              <MyBooks want = {want} cur = {cur} done = {done}
              onWant = {onWant} onDone = {onDone} onCur = {onCur} onRemove = {onRemove}
              />}/>
              
            </Switch>
          </div>
       </BrowserRouter>
     </div>
    );
}
export default App;
