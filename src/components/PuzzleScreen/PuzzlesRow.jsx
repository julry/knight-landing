import React, { useState } from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { mapInitialPosition } from './puzzle-screen-utils';
import { Puzzle } from './Puzzle';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-shrink: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  width: 100%;
`;

const PuzzleWrapper = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  ${({styles}) => styles};
`;

export const PuzzlesRow = (props) => {
    const {shownPuzzles, isWin} = props;
    const [draggedId, setDraggedId] = useState('');
    const [{}, drop] = useDrop(() => ({
        accept: 'PUZZLE',
        collect: monitor => ({
            hovered: monitor.canDrop() && monitor.isOver(),
        }),
        drop: (item) => {
            setDraggedId('');
            props.onDrop?.(item);
        },
    }), []);

    const handleRemoveTransform = (id) => {
        setDraggedId(id);
    };

    const getPuzzleWrapperStyles = (position, id) => {
        let styles = mapInitialPosition(...position);
        if (draggedId === id) styles = {...styles, transform: 'unset'}
        return styles;
    };

    return (
        <Wrapper ref={drop}>
            {shownPuzzles.filter(puz => !puz.dropped).map((puzzle) => (
                <PuzzleWrapper key={puzzle.id} styles={getPuzzleWrapperStyles(puzzle.position, puzzle.id)}>
                    <Puzzle
                        isWin={isWin}
                        onDragStart={handleRemoveTransform}
                        puzzle={puzzle}
                    />
                </PuzzleWrapper>
            ))}
        </Wrapper>
    );
};
