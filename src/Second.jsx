import React from 'react';
import dog from "./img/dog.jpg";
import cat from "./img/cat.jpg";
import rabbit from './img/rabbit.jpg';
import {Link,useNavigate} from 'react-router-dom';
import Footer from './Footer';

const Second=()=>{
    const nav=useNavigate();
    const onClick1=()=>{
        nav("/second/third");
    }
    const onClick2=()=>{
        nav("/second/error");
    }

    return(
        <>
        <div className='secondContainer'>
            <div className='secondMain'>
                <div className='sc1'>Here is your second clue : </div>
                <div className='sc2'>I have a bark, but I'm not a tree. When you ask,"who's a good boy?" the answer is me!</div>
                <div className='sc3'>Choose one image according to the above clue.<br/><br/>
                 BEWARE!! Wrong choice may take you to a dead end!</div>
                <div className='pics'>
                    <div onClick={onClick1}><img src={dog}/></div>
                    <div onClick={onClick2}><img src={cat}/></div>
                    <div onClick={onClick2}><img src={rabbit}/></div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    );
}

export default Second;