# MUI Styling

Custom styling for Material UI components.

Here's an [article](https://codeburst.io/my-journey-to-make-styling-with-material-ui-right-6a44f7c68113) that I find helpful.

## A custom style

A custom style has a name, and is defined in an object with a bunch of css properties settings, deemed appropriate for certain react components.

```
myblock: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    height: "20vh",
    padding: "15px 30px",
    margin: "30px 30px",
  }
```

## Internalization

To internalize the above object so that it can be referenced inside any component, it must be _converted_ into something usable by React.

```
import { makeStyle } from "@material-ui/core/styles"

const useStyles = makeStyles({{myblock:...})
```

## Usage 

**useStyles** now becomes a Hook call that can ONLY be used inside a functional component.

```
const App = () => {
  const myStyles = useStyles();
  ...
}
```

**myStyles** is now a nugget of styling, and the only **style id** would be **myblock**.

## Referenced

Now inside the functional component, the **myblock** can now be referenced by the **className** prop.

```
<Paper className={myStyles.myblock}>
```

## QED for the time being

## Customized components

[annotated script](ButtonCustomization.js)

the above is an annotated script file detailing how various customization methods can be used...

* as a theme
* as a css class
* using style

They can be mixed-in for whatever that makes sense.

## Caveats

Styling is basically how to make React Components, especially MUI components recognize all those CSS styling parameters.

Depending on where CSS styling parameters are used, they have different syntax.

* When used inside the pair of component tags, the syntax is

  ```
  color="primary"
  ```

* When used as a style to input into various javascript calls, the syntax is the same as javascript object

  ```
  root: {
    color: theme.palette.getContrastText(purple[500])
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }
  ```

* Notice the following rules

  * root in a style definition is a rule for MUI styling to generate proper CSS style used inside the component.  I believe this is JSS syntax used by MUI.
  
    For more information on JSS, visit [here](https://cssinjs.org/).
  
  * '&:hover' is special CSS syntax so that & referenced her parent node.

## Custom Theme To Use Custom Style

Found a better, but restricted, way to style consistently throughout, and that is using theme.  Web searches reveal nothing about that.  In fact, some say that it is impossible to do with theme to change style (perhaps it was an older article).  But I found out how.

Then I found this article, and I should give it a closer look.

```
https://blog.bitsrc.io/a-better-way-to-style-material-ui-80c7707ad525
```

[article link](https://blog.bitsrc.io/a-better-way-to-style-material-ui-80c7707ad525)

During that journey, I discovered (reading docs over and over) and realizing that once everything is transpiled, MUI components in a theme is referenced as a CSS class by the component name prefixed by Mui.

Therefore, a <Button> is referenced in the theme as MuiButton as per docs

```
The MuiButton name can be used for providing default props or style overrides at the theme level.
```

It is through overrides object that when you customize MuiButton, you basically changed the default behavior of <Button>.

This is quite drastic.  So instead of changing the original Button, use the other customization methods for customizing. 

CSS Customization of a Button thus is something like the following, note the use of **overrides** and **MuiButton**:

```
const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        color: 'white',
      },
    },
  },
});
```



## Other Tidbits

* Each MUI component has a list of **props** for local mods, anything other than that list of props will be ignored.  Therefore, trying to use style prop to change its styling will be futile.

* All components will take **classes** for customizing style, never a direct style.  Thus using the following for customization

  ```
  const getClasses = makeStyles({...styling...})
  
  const functionalComponent = () => {
    const classes = getClasses()
    return (
      <div className={classes.whatever}></div>
    )
  }
  ```

  or something similar.
  
* Inside JSX, the use of {} is important to inject javascript expressions in.

* Sometimes you see double braces, as in this

  ```
  ... style={{color: 'red'}}
  ```

  The first set of braces means a javascript expression is to be evaluated.  If the expression turns out to be a javascript object, then there is the second set of braces required.