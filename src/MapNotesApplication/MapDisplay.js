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
                    'this is node number 1. It is the first node created. Isn\'t that lovely?',
                nodeName:'The Beginning',nodeId:'1'},

            {id:'gmin_2', xPos:75, yPos:75, nodeDisplay:2, text:'' +
                    'This is node number 2. It is the second node created. It is still a very good node.',
                nodeName:'The Middle',nodeId:'2'},
            {id:'gmin_3', xPos:75, yPos:150, nodeDisplay:3, text:'' +
                    'This is node number 3. It is the third node created. Last, but certainly not least!',
                nodeName:'The End',nodeId:'3'},

        ]
    )

    const [hoveredNodes, setHoveredNodes]=useState([]);
    const [displayText, setDisplayText]=useState('Hover over a node to get info about it')
    const [displayNodeName, setDisplayNodeName]=useState('');
    const [displayNodeId, setDisplayNodeId]=useState('')
    const updateDisplayTextById = (id) => {
        setDisplayText(GMINData[id].text)
        setDisplayNodeName(GMINData[id].nodeName)
        setDisplayNodeId(GMINData[id].nodeId)

    }

    const updateGMINDisplayName = (id, txt) =>{
        const tempArr = [...GMINData];
        tempArr[id].nodeName=txt;
        setGMINData(tempArr);
    }
    const imgUrl = 'maps/screamingcauldron.png'

    return (<InteractiveMapContext.Provider value={{
        zoom: '1',
        GMINData,
        setGMINData,
        hoveredNodes,
        setHoveredNodes,
        displayText,
        setDisplayText,
        updateDisplayTextById,
        displayNodeName,
        setDisplayNodeName,
        displayNodeId,
        setDisplayNodeId,
        updateGMINDisplayName,


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
                {/*<GameMasterInfoDisplay/>*/}
                <InfoNodeEditor/>
            </div>
        </div>
    </InteractiveMapContext.Provider>)

}

export default MapDisplay;