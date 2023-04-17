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
            <Route exact path="/second" element={<Second />}/>
            <Route exact path="/second/error" element={<Error />}/>
            <Route exact path="/second/third" element={<Third/>}/>
            <Route exact path="/second/fourth" element={<Fourth/>}/>
            <Route exact path="/second/fourth/fifth" element={<Fifth/>}/>
            <Route exact path='/second/fourth/fifth/treasure' element={<Treasure/>}/>
        </Routes>
    </>
    );
}

export default App;