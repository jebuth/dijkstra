
import { findByPlaceholderText } from '@testing-library/dom';
import React, { useState, useEffect, useCallback } from 'react';
import Node from './Node';





function Map(){
    const row_size = 20;
    const col_size = 30;

    let [isClicked, setIsClicked] = useState(false);    
    
    let nodes = [];
    const renderBoard = () => {
        for(let i = 0; i < row_size; i++){
            let row = [];
            for(let j = 0; j < col_size; j++){
                let currentNode = {i, j};
                row.push(currentNode);
            }
            nodes.push(row);
        }    
        
        console.log('renderBoard()');
        console.log(nodes.length);
    }

    renderBoard();
    console.log(nodes);



    const findPath = () => {
        console.log(nodes);
    }

    const handleMouseDown = useCallback((row, col) => {
        console.log('handleMouseDown')
    }, isClicked)


    const onMouseEnter = () => {
        console.log('mouse enter')
    }

    const onMouseUp = () => {
        setIsClicked(false);
    }


    if(nodes.length === 0)
        return (<div className="App-header">{nodes.length}</div>)
    return (
    <div className="App-header">
        <button onClick={findPath}>path</button>
        <div className="map">
            {nodes.map((row, x) => {
                return (row.map((col, y) => {
                    if(x == 0 && y == 0)
                        return (
                        <Node 
                            row={x} 
                            col={y}     
                            isStart={true} 
                            handleMouseDown={handleMouseDown} 
                            onMouseEnter={onMouseEnter} 
                            onMouseUp={onMouseUp}>                                
                        </Node>
                        ) // hardcode source
                    if(x == 10 && y == 15)
                        return (<Node row={x} col={y} isEnd={true}></Node>) // hardcode destination
                    return (<Node row={x} col={y}></Node>)
                }))
                
            })}
        </div>
        
    </div>
    )
    
    

}

export default Map;