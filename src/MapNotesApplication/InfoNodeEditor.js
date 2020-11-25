import React, {useContext} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import InteractiveMapContext from "./InteractiveMapContext";
const InfoNodeEditor=(props)=>{

    const {} = useContext(InteractiveMapContext);

    const handleEditorChange = (content, editor) => {
        console.log('content was updated: ', content)
    }

    return(<div>
        <Editor
             initialValue={'Hover over a node to get info about it'}
             init={{
                 height:500,
                 plugins:[
                     'advlist autolink lists link image charmap print preview anchor',
                     'searchplace visualblocks code fullscreen',
                     'insertdatetime media table paste code help wordcount'
                 ],
                 toolbar:
                 'undo redo | formatselect | bold italic backcolor | \
                 alignleft aligncenter alignright alignjustify| \
                 bullist numlist outdent indent | removeformat| help'
             }}
             onEditorChange={handleEditorChange}
        />
    </div>);

}

export default InfoNodeEditor;