import React, {useContext, useState} from 'react';
import Draggable from "react-draggable";
import GameMasterInfoNode from "./GameMasterInfoNode";
import InteractiveMapContext from "./InteractiveMapContext";
import GameMasterInfoDisplay from "./GameMasterInfoDisplay";
import InfoNodeEditor from "./InfoNodeEditor";
const MapDisplay = (props) => {


    const {mapName} = props;
    const [GMINData, setGMINData] = useState(
        [
            {id:'gmin_1', xPos:75, yPos:0, nodeDisplay:1, text:'' +
                    'this is node number 1. It is the first node created. Isn\'t that lovely?'},
            {id:'gmin_2', xPos:75, yPos:75, nodeDisplay:2, text:'' +
                    'This is node number 2. It is the second node created. It is still a very good node.'},
            {id:'gmin_3', xPos:75, yPos:150, nodeDisplay:3, text:'' +
                    'This is node number 3. It is the third node created. Last, but certainly not least!'},
        ]
    )

    const [hoveredNodes, setHoveredNodes]=useState([]);

    const imgUrl = 'maps/screamingcauldron.png'

    return (<InteractiveMapContext.Provider value={{
        zoom: '1',
        GMINData:GMINData,
        hoveredNodes:hoveredNodes,
        setHoveredNodes:setHoveredNodes,

    }}>
        <div
        style={{display:"flex",}}>
            <div
                id={'mapDisplayWrapperDiv'}
                style={{
                    height: '100vh', width: '80%',
                    overflow: 'scroll',
                    position: 'relative',
                }}>
                <img id={'displayMap'} alt={' '} src={imgUrl}/>
                {GMINData.map((data, GMINDataIndex,) => {
                    return (<GameMasterInfoNode {...data} GMINDataIndex={GMINDataIndex}/>)
                })}
            </div>
            <div>
                <GameMasterInfoDisplay/>
                <InfoNodeEditor/>
            </div>
        </div>
    </InteractiveMapContext.Provider>)

}

export default MapDisplay;