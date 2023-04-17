import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Treasure from './Treasure';


const Fifth=()=>{

    const nav=useNavigate();
    const [clue1,setClue1]=useState("");
    const[clue,setClue]=useState();
    const[secondclue,setSecondclue]=useState();

    const inputEvent=(event)=>{
        setClue1(event.target.value);
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        setClue(clue1);
        if(clue1=='leaves')
        {
            console.log("hey");
            nav("/Second/Fourth/Fifth/Treasure");

        }
        else
        {
            console.log("oops");
            setSecondclue("Wrong!");
        }
    }
    return(
        <>
        <div className='fifthContainer'>
            <div className='fifthMain'>
                <div className='ffc1'>Bravo! You are just one step away from the treasure..</div>
                <div className='ffc2'>Here is your final clue : </div>
                <div className='ffc3'><Link to="https://drive.google.com/file/d/11luxGOBKu-uzejsSNzVcXy11h9ccpndj/view?usp=share_link" style={{ color:'black',fontWeight:'bold'}}>https://drive.google.com/file/d/11luxGOBKu-uzejsSNzVcXy11h9ccpndj/view?usp=share_link</Link></div>

                <input type="text" placeholder="Enter the key to next clue " onChange={inputEvent} value={clue1} />
                <button onClick={onSubmit}>Submit</button>
                <div className='afterText'>{secondclue}</div>

            </div>
        </div>
        
        </>
    );
}
export default Fifth;