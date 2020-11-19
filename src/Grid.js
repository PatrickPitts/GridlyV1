import React, {useEffect, useState} from 'react';

const GridElement = (props) => {
    const {squareHeight} = props;
    return (<div style={{
        float: 'left',
        width: `${squareHeight}px`, height: `${squareHeight}px`,
        boxSizing: 'borderBox',
        boxShadow: 'inset 2px 2px white',
        zIndex: '9'
    }}>
    </div>);
}

const InfoDisplay = (props) => {

    //const {setNumColumns, setNumRows} = props;
    const[selectedColumns, setSelectedColumns] = useState(0);
    const[selectedRows, setSelectedRows] = useState(0);
    return (
        <div
            style={{
                position: 'fixed',
                top: '0px',
                right: '0px',
                zIndex:'10',

            }}
        >
            <label>Number of Columns</label>
            <input id={'numColumnSelector'} type={'number'} min={1} defaultValue={26}
                   // onChange={
                   //     (e) => {
                   //         setNumColumns(e.target.value);
                   //     }
                   // }
            />
            <button />

        </div>
    )

}

const Another = () => {
    return <div
        style={{
            position: 'fixed',
            top: '0px',
            right: '0px',
            zIndex:'10',

        }}>Another</div>;
}

const Grid = (props) => {

    const [imgWidth, setImgWidth] = useState(0);
    const [imgHeight, setImgHeight] = useState(0);
    const [imgPath, setImgPath] = useState('/maps/downeddragon.png');
    const [elem, setElem] = useState(<InfoDisplay/>);

    const img = new Image();
    img.src = imgPath;
    img.onload = () => {
        setImgWidth(img.width);
        setImgHeight(img.height);

    }

    const gridLineWidth = 2;

    const [numColumns, setNumColumns] = useState(26);
    const [numRows, setNumRows] = useState(19);

    const [squareHeight, setSquareHeight] = useState(Number(imgHeight) / Number(numRows));
    const [squareWidth, setSquareWidth] = useState(Number(imgWidth) / Number(numColumns));

    const [gridElementArray, setGridElementArray] = useState([]);

    const buildGridElements = () => {
        let temp = []
        for (let r = 0; r < numRows; r++) {
            let thisRow = [];
            for (let c = 0; c < numColumns; c++) {
                thisRow.push(<GridElement
                    row={r}
                    column={c}
                    squareHeight={squareHeight}
                    squareWidth={squareWidth}
                />)
            }
            temp.push(thisRow);
        }
        return temp;
    }

    useEffect(()=>{
        setSquareHeight(imgHeight/numRows);
        setSquareWidth(imgWidth/numColumns);
        console.log('in use state' + squareWidth + " " + squareHeight);
        setGridElementArray(()=>{
            return buildGridElements();
        })
    },[numColumns, numRows, imgWidth, imgHeight])



    return (
        <div style={{
            position: "relative",
            width: `${imgWidth}px`, height: `${imgHeight}px`,
            top: '0px', left: '0px',
            borderRight: `${gridLineWidth}px solid white`,
            borderBottom: `${gridLineWidth}px solid white`,
            zIndex: '3'
        }}>
            <img
                src={'/maps/downeddragon.png'}
                alt={''}
                style={{
                    position: 'absolute',
                    zIndex: '-1',
                }}/>
            {gridElementArray}
            <InfoDisplay setNumRows={setNumRows} setNumColumns={setNumColumns}/>
        </div>
    );
}

export default Grid;