import React, {useContext, useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import InteractiveMapContext from "./InteractiveMapContext";

const InfoNodeEditor = (props) => {

    const {
        displayText,
        displayNodeName,
        setDisplayNodeName,
        displayNodeId,
        setDisplayNodeId,
        updateGMINDisplayName,
        hoveredNodes,
    } = useContext(InteractiveMapContext);

    const handleEditorChange = (content, editor) => {

    }
    return (<div>
        <input style={{width: '10%'}} placeholder={'N'}
               value={displayNodeId}
               onChange={(event) => {
                   setDisplayNodeId(event.target.value);

               }}
        />

        <input style={{width: '75%'}} placeholder={'Name...'}
               value={displayNodeName}
               onChange={(event) => {
                   setDisplayNodeName(event.target.value);
                   alert(hoveredNodes.length);
                   if(hoveredNodes.length>0){
                       updateGMINDisplayName(hoveredNodes[hoveredNodes.length-1], event.target.value)
                   }
               }}
        />

        <Editor
            initialValue={'Hover over a node to get info about it'}
            id={'gmin-text-editor'}
            init={{
                height: 500,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    bullist numlist outdent indent | removeformat| help'
            }}
            onEditorChange={handleEditorChange}
            value={displayText}
        />
    </div>);

}

export default InfoNodeEditor;