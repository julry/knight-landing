import { useEffect, useState } from 'react';
import { PUZZLES_COLUMN_AMOUNT, PUZZLES_ROW_AMOUNT } from './puzzle-screen-constants';
import { fillPuzzlesArray, makeArray } from './puzzle-screen-utils';

export const usePuzzleGame = () => {
    const [puzzles, setPuzzles] = useState([]);
    const [shownPuzzles, setShownPuzzles] = useState([]);
    const [droppedPuzzles, setDroppedPuzzles] = useState([]);
    const [isWin, setIsWin] = useState(false);

    const checkSamePosition = (position1, position2) => position1[0] === position2[0] && position1[1] === position2[1];

    useEffect(() => {
        const puzzlesArr = makeArray(PUZZLES_ROW_AMOUNT, (v, i) => i)
            .map(rowInd => makeArray(PUZZLES_COLUMN_AMOUNT, (v, colInd) => fillPuzzlesArray(rowInd, colInd)));
        setPuzzles(() => puzzlesArr);
        setShownPuzzles(() => puzzlesArr.flat());
    }, []);

    useEffect(() => {
        if (checkWinPuzzle()) {
            setTimeout(() => setIsWin(true), 100);
        }
    }, [droppedPuzzles]);

    const checkWinPuzzle = () => {
        if (!puzzles.length || droppedPuzzles.length !== puzzles.flat().length) return;
        return puzzles.flat()
            .filter(puzzle => droppedPuzzles
                .find(item => {
                    return checkSamePosition(item.position, puzzle.position) && item.id === puzzle.id;
                })
            )
            .length === puzzles.flat().length;
    };

    const hidePuzzles = (id, dropped) => {
        setShownPuzzles((shown) => {
            const puzzle = shown.find(item => item.id === id);
            const puzzleId = shown.indexOf(puzzle);
            const newShown = [...shown];
            newShown[puzzleId] = {...puzzle, dropped};
            return newShown;
        });
    };

    const getDroppedPuzzles = (dropped, puzzle, droppedPuzzle) => {
        const {position, itemPosition} = droppedPuzzle;
        const newDropped = [...dropped];
        const puzzleInDropped = dropped.find(puzz => puzz.id === droppedPuzzle.id);

        if (!!puzzleInDropped) {
            const puzzId = dropped.indexOf(puzzleInDropped);
            newDropped[puzzId] = {...puzzleInDropped, position};
            const positionDropped = newDropped
                .filter(item => checkSamePosition(item.position, position));

            if (positionDropped.length > 1) {
                const replacedPuz = positionDropped.find(item => item.id !== droppedPuzzle.id);
                const replacedPuzId = newDropped.indexOf(replacedPuz);
                newDropped[replacedPuzId] = {...replacedPuz, position: itemPosition};
            }

            return newDropped;
        } else {
            const positionDropped = dropped
                .find(item => checkSamePosition(item.position, position));

            if (!!positionDropped) {
                const replacedPuzId = positionDropped.id;
                hidePuzzles(replacedPuzId, false);
                setPuzzles((puzArray) => {
                    const removedPuzzlePosition = puzArray.flat().find(item => item.id === replacedPuzId)?.position;
                    return setPuzzleDropped(puzArray, removedPuzzlePosition, false);
                });
                const replacedPuzDropId = newDropped.indexOf(positionDropped);
                newDropped.splice(replacedPuzDropId, 1);

                return [...newDropped, {...puzzle, position}];
            }

            return [...dropped, {...puzzle, position}];
        }
    };

    const setPuzzleDropped = (puzzlesArr, itemPosition, dropped = true) => {
        const newPuzzles = [...puzzlesArr];
        newPuzzles[itemPosition[0]][itemPosition[1]] = {...newPuzzles[itemPosition[0]][itemPosition[1]], dropped};
        return newPuzzles;
    };

    const onDrop = (id, itemPosition, position) => {
        if (!id) return;

        const puzzle = puzzles.flat().find(puz => puz.id === id);

        hidePuzzles(puzzle.id, true);
        setPuzzles((puzArray) => setPuzzleDropped(puzArray, puzzle.position));
        setDroppedPuzzles((dropped) => getDroppedPuzzles(dropped, puzzle, {id, position, itemPosition}));
    };

    const onRemove = (puzzle) => {
        hidePuzzles(puzzle.id, false);
        setDroppedPuzzles((dropped) => {
            const puzzleId = dropped.findIndex(puzz => puzz.id === puzzle.id);
            if (puzzleId < 0) return dropped;
            const newDropped = [...dropped];
            newDropped.splice(puzzleId, 1);
            return newDropped;
        });
    };

    return {
        isWin,
        puzzles,
        onDrop,
        droppedPuzzles,
        shownPuzzles,
        onRemove,
    }
}