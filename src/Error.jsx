import React from 'react';
import DeadPic from "./img/dead2.jpg";
import { useNavigate } from 'react-router-dom';

const Error=()=>{
        const nav=useNavigate();
        const timer=()=>{
            nav("/");
        }

        setTimeout(timer,5000);
        return(
            <>
            <div className='Errorcontainer'>
                <div className='Errormain'>
                <img src={DeadPic}/>
                <div>Oops!!Wrong Choice!!!</div>
                </div>
            </div>
            </>
        );
}

export default Error;