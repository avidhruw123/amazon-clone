import { getAuth, signOut } from "firebase/auth";
import {Link} from 'react-router-dom';
import './Logout.css'

const Logout=()=>{
    
    const auth = getAuth();
    signOut(auth).then((e) => {        
  
    }).catch((error) => {
    
    });
 
    return (
      <div className="logout">
        <Link to='/'>        
            <button onClick={auth}>logout</button>
        </Link>
      </div>  
        
    )
}

export default Logout;