import { Modal } from './Modal';
import { FullHeightScreen } from './FullHeightScreen';
import { useEffect, useState } from 'react';
import { useScreen } from '../../hooks/useScreen';

export const GameScreen = ({initialState, finalState, children, onChangeState, isFinished}) => {
    const [modalState, setModalState] = useState({open: false, ...initialState});
    const {next} = useScreen();

    const onStart = () => {
        setModalState({open: false});
        onChangeState?.();
    }

    useEffect(() => {
        if (!isFinished) return;
        setModalState({open: true, ...finalState});
    }, [isFinished, finalState]);

    const handleClick = () => {
        if (isFinished) {
            next();
            return;
        }
        onStart();
    };

    return (
        <FullHeightScreen>
            {children}
            {modalState.open && (
                <Modal text={modalState.text} btnText={modalState.btnText} onClick={handleClick}/>
            )}
        </FullHeightScreen>
    )
}