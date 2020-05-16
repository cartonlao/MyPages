import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

// withStyles is one way to create a customized button based on another
// button with some particular style.
// usage:
// const CustomButton = withStyles({a style})(OtherButton)
// typically, the OtherButton is the Mui Button.
// it's a HOF that takes a Button, apply a style, to create a customized
//   button.
// <BootstrapButton other parameters>customized button</BootstrapButton>
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

// Using withStyle based on a theme instead.
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

// Using makeStyles to generate css classes so that it can be used to
//   customize whatever components that the class can be in.
// Setup:
//   1. createMuiTheme to make a theme, palette primary is green
//   2. anonymous function to take in the theme and add margin margin
//      of the input theme's spacing.
//   3. create a function that will call makeStyles with the above setup
//      to generate css classes for use.
//   4. the function must be placed inside a functional component.
//      as per... const classes = useStyles(); // or whatever the function.
//   5. now classes.palete and classes.margin can now be referenced to
//      apply custom parameters to any sub components.
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <ColorButton variant="contained" color="primary" className={classes.margin}>
        Custom CSS
      </ColorButton>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
          Theme Provider
        </Button>
      </ThemeProvider>
      <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
        Bootstrap
      </BootstrapButton>
    </div>
  );
}
