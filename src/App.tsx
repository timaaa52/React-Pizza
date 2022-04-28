import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from "./Components";
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import axios from "axios";
import {setPizzasAC} from "./redux/actions/pizzasActions";
import {useDispatch} from "react-redux";
import { fetchPizzasTC } from './redux/reducers/pizzasReducer';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzasTC())
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
