import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Footer=()=>{
    const nav=useNavigate();
    const onClick1=()=>{
        nav("/second/fourth");
    }
    return(
        <>
            <div class="footer">Adopt the pace of nature...Her <span onClick={onClick1} style={{ textDecoration: 'none', color:'black',fontWeight:'bold',cursor:'pointer'}}>secret</span> is patience!!</div>
        </>
    );
    
}
export default Footer;