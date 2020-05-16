import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: props => ({
    marginRight: theme.spacing(2),
    backgroundColor: props.buttonBackgroundColor
  }),
  title: {
    flexGrow: 1
  }
}));

function ButtonAppBar(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;









I am trying to avoid typing redundant code. In multiple components I have created the same css classes. I want to add them to the theme using createMuiTheme() and then only using the style directly from the theme without having to call "classes" props on the Component props.

I have tried creating a theme on the root Component like this:

const theme = createMuiTheme({
  palette:{
      primary: {
        main: '#47286E',
        light: '#D91677'
      },
      secondary: {
        main: '#9156D8' 
      },
  },

 fab: {
    position: "relative",
    top: 0,
    marginTop: 20px
    textTransform: 'none',
    width: 220,
    height: 50
  },

});
then I passed theme down to the other components using

<MuiThemeProvider theme={theme}>
I tried importing the fab button directly inside the component

<Fab variant="extended" className={this.props.theme.fab} size='small'>
    Change
</Fab>
however I don't seem to get any value when I try to get fab css class. I just don't want to create a whole new

const styles = theme => {
    blabbla
}
and import it in every component using the "classes" props if what I want is already on the theme being passed down to its child components.

reactjs material-ui
shareimprove this questionfollow
asked Jan 2 '19 at 18:45

Jeff Goes
30744 silver badges1212 bronze badges
add a comment
2 Answers
Active
Oldest
Votes

2

I don't think createMuiTheme is meant for that.

Alternatively you could just create a style object that you want to reuse

const styles = {
  fab: {
    position: "relative",
    top: 0,
    marginTop: 20px
    textTransform: 'none',
    width: 220,
    height: 50
  }
};
And just import and use it wherever you need to

import fabStyles from '../../somewhere-everyone-can-get-it.js';
import styles from './styles-for-this-component.js';

...

withStyles({...fabStyles, ...styles})(Component);
If you need the theme and styles.

withTheme(withStyles({...fabStyles, ...styles})(Component));
You can also use recompose to clean this up.

shareimprove this answerfollow
edited Jan 2 '19 at 21:31
answered Jan 2 '19 at 19:43

Galupuf
1,72077 silver badges2020 bronze badges
but how can I have access to the theme variable inside of these separate files? – Jeff Goes Jan 2 '19 at 20:22
I don't see you using theme styles in your example, but you can use the withTheme HOC in addition to withStyles – Galupuf Jan 2 '19 at 20:35 
can u please give me an example using codebox or something? Im still getting the hang of using HOC.... thank you! – Jeff Goes Jan 2 '19 at 21:18
Updated answer :) – Galupuf Jan 2 '19 at 21:32
No problem. If you could mark the answer as "accepted" that would be great! – Galupuf Jan 2 '19 at 23:37
I am sorry @Galupuf, but when I use it this way: withRouter(withTheme(withStyles({...defaultStyles, ...styles})(TableCustom))); it stops showing the whole component for some reason. – Jeff Goes Jan 3 '19 at 12:51
Let us continue this discussion in chat. – Galupuf Jan 3 '19 at 14:25
add a comment

1

className={this.props.theme.fab} doesn't work because this.props.theme.fab is an object, not a class name. When withStyles is used, it takes care of generating a unique class name (e.g. available via props.classes.fab) as well as injecting the CSS for that class into the head of the document. The fab object in your theme has not had this work done for it.

The code below shows a couple ways you can avoid redundant code. The first is a withFab function that encapsulates the CSS and the call to withStyles.

The second uses the fab object more directly and just passes it to the style property rather than the className property. You could get the styles from theme.fab (rather than a separate js file) similar to your initial approach, but there isn't necessarily a reason to put this in your theme unless you care about being able to override it via different MuiThemeProviders in your rendering hierarchy.

There are a couple downsides to the second (style property) approach:

If you use this on a lot of different elements, the CSS is redundantly specified in the DOM on each of those elements.
It won't support CSS that requires classes (e.g. using pseudo elements like :hover)
So I would recommend something more similar to the first option (UseWithFab/withFab) shown below.

withFab.js

import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  fab: {
    backgroundColor: "lightblue"
  }
};
export const fabStyles = {
  backgroundColor: "lightgreen"
};
const withFab = component => {
  return withStyles(styles)(component);
};
export default withFab;
index.js

import React from "react";
import ReactDOM from "react-dom";
import withFab, { fabStyles } from "./withFab";

const UseWithFab = withFab(props => {
  return <div className={props.classes.fab}>Using withFab</div>;
});
const UseFabStyles = props => {
  return <div style={fabStyles}>Using fabStyles</div>;
};
function App(props) {
  return (
    <>
      <UseWithFab />
      <UseFabStyles />
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




********************
withFab.js
----------
import withStyles from "@material-ui/core/styles/withStyles";

// styles is an object with a key fab giving an object with backgroundColor.
const styles = {
  fab: {
    backgroundColor: "lightblue"
  }
};

// fabStyles is an object with a key of backgroundColor
export const fabStyles = {
  backgroundColor: "lightgreen"
};

// withFab is a function component that takes in a component,
// and returns a component (I think) with the styles style (bg is lightblue)
const withFab = component => {
  return withStyles(styles)(component);
};

// default export withFab, thus
export default withFab;
-----------
withFab - lightblue
fabStyles - lightgreen

******************
index.js
--------
import React from "react";
import ReactDOM from "react-dom";
import withFab, { fabStyles } from "./withFab";

const UseWithFab = withFab(props => {
  return <div className={props.classes.fab}>Using withFab</div>;
});
const UseFabStyles = props => {
  return <div style={fabStyles}>Using fabStyles</div>;
};
function App(props) {
  return (
    <>
      <UseWithFab />
      <UseFabStyles />
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

