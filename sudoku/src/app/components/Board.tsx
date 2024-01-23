import React, {useState, FC} from 'react';
import Cell from './Cell';
import styles from '../styles/components/Board.module.css';

interface BoardProps {
    initialGrid: number[][];
    onCellChange?: (newGrid: number[][]) => void;
}

const Board: FC<BoardProps> = ({initialGrid, onCellChange}) => {
    const [grid, setGrid] = useState(initialGrid);

    const handleCellChange = (row: number, col: number, value: number) => {
        const newGrid = [...grid];
        newGrid[row][col] = value;
        setGrid(newGrid);

        onCellChange && onCellChange(newGrid);
    };

    return (
        <div className={styles.board}>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.row}>
                    {row.map((cell, colIndex) => (
                        <Cell
                            key={colIndex}
                            value={cell}
                            onChange={value => handleCellChange(rowIndex, colIndex, value)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;