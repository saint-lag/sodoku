import React, { FC } from 'react';
import styles from '../styles/components/GameControls.module.css';

interface GameControlsProps {
    onNewGame: () => void;
    onSolve: () => void;
}

const GameControls: FC<GameControlsProps> = ({ onNewGame, onSolve }) => {
    return (
        <div className={styles.controls}>
            <button className={styles.button} onClick={onNewGame}>
                New Game
            </button>
            <button className={styles.button} onClick={onSolve}>
                Solve
            </button>
        </div>
    );
};

export default GameControls;