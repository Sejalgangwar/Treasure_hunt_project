import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Input=(props)=>{
    const navigate = useNavigate();
    const [clue1,setClue1]=useState("");
    const[clue,setClue]=useState();
    const[secondclue,setSecondclue]=useState();

    const onSubmit=(event)=>{
        event.preventDefault();
        setClue(clue1);
        const ans=props.ans;
        if(clue1==ans)
        {
            console.log("hey");
            setSecondclue(<>
            <div className="right">You got this right!! </div><br/><br/>
            Here's your {props.num} clue : 
             navigate({props.link})
            {/* <Link to={props.link} target="_blank" rel="noopener noreferrer" style={{color:'white'}}>  Next</Link> */}
            </>)

        }
        else
        {
            console.log("oops");
            setSecondclue("You got this wrong!!");
        }
    }

    const inputEvent=(event)=>{
        setClue1(event.target.value);
    }
    return(
        <>
            <input type="text" placeholder="Enter the key" onChange={inputEvent} value={clue1} />
            <button onClick={onSubmit}>Submit</button>
            <div className='afterText'>{secondclue}</div>        
        </>
    );
}

export default Input;