import { useState } from 'react';
import { screens } from '../screens.config';

export function useScreenInit() {
    /////////////////// for development ////////////////////////////////////
    const urlParams = new URLSearchParams(window.location.search);
    const screenParam = urlParams.get('screen');
    ////////////////////////////////////////////////////////////////////////

    const [currentScreenIndex, setCurrentScreenIndex] = useState(+screenParam || 0);
    const screen = screens[currentScreenIndex];

    const next = () => {
        const nextScreenIndex = currentScreenIndex + 1;
        const canNext = nextScreenIndex <= screens.length - 1;
        const nextScreen = screens[nextScreenIndex];

        if (canNext) {
            if (nextScreen?.ref?.current) nextScreen.ref.current.scrollTop = 0;
            setCurrentScreenIndex(nextScreenIndex);
        }
    };

    return {
        currentScreenIndex,
        screen,
        next,
    };
}
