import React, {useContext, useRef, useState} from 'react';
import Draggable from "react-draggable";
import InteractiveMapContext from "./InteractiveMapContext";

const GameMasterInfoNode = (props) => {

    const {hoveredNodes, setHoveredNodes} = useContext(InteractiveMapContext);

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


        console.log(draggableScrollOffsetX + absolutePosition);
    };

    return (

        <Draggable
            //defaultPosition={{x: 25, y: 25}}
            axis={allowableAxis}
            bounds={{right: imgWidth, bottom: imgHeight,left:-xPos , top:-yPos}}
            //bounds={'parent'}
            nodeRef={nodeRef}
            handle={`#${id}`}
            // onStart={handleStart}
            // onDrag={handleDrag}
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
                onMouseOver={()=>{
                    setHoveredNodes(hoveredNodes.concat(GMINDataIndex))
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