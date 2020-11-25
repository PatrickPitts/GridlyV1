import React, {useContext} from 'react';
import ApplicationContext from "./ApplicationContext";
const GlobalTesting=()=>{
    const [globalValue, setGlobalValue] = useContext(ApplicationContext);
    return(<div>{globalValue}
    <button onClick={()=>{setGlobalValue("I have changed your global!")}}>Change</button>
    </div>);
}

export default GlobalTesting;