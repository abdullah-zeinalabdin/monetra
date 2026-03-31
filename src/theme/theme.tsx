import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#16A34A',
        },
        secondary: {
            main: '#0EA5E9',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B3B3B3',
        },
        background: {
            default: '#0F172A',
            paper: '#1E293B'
        },
        success: {
            main: '#22C55E',
        },
        error: {
            main: '#EF4444',
        }
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        h1: {
            fontSize: '1.5rem',
            fontWeight: 700,
            '@media (min-width:600px)': { fontSize: '2.5rem'}
        },
        h4: {
            fontSize: '1rem',
            fontWeight: 400,
        },
    }
});

export default theme;