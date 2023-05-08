import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { Puzzle } from './Puzzle';

const PuzzlePlaceStyled = styled.div`
  ${({styles}) => styles};
  position: relative;
  bottom: auto;
  width: calc(255px / 2);
  height: 100%;
  background: none;
  & + & {
    border-left: none;
  }

  @media screen and (max-width: 325px) {
    width: calc(255px * 0.8);
    
    & > div {
      transform: scale(0.8);
    }
  }

  @media screen and (min-width: 600px) {
    width: calc(255px * 1.3);
    & > div {
      transform: scale(1.3);
    }
  }
`;

export const PuzzlePlace = (props) => {
    const {puzzle, styles, droppedPuzzles, onPuzzleDrop, isWin} = props;

    const [{}, drop] = useDrop(() => ({
        accept: 'PUZZLE',
        collect: monitor => ({
            hovered: monitor.canDrop() && monitor.isOver(),
        }),
        drop: (item) => {
            onPuzzleDrop?.(item?.id, item?.position, puzzle.position);
        },
    }), [puzzle]);

    const droppedPuzzle = droppedPuzzles
        .find(puzz => puzz?.position[0] === puzzle.position[0] && puzz?.position[1] === puzzle.position[1]);

    return (
        <PuzzlePlaceStyled
            ref={drop}
            styles={styles}
        >
            {droppedPuzzle && <Puzzle puzzle={droppedPuzzle} isWin={isWin}/>}
        </PuzzlePlaceStyled>
    );
};
