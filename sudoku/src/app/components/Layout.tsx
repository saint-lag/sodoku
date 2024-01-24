import React, { FC } from 'react';
import Header from './Header';
import GameControls from './GameControls';
import Board from './Board';
import styles from '../styles/components/Layout.module.css';

interface LayoutProps {
    title: string;
    initialGrid: number[][];
    onNewGame: () => void;
    onSolve: () => void;
    onCellChange?: (newGrid: number[][]) => void;
}

const Layout: FC<LayoutProps> = ({ title, initialGrid, onNewGame, onSolve, onCellChange }) => {
    return (
        <div className={styles.layout}>
            <Header title={title} />
            <GameControls onNewGame={onNewGame} onSolve={onSolve} />
            <Board initialGrid={initialGrid} onCellChange={onCellChange} />
        </div>
    );
}

export default Layout;