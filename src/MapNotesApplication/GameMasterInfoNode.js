import React, {useContext, useRef, useState} from 'react';
import Draggable from "react-draggable";
import InteractiveMapContext from "./InteractiveMapContext";

const GameMasterInfoNode = (props) => {

    //todo: displayText and setDisplayText may achieve the original goal of hoveredNodes and
    //setHoveredNodes. Review code
    const {hoveredNodes, setHoveredNodes, displayNodeId,
        updateDisplayTextById,} = useContext(InteractiveMapContext);

    const [allowableAxis, setAllowableAxis] = useState('both')
    const nodeRef = useRef(null);

    const {xPos, yPos, id, nodeDisplay, GMINDataIndex} = props;

    const imgHeight = 768;
    const imgWidth = 768;

    const handleStart = () => {
    };
    const handleDrag = () => {
    };
    const handleStop = (event, dragElement) => {

        const draggableScrollOffsetX = document.getElementById('mapDisplayWrapperDiv').scrollLeft;
        const absolutePosition = dragElement.node.getBoundingClientRect().x;

    };

    return (

        <Draggable
            axis={allowableAxis}
            bounds={{right: imgWidth, bottom: imgHeight,left:-xPos , top:-yPos}}
            nodeRef={nodeRef}
            handle={`#${id}`}
            onStop={handleStop}
        >
            <div
                id={id}
                className={'gmDisplayNode'}
                ref={nodeRef}
                style={{
                    width: '25px',
                    height: '25px',
                    background: 'white',
                    border: '2px solid black',
                    borderRadius: '50%',
                    zIndex: '99',
                    textAlign: "center",
                    verticalAlign: "middle",
                    position: "absolute",
                    top: `${yPos}px`,
                    left: `${xPos}px`,
                }}
                //todo: update editor text to reflect the selected nodes' data,
                //AND wire up the state of the node data to the editor directly,
                //such that changes to the editor automatically save top the nodes' data.
                onMouseOver={()=>{
                    setHoveredNodes(hoveredNodes.concat(GMINDataIndex));
                    updateDisplayTextById(GMINDataIndex)


                }}
                onMouseOut={()=>{
                    let tempArr = [...hoveredNodes];
                    let i = hoveredNodes.indexOf(GMINDataIndex);
                    if(i > -1){
                        tempArr.splice(i, 1);
                    }
                    setHoveredNodes(tempArr);
                }}
            >{nodeDisplay}
            </div>
        </Draggable>

    );

}

export default GameMasterInfoNode;