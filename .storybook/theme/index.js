import { createMuiTheme } from '../../src/all-components-lib/components';
import styles from './styles/_colors.scss';
// import 'typeface-quicksand';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Quicksand', sans-serif",
  },
  palette: {
    primary: {
      main: styles.mainPrimaryColor,
    },
    secondary: {
      main: styles.mainSecondaryColor,
    },
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        background: `linear-gradient(-90deg, ${styles.primaryButtonGradient1} 30%, ${styles.primaryButtonGradient2} 90%)`,
        '&:hover': {
          background: styles.primaryButtonGradient1,
        },
      },
      containedSecondary: {
        background: `linear-gradient(-90deg, ${styles.secondaryButtonGradient1} 30%, ${styles.secondaryButtonGradient2} 90%)`,
        color: styles.white,
        '&:hover': {
          background: styles.secondaryButtonGradient2,
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: styles.darkGray1,
        fontSize: '12px',
        margin: '0 8px',
      },
    },
    MuiTypography: {
      h1: {
        fontSize: '48px',
        fontWeight: '500',
      },
      h2: {
        fontSize: '42px',
        fontWeight: '500',
      },
      h3: {
        fontSize: '38px',
        fontWeight: '500',
      },
      h4: {
        fontSize: '32px',
        fontWeight: '500',
      },
      h5: {
        fontSize: '26px',
        fontWeight: '500',
      },
      h6: {
        fontSize: '22px',
        fontWeight: '500',
      },
      // subtitle1: {},
      // subtitle2: {},
      body1: {
        fontSize: '16px',
      },
      body2: {
        fontSize: '14px',
      },
    },
    //   MuiInput: {
    //     underline: {
    //       '&:before, &:after, &:hover:not($disabled):not($focused):not($error):before': {
    //         borderBottom: '0',
    //       },
    //     },
    //   },
  },
});

export default theme;
