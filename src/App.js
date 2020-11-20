import React, {createContext, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ApplicationContext from "./ApplicationContext";
import GridSelector from "./GridSelector";
import Grid from "./Grid";
import GlobalTesting from "./GlobalTesting";
const App = (props) => {

    const [globalValue, setGlobalValue] = useState("Hello yes I am a global");
    const [selectedMap, setSelectedMap] = useState(null);
    const [mapNumRows, setMapNumRows] = useState(20);
    const [mapNumColumns, setMapNumColumns] = useState(20)

    const [mainComponent, setMainComponent] = useState(null)
    const [mainComponentSelection, setMainComponentSelection] = useState('SELECTOR');
    useEffect(()=>{
        switch(mainComponentSelection){
            case "SELECTOR":
                setMainComponent(<GridSelector
                    setMainComponentSelection={setMainComponentSelection}
                    mapNumRows={mapNumRows}
                    setMapNumRows={setMapNumRows}
                    mapNumColumns={mapNumColumns}
                    setMapNumColumns={setMapNumColumns}
                    setSelectedMap={setSelectedMap}
                    selectedMap={selectedMap}
                />);
                break;
            case "GRID":
                setMainComponent(<Grid
                    setMainComponentSelection={setMainComponentSelection}
                    mapNumRows={mapNumRows}
                    mapNumColumns={mapNumColumns}
                    selectedMap={selectedMap}
                />);
                break;
            default:
                setMainComponent(<GridSelector
                    setMainComponentSelection={setMainComponentSelection}
                    mapNumRows={mapNumRows}
                    setMapNumRows={setMapNumRows}
                    mapNumColumns={mapNumColumns}
                    setMapNumColumns={setMapNumColumns}
                    setSelectedMap={setSelectedMap}
                    selectedMap={selectedMap}
                />);
                break;
        }

    }, [mainComponentSelection])

    //return(<ApplicationContext value={[globalValue, setGlobalValue]}>mainComponent</ApplicationContext>);
    return(<ApplicationContext.Provider value={[globalValue, setGlobalValue]}><GlobalTesting/></ApplicationContext.Provider>);

}

export default App;
