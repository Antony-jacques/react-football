import { createTheme } from '@mui/material/styles';
import green from "@material-ui/core/colors/green";

const muiTheme = createTheme({

    typography: {
        fontsize:50,

    },

    palette:{
        primary: {
            main: '#487eb0',

        },
        secondary: {
            main: '#273c75'
        }
    },

    components: {
        // Name of the component
        MuiButton: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              fontWeight: 'bold',
            //   backgroundColor:'red'
            },
          },
        },
      },


})

export default muiTheme