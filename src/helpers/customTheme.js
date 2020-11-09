import {createMuiTheme} from  '@material-ui/core/styles'
import { green } from '@material-ui/core/colors';

const CustomTheme = createMuiTheme({
    direction: 'rtl',
    palette:{
        primary:green
    }
  });

  export default CustomTheme;