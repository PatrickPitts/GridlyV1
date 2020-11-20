import React, {useContext} from 'react';
import ApplicationContext from "./ApplicationContext";
const GlobalTesting=()=>{
    const [globalValue, setGlobalValue] = useContext(ApplicationContext);
    return(<div>{globalValue}</div>);
}

export default GlobalTesting;