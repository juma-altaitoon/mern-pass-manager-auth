import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function getTheme(mode) {
    createTheme({
        palette: {
            type: mode,
            primary: {
                main: mode === 'light' ? '#556cd6' : '#90caf9',
            },
            secondary: {
                main: mode === 'light' ? '#19857b' : '#f48fb1',
            },
            background: {
                default: mode === 'light' ? '#fff' : '#121212',
            }
        }
    })
}