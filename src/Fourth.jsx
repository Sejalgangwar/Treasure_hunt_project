import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Input from './Input';


const Fourth=()=>{
    return(
        <>
        <div className='fourthContainer'>
            <div className='fourthMain'>
                <div className='fc1'> Great Going!!!</div>
                <div className='fc2'>Here is your fourth clue : <br/>
                Determine the key hidden in the given audio file</div>
                <div className='fc3'><Link to="https://drive.google.com/file/d/1yslYAAQW6mO1Ur9YC4VLE34TYA1kINjK/view?usp=share_link" style={{ color:'white',fontWeight:'bold'}}>https://drive.google.com/file/d/1yslYAAQW6mO1Ur9YC4VLE34TYA1kINjK/view?usp=share_link</Link></div>
                
                <Input ans="thunder" num="fifth" link="/second/fourth/fifth"/>

                <div className='fc4'>Still confused??<br/>
                Remember, <strong>Names</strong> have power like magic spells...</div>
            </div>
        </div>
        </>
    );
}

export default Fourth;