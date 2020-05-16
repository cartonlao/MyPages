# ToDo Refactoring

The first phase of the project, I just copied the original pure javascript version of the todo, and make it work.

The second phase of the project, I started to convert pure javascript code into React code using hooks for state management.  

During the conversion, I dabbled into MUI (Material-UI) as those are really cool UI components for text, button, etc.

I also dabbled a bit into VSCode for refactoring, editor splitting, etc.

The third phase of the project is to refactor the messed up code and decomposed into manageable pieces.

The [fourth phase of the project](Y:\gitroot2\documentations_gitroot2\edx\Harvard_CS50\react_todo_custom\README-MUI-Styling.md) is to apply custom styling, maybe through theming.

## Components Inside Components

The first thing is to avoid a component defined inside another component, cause that will make that inside component very un-reusable.

The component in question was the ToDoItems functional component.  The biggest problem was to be able for the ToDoItems, once outside of the component to be able to set up an onClick callback into a function in the outer component.

### Refactoring a component out of another component

MyTodos maintains a state describing everything about the current state of the application.  It also has two methods, addItem and deleteItem, to manipulate list of todo items.

When a button, associated with individual items in ToDoItems's, the app should be able to delete that item.  Only MyTodos should know how to do this, and that's the **deleteTodo** method in MyTodos component.  

* The calling sequence of deleteTodo requires a single parameter and that is the id of the item to be deleted.

* Thus this particular callback must be formatted and passed on to the TodoItems, as follows:

  ```
  <TodoItems item={state} deleteOne={(x) => deleteTodo(x)}></TodoItems>
  ```

  Note that:

  * the x argument that is to be supplied to the callback, with the expectation to be an id of an item.
  * the parameter for the callback is **deleteOne**
  * use of arrow function as a callback to avoid the binding problem.

* In TodoItems, the callback is retrieved via **props.deleteOne**.
  When formatting the onClick in the **Button**, it is also using an arrow function to setup the callback with the parameter of the id of the item.

*  The inside functional component (ToDoItems) is now out of the parent component (MyTodos).

## Components In Separate Files

VSCode does have some refactoring capabilities.  And to invoke refactoring, all it needs is to select all the lines, right-click inside the selection, choose the **Refactoring...** from the popup command list.  For some reason, hotkey doesn't work.

I used it to refactor out ToDoItems by choosing **Move to a new file**.  The file created contains everything that is needed, including the **imports** if necessary and the **export** too.

Apparently, the refactoring... options varied depending on the group of lines selected.  Only when it makes sense, then appropriate options are given.

For example, the **Move to a new file** option may not show up all the time.

After moving MyTodos and TodoItems, my App.js is really clean.

```
"use strict";

import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { MyTodos } from "./MyTodos";

const TODOAPP = "My Todo App";

const App = () => {
  return (
    <Container>
      <Typography variant="h4" align="center">
        {TODOAPP}
      </Typography>
      <MyTodos />
    </Container>
  );
};

export default App;
```

## MUI Theme

A theme can be used so that all of your components can look similar in various aspects.

The major aspect is the color to be used (and the one aspect that I tried, the rest will be similarly set up).  Here's the process:

* set up a file called **MyTheme.js** and as simple as this

  ```
  import { createMuiTheme } from "@material-ui/core/styles";
  import orange from "@material-ui/core/colors/orange";
  import purple from "@material-ui/core/colors/purple";
  export const myTheme = createMuiTheme({
    palette: {
      primary: orange,
      secondary: purple,
    },
  });
  ```

  Most important is **createMuiTheme** which actually creates a theme to be used, the colors are just for examples.

  The second is the **palette** property, which is one of many that can be included.

  Again, only **primary** and **secondary** are defined here, but there can be a lot more options.

* **MyTheme.js** should be imported by the application root and in this case, it's **App.js**, and the usages are

  ```
  import { ThemeProvider } from "@material-ui/core/styles";
  ```

  ThemeProvider is the tag that all other UI elements should be in (and they can be nested too) and the theme imported is injected into the provider.

* All participating UI elements will be able to reference a color via

  ```
  <Element color="primary" ...></Element>
  ```

  and get a consistent color.

There you have it, a themed for all UI elements.

## MUI Grid

On using MUI Grid to align the ToDoItems.

Without proper formatting, the two items (button for deletion and the typography of item description) doesn't line up at all.

In order to line them up, here's what you have to do:

* <Grid container direction="row" justify="center" alignItems="center">
* The button and the Typograhpy must be placed inside their own <Grid item> tags.

They will be all lined up perfectly.

## Summary

* The project was successfully decomposed.
* Next phase, renaming some of the variables to have better meaningful names, using the Refactoring by Renaming Symbols editing function.