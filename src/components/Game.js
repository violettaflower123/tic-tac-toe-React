import React, { useState } from 'react';
import '../App.css';
import Board from './Board';
import { calculateWinner } from '../helper';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsnext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);


    const handleClick = (index) => {
        const boardCopy = [...board];
        // был ли уже клик или игра закончена
        if(winner || boardCopy[index]) return;
        // определить чей ход, крестик или нолик
        boardCopy[index] = xIsnext ? 'X' : '0'
        // обновить стейт
        setBoard(boardCopy);
        setXIsNext(!xIsnext);
    }

    const startNewGame = () => {
        return (
            <button className="start-btn" onClick={() => setBoard(Array(9).fill(null))}>Начать новую игру</button>
        )
    }



    return (
        <div className="wrapper">
             { startNewGame() }
            <Board squares={board} click={handleClick}/>
        <p className="text">
            { winner ? 'Победитель ' + winner : 'Сейчас ходит: ' + ( xIsnext ? 'X' : '0')}
        </p>
            
            
        </div>
    );
}

export default Game;
