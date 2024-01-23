import React, {ChangeEvent, FC} from 'react';
import styles from '../styles/components/Cell.module.css';

interface CellProps {
    value: number;
    onChange: (value: number) => void;
}

const Cell: FC<CellProps> = ({value, onChange}) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = parseInt(event.target.value, 10) || 0;
        onChange(inputValue);
    };

    return (
        <input
            className={styles.cell}
            type="number"
            min={0}
            max={9}
            value={value || ''}
            onChange={handleInputChange}
        />
    );
}

export default Cell;