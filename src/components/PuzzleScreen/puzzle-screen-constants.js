import rightBotPuzzle from './images/rightBotPuzzle.svg';
import leftTopPuzzle from './images/leftTopPuzzle.svg';
import rightTopPuzzle from './images/rightTopPuzzle.svg';
import leftBotPuzzle from './images/leftBotPuzzle.svg';

export const PUZZLES_ROW_AMOUNT = 2;
export const PUZZLES_COLUMN_AMOUNT = 2;
export const puzzlesDetails = [
    [
        {
            width: '167px', height: '129px', background: `url(${leftTopPuzzle})`,
            transformOrigin: '0% 0%'
        },
        {
            width: '128px', height: '165px', right: 0, left: 'auto', background: `url(${rightTopPuzzle})`,
            transformOrigin: '100% 0%'
        }
    ],
    [
        {
            width: '130px', height: '167px', bottom: 0, top: 'auto', background: `url(${leftBotPuzzle})`,
            transformOrigin: '0% 100%'
        },
        {
            width: '165px', height: '130px', bottom: 0, top: 'auto', right: 0, left: 'auto',
            background: `url(${rightBotPuzzle})`, transformOrigin: '100% 100%'
        }
    ]
];
