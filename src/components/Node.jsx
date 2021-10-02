import React, {useState} from 'react';
import './Node.css';

const Node = ({row, col}) => {

    const [start, setStart] = useState(false);

    const toggleStart = () =>{
        setStart(!start);
    }

    const mouseOver = (e) => {
        console.log(e);
    }

    return( 
        <div className={start ? 'end_node' : 'start_node'}>
            <button className='node-btn' onClick={toggleStart} onMouseOver={(e) => mouseOver(e)} onMouseDown={toggleStart} onMouseUp={toggleStart}></button>
        </div>
    )
}

export default Node;