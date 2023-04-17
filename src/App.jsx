import React, { useState } from 'react';
import './index.css';
import Second from './Second';
import {Route,Routes} from 'react-router-dom';
import Main from './Main';
import Error from './Error';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Treasure from './Treasure';
import Login from './Login';

function App()
{
    return(
        <>
        <Routes>
            <Route exact path="/" element={<Login />}/>
            <Route exact path="/Main" element={<Main/>}/>
            <Route exact path="/Second" element={<Second />}/>
            <Route exact path="/Second/Error" element={<Error />}/>
            <Route exact path="/Second/Third" element={<Third/>}/>
            <Route exact path="/Second/Fourth" element={<Fourth/>}/>
            <Route exact path="/Second/Fourth/Fifth" element={<Fifth/>}/>
            <Route exact path='/Second/Fourth/Fifth/Treasure' element={<Treasure/>}/>
        </Routes>
    </>
    );
}

export default App;