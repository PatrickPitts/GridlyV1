// import React, {useState} from 'react';
//
// const baseBingo = {
//     'B':[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
//     'I':[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
//     'N':[31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
//     'G':[46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
//     'O':[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],
// };
//
// const BingoList = (props) => {
//
//     const [viableList, setViableList] = useState({...baseBingo});
//
//     const [b1, setB1] = useState(0);
//     const [b2, setB2] = useState(0);
//     const [b3, setB3] = useState(0);
//     const [b4, setB4] = useState(0);
//     const [b5, setB5] = useState(0);
//
//     const [i1, setI1] = useState(0);
//     const [i2, setI2] = useState(0);
//     const [i3, setI3] = useState(0);
//     const [i4, setI4] = useState(0);
//     const [i5, setI5] = useState(0);
//
//     const [n1, setN1] = useState(0);
//     const [n2, setN2] = useState(0);
//     const [n3, setN3] = useState(0);
//     const [n4, setN4] = useState(0);
//     const [n5, setN5] = useState(0);
//
//     const [g1, setG1] = useState(0);
//     const [g2, setG2] = useState(0);
//     const [g3, setG3] = useState(0);
//     const [g4, setG4] = useState(0);
//     const [g5, setG5] = useState(0);
//
//     const [o1, setO1] = useState(0);
//     const [o2, setO2] = useState(0);
//     const [o3, setO3] = useState(0);
//     const [o4, setO4] = useState(0);
//     const [o5, setO5] = useState(0);
//
//     const [calledNumbers, setCalledNumbers] = useState([]);
//     const [currentNumber, setCurrentNumber] = useState('')
//     const [display, setDisplay] = useState('');
//
//     const CalledNumberDisplay = (props) => {
//
//         const numListElements = props.numbers.map((n)=>
//             <li>{n}</li>
//         );
//         return(
//             <ul>
//                 {numListElements}
//             </ul>
//         )
//     }
//
//     return(
//         <div>
//             <button onClick={()=>{
//                 let letter = Object.keys(viableList)[Math.floor(Math.random() * 5)];
//                 let removedIndex = Math.floor(Math.random()*viableList[letter].length);
//                 let number = viableList[letter][removedIndex];
//                 viableList[letter].splice(removedIndex, 1);
//                 let newNumber = '' + letter + ' ' + number
//                 setCurrentNumber(newNumber);
//                 setCalledNumbers([...calledNumbers, newNumber]);
//             }}>Roll</button>
//
//             <button onClick={() => {
//                 setViableList({...baseBingo});
//                 setCalledNumbers([]);
//                 setCurrentNumber('');
//             }}>Reset</button>
//             {currentNumber}<br/>
//             <CalledNumberDisplay numbers={calledNumbers}/>
//         </div>
//     );
// }
//
// export default BingoList;