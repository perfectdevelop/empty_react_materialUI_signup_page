import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const theme = (createTheme as any)({
    typography: {
        fontFamily: 'Poppins',
    },
    palette: {
        type: 'light',
        text: {
            primary: '#686868',
            secondary: '#A4A4A4',
        },
        primary: {
            main: '#114377',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#ff0000',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },

    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: '#114377',
            },
        },
        MuiPickersCalendarHeader: {
            root: {
            },
        },
        MuiPickersDay: {
            day: {
                color: '#0B0B0B',
                fontSize: 12,
            },
            current: {
                color: '#114377',
            },
            daySelected: {
                color: '#ffffff',
                backgroundColor: '#114377',
                boxShadow: '2px 3px 10px rgba(17, 67, 119, 0.3)',
                '&:hover': {
                    color: '#ffffff',
                    backgroundColor: '#114377',
                },
            },
        },
        MuiDialogActions: {},
    },
});

export default theme;
