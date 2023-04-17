import React, {useState} from 'react';
import Input from './Input';
import { useNavigate } from 'react-router-dom';


const Main=()=>{
    const navigate = useNavigate();
    return(
        <>
        <div className='container'>
            <div className='main'>
            <div className='heading'>WELCOME!!</div>
            <div className='main1'>Here goes your first clue : </div>
            <div>f(3)= fdq uxq exw qhyhu zdonv. Kdv d prxwk dqg qhyhu wdonv.<br/>
                Kdv d khdg exw qhyhu zhhsv. Kdv d ehg exw qhyhu vohhsv.
            </div>
            <Input ans="river" num="second" link="/second"/>
            </div>
    </div>
    </>
    );
    
    
}

export default Main;