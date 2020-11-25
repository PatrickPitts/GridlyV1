import React, {useContext, useEffect, useState} from 'react';
import ApplicationContext from "../ApplicationContext";
import GameMasterInfoNode from "../MapNotesApplication/GameMasterInfoNode"
const GridElement = (props) => {
    const {r, c} = props;
    const [gridElementStyle, setGridElementStyle] = useState(
        {
            boxSizing: 'borderBox',
            boxShadow: 'inset 2px 2px black',
            zIndex: '9',
            gridColumn: `${c + 1} / ${c + 2}`,
            gridRow: `${r + 1} / ${r + 2}`,
        }
    )
    return (<div style={gridElementStyle}
                 // onMouseOver={() => {
                 //     setGridElementStyle({...gridElementStyle, backdropFilter: 'blur(5px)'})
                 // }}
                 // onMouseLeave={() => {
                 //     setGridElementStyle({...gridElementStyle, backdropFilter: null})
                 // }}
    >
    </div>);
}

const InfoDisplay = (props) => {


    return (
        <div
            style={{
                position: 'fixed',
                top: '0px',
                right: '0px',
                zIndex: '10',

            }}
        >
            <label>Number of Columns</label>
            <input id={'numColumnSelector'} type={'number'} min={1} defaultValue={26}
                onChange={()=>{}}
            />
            <button/>

        </div>
    )

}

const InteractiveGridLayer = (props) => {

    const {imgWidth, imgHeight, mapNumRows, mapNumColumns} = props;

    //const mapNumRows = 16;
    //const mapNumColumns = 16;

    const elements = [];
    for (let r = 0; r < mapNumRows; r++) {
        let newRow = [];
        for (let c = 0; c < mapNumColumns; c++) {
            newRow.push(<GridElement r={r} c={c}/>)
        }
        elements.push(newRow);
    }

    return (
        <div
            style={{
                display: 'grid',
                gridGap: '1px solid black',
                width: `${imgWidth}px`,
                height: `${imgHeight}px`,
                gridTemplateRows: `${mapNumRows}`,
                gridTemplateColumns: `${mapNumColumns}`,
                zIndex:'3',

            }}
        >
            {elements}
        </div>
    );
}

const Grid = (props) => {

    const {selectedMap, mapNumRows, mapNumColumns} = useContext(ApplicationContext);

    const { setMainComponentSelection} = props;

    const [imgWidth, setImgWidth] = useState(0);
    const [imgHeight, setImgHeight] = useState(0);
    const [imgPath, setImgPath] = useState(`/maps/${selectedMap}`);

    const img = new Image();
    img.src = imgPath;
    img.onload = () => {
        setImgWidth(img.width);
        setImgHeight(img.height);

    }

    const gridLineWidth = 1;
    const [squareHeight, setSquareHeight] = useState(59.5);
    const [squareWidth, setSquareWidth] = useState(59.5);
    const [gridElementArray, setGridElementArray] = useState([]);

    const buildGridElements = () => {
        let temp = []
        for (let r = 0; r < mapNumRows; r++) {
            let thisRow = [];
            for (let c = 0; c < mapNumColumns; c++) {
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

    useEffect(() => {
        setSquareHeight(imgHeight / mapNumRows);
        setSquareWidth(imgWidth / mapNumColumns);
        setGridElementArray(() => {
            return buildGridElements();
        })
    }, [mapNumColumns, mapNumRows, imgWidth, imgHeight])


    return (
        <div style={{
            position: "relative",
            display: 'inline-block',
            width: `${imgWidth}px`, height: `${imgHeight}px`,
            borderRight: `${gridLineWidth}px solid white`,
            borderBottom: `${gridLineWidth}px solid white`,
            zIndex: '3'
        }}>
            <img
                src={imgPath}
                alt={''}
                style={{
                    position: 'absolute',
                    zIndex: '-1',
                    top: '0px', left: '0px',
                    maxWidth:'85%', maxHeight:'100%',
                    overflow:'scroll'
                    }}/>
            <InteractiveGridLayer
                imgWidth={imgWidth}
                imgHeight={imgHeight}
                mapNumRows={mapNumRows}
                mapNumColumns={mapNumColumns}
            />
            <GameMasterInfoNode/>
        </div>
    );
}

export default Grid;