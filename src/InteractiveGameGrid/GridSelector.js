import React, {useContext, useState} from 'react';
import ApplicationContext from "../ApplicationContext";

const getMapNames = () => {
    return ['dotmm-level1.jpg', 'downeddragon.png', 'swamptown.png', 'screamingcauldron.png', 'gemstonecave16x16.jpg',
        'hideout35x24.jpg'];
}

const MapSelectorElement = (props) => {

    const {mapName} = props;
    const {setSelectedMap} = useContext(ApplicationContext);
    const imgPath = `/maps/${mapName}`

    const [bgColor, setBgColor] = useState('white')

    return (
        <div

            style={{
                width: '100%',
                borderBottom: 'solid black 2px',
                height: '100%',
                position: 'relative',
                background: `${bgColor}`,

            }}

            onMouseOver={() => {
                setBgColor('lightBlue')
            }}

            onMouseLeave={() => {
                setBgColor('white')
            }}

            onClick={() => {
                setSelectedMap(mapName)
            }}
        >
            <img
                style={{
                    float: 'left',
                    height: '75px', width: '75px',
                    padding: "2%",

                }}
                src={imgPath} alt={' '}/>
            <div
                style={{
                    position: "absolute",
                    top: '35%',
                    left: '30%',
                    verticalAlign: 'middle',
                    height: '100%'

                }}
            >
                {mapName}
            </div>
        </div>
    );
}

const MapSelector = (props) => {

    const {mapNames, setSelectedMap} = props;
    const selectorArray = mapNames.map((name) =>
        <MapSelectorElement mapName={name} setSelectedMap={setSelectedMap}/>
    )

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',

            }}
        >{selectorArray}</div>
    )
}

const MapPreviewAndOptions = (props) => {

    const {selectedMap} = useContext(ApplicationContext);
    const {
        setMainComponentSelection,
        setMapConfigurationSettings,
        mapConfigurationSettings,
        mapNumRows,
        setMapNumRows,
        mapNumColumns,
        setMapNumColumns,
    } = props;

    return (
        <div
            style={{
                display: "inline-block",
                border: '2px solid black',
                width: '60%',
                position: 'absolute',
                top: '10%',
                right: '10%',
                bottom: '10%',
            }}
        >
            <div id={'gridOptionSet'}
                 style={{
                     display: "inline-block",
                     width: '20%',
                     height: '100%',
                     position: 'relative',
                     top: '20%',
                 }}>
                <table
                    style={{
                        width: '90%',
                    }}
                >
                    <tr>
                        <td>Rows</td>
                        <td><input
                            type={'number'}
                            style={{
                                width: '95%',
                                fontSize: '1.25em',
                            }}
                            onChange={(e) => {
                                setMapNumRows(e.target.value)
                            }}
                            defaultValue={mapNumRows} min={1}/></td>
                    </tr>
                    <tr>
                        <td>Columns</td>
                        <td><input
                            type={'number'}
                            style={{
                                width: '95%',
                                fontSize: '1.25em',
                            }}
                            onChange={(e) => {
                                setMapNumColumns(e.target.value)
                            }}
                            defaultValue={mapNumColumns} min={1}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button
                                style={{
                                    fontSize: '1.25em',
                                }}
                                onClick={() => {
                                    setMainComponentSelection("GRID")
                                }}
                            >Lets Play!
                            </button>
                        </td>
                    </tr>

                </table>
            </div>
            <img
                src={`maps/${selectedMap}`}
                alt={' '}
                style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    display: "inline-block",
                    width: '80%',
                    height: '100%',
                }}
            />

        </div>
    );
}

const GridSelector = (props) => {

    const {setSelectedMap,
    setMainComponentSelection,
    mapNumColumns,
    setMapNumColumns,
    mapNumRows,
    setMapNumRows,} = useContext(ApplicationContext)


    return (
        <div
            style={{
                fontSize: '125%',
            }}
        >
            <div
                style={{
                    position: "absolute",
                    height: '50%', width: '20%', top: '10%', left: '5%',
                    borderRadius: '5px',
                    border: '2px solid black',
                    overflowY: "scroll",
                    overflowX: "hidden",
                }}>
                <MapSelector mapNames={getMapNames()} setSelectedMap={setSelectedMap}/>
            </div>
            <div>
                <MapPreviewAndOptions
                    setMainComponentSelection={setMainComponentSelection}
                    mapNumColumns={mapNumColumns}
                    setMapNumColumns={setMapNumColumns}
                    mapNumRows={mapNumRows}
                    setMapNumRows={setMapNumRows}
                />
            </div>

        </div>
    );
}

export default GridSelector;