import React, {useState} from 'react';
import './Node.css';

const Node = ({row, col, isStart, isEnd, isVisited, isBoundary, handleMouseDown, onMouseEnter, onMouseUp}) => {

    //const [start, setStart] = useState(false);

    

    return( 
        <div className={isStart ? 'start_node' : isEnd ? 'end_node' : 'unvisited_node'}
            onMouseDown={() => handleMouseDown(row, col)}
            //onMouseEnter={() => onMouseEnter(row,col)}
            onMouseUp={() => console.log('')}
            >
            {/* <button className='node-btn' onClick={toggleStart} onMouseOver={(e) => mouseOver(e)} onMouseDown={toggleStart} onMouseUp={toggleStart}></button> */}
            <button className='node-btn'></button>
        </div>
    )
}

export default Node;

