import { Intro } from './components/Intro';
import { Screen1 } from './components/Screen1';
import { SwordScreen } from './components/SwordScreen';
import { FormScreen } from './components/FormScreen';
import { BowlScreen } from './components/BowlScreen';
import { PuzzleScreen } from './components/PuzzleScreen';
import emptyBoard from './components/PuzzleScreen/images/emptyPuzzleBoard.svg';
import fullBoard from './components/PuzzleScreen/images/fullPuzzleBoard.svg';
import bowl from './assets/images/bowl.svg';
import form from './assets/images/formImage.svg';
import formBg from './assets/images/formBg.svg';
import { ChooseScreen } from './components/ChooseScreen';

export const screens = [
    {
        id: 0,
        component: Intro,
        preloadImages: [],
    },
    {
        id: 1,
        component: Screen1,
        preloadImages: [form, formBg],
    },
    {
        id: 2,
        component: SwordScreen,
        preloadImages: [emptyBoard, fullBoard],
    },
    {
        id: 3,
        component: FormScreen,
        preloadImages: [bowl],
    },
    {
        id: 4,
        component: ChooseScreen,
        preloadImages: [],
    },
    {
        id: 5,
        component: BowlScreen,
        preloadImages: [],
    },
    {
        id: 6,
        component: PuzzleScreen,
        preloadImages: [],
    },
];
