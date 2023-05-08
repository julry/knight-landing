import rightBotPuzzle from './images/rightBotPuzzle.svg';
import leftTopPuzzle from './images/leftTopPuzzle.svg';
import rightTopPuzzle from './images/rightTopPuzzle.svg';
import leftBotPuzzle from './images/leftBotPuzzle.svg';

export const PUZZLES_ROW_AMOUNT = 2;
export const PUZZLES_COLUMN_AMOUNT = 2;
export const puzzlesDetails = [
    [
        {
            width: '167px', height: '129px', background: `url(${leftTopPuzzle})`
        },
        {
            width: '128px', height: '165px', right: 0, left: 'auto', background: `url(${rightTopPuzzle})`
        }
    ],
    [
        {
            width: '130px', height: '167px', bottom: 0, top: 'auto', background: `url(${leftBotPuzzle})`
        },
        {
            width: '165px', height: '130px', bottom: 0, top: 'auto', right: 0, left: 'auto', background: `url(${rightBotPuzzle})`
        }
    ]
];
