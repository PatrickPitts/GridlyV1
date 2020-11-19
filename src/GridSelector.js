import React from 'react';

const getMapNames = () => {
    return ['dotmm-level1.jpg', 'downeddragon.png', 'swamptown.png'];
}

const MapSelectorElement = (props) => {

    const {mapName} = props;

    const imgPath = `/maps/${mapName}`

    return (<div

    >
        <img
            style={{
                float: 'left',
                height: '75px', width: '75px',
            }}
            src={imgPath} alt={' '}/>
        <div
            style={{
                float: 'left'
            }}
        >{mapName}</div>

    </div>)
}

const MapSelector = (props) => {

    const {mapNames} = props;
    const selectorArray = mapNames.map((name) =>
        <MapSelectorElement mapName={name}/>
    )

    return (
        <div
            style={{
                display: 'block'
            }}
        >{selectorArray}</div>
    )
}

const GridSelector = (props) => {


    const {setChosenMap} = props;

    return (
        // <div>
        //     <MapSelector mapNames={getMapNames()} setChosenMap={setChosenMap}/>
        // </div>

        <div

        style={{
            height:'50%', width:'20%', top:''
        }}>

        </div>
    );
}

export default GridSelector;