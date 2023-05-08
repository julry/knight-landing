import { puzzlesDetails } from './puzzle-screen-constants';

export const makeArray = (amount, mapFn) => Array.from({length: amount}, mapFn);

export const fillPuzzlesArray = (rowInd, colInd) => (
    {
        id: `puzzle_row${rowInd}_col${colInd}`,
        position: [rowInd, colInd],
        styles: {
            position: 'absolute',
            left: 0,
            top: 0,
            ...puzzlesDetails[rowInd][colInd]
        }
    }
);

export const mapInitialPosition = (x, y) => {
    const positions = {
        '0-0': {
            top: '120px',
            left: '35px',
            transform: 'rotate(-120deg)',
        },
        '0-1': {
            top: '120px',
            right: '35px',
            transform: 'rotate(148deg)',
        },
        '1-0': {
            top: '40px',
            left: '40px',
            transform: 'rotate(135deg)',
        },
        '1-1': {
            top: '10px',
            right: '40px',
            transform: 'rotate(84deg)',
        }
    };
    return positions[x + '-' + y];
};
