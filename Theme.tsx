/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redeclare */
// Calling createContext hook
import {createContext} from 'react';
// calling the styles file
import { accodion } from './accodion';

type ThemeProvider = {
    children: React.ReactNode
}
// exporting the styles file with a name ThemeContext
export const ThemeContext = createContext(accodion);
// ThemeProvider prop defined
export const ThemeProvider = ({ children}: ThemeProvider) => {
    return (
        <ThemeContext.Provider value={accodion}>{children}</ThemeContext.Provider>
    )
}