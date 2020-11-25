import React, {createContext, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ApplicationContext from "./ApplicationContext";
import GridSelector from "./InteractiveGameGrid/GridSelector";
import Grid from "./InteractiveGameGrid/Grid";
import {InteractiveMapContext} from "./MapNotesApplication/InteractiveMapContext";
const App = (props) => {

    const [selectedMap, setSelectedMap] = useState(null);
    const [mapNumRows, setMapNumRows] = useState(16);
    const [mapNumColumns, setMapNumColumns] = useState(16)

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
            case "NOTES":

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

    return(<ApplicationContext.Provider value={{
        setMainComponentSelection:setMainComponentSelection,
        setSelectedMap:setSelectedMap,
        selectedMap:selectedMap,
        mapNumColumns:mapNumColumns,
        mapNumRows:mapNumRows,
        setMapNumColumns:setMapNumColumns,
        setMapNumRows:setMapNumRows,
    }}>

        <InteractiveMapContext.Provider value={{
            mapNumRows:15,
            mapNumColumns:15,
            selectedMap:selectedMap,
        }}>

            {mainComponent}

        </InteractiveMapContext.Provider>

    </ApplicationContext.Provider>);

}

export default App;
