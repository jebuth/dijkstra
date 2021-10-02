import { NODE_FIELDS } from '@babel/types';
import React, { useState, useEffect } from 'react';
import Node from './Node';


function Map(){

    const row_size = 20;
    const col_size = 30;

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

    if(nodes.length === 0)
        return (<div className="App-header">{nodes.length}</div>)
    return (
    <div className="App-header">
        <div className="map">
            {nodes.map((row, rowIndex) => {
                return (row.map((col, colIndex) => {
                    return (<Node row={rowIndex} col={colIndex}></Node>)
                }))
                
            })}
        </div>
        
    </div>
    )
    
    

}

export default Map;