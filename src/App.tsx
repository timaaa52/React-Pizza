import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from "./Components";
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import axios from "axios";
import {setPizzasAC} from "./redux/actions/pizzasActions";
import {useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch();

    //@ts-ignore
    window.test = () => {
        axios.get('http://localhost:3000/db.json').then(({data}) => dispatch(setPizzasAC(data.pizzas)))
    };

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => dispatch(setPizzasAC(data.pizzas))
        );
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes >
                    <Route path='/' element={<Home/>} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </div>
        </div >
    );
}

export default App;
