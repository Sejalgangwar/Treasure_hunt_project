import React from 'react';
import {Link} from 'react-router-dom';

const Footer=()=>{
    return(
        <>
            <div class="footer">Adopt the pace of nature...Her <Link to="/second/fourth" target="_blank" style={{ textDecoration: 'none', color:'black',fontWeight:'bold'}}>secret</Link> is patience!!</div>
        </>
    );
    
}
export default Footer;