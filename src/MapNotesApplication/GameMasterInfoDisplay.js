import React, {useContext} from 'react';
import InteractiveMapContext from "./InteractiveMapContext";

const GameMasterInfoDisplay = (props) => {

    const {zoom, hoveredNodes, GMINData} = useContext(InteractiveMapContext);
    const placeholderText = 'hover over a node to display info about it'
    return(<div>{hoveredNodes.length > 0 ?
        GMINData[hoveredNodes[hoveredNodes.length-1]].text : placeholderText

    }</div>);

}

export default GameMasterInfoDisplay;