# React With MUI

The first phase of the project, I just copied the original pure javascript version of the todo, and make it work.

The second phase of the project, I started to convert pure javascript code into React code using hooks for state management.  During the conversion, I dabbled into MUI (Material-UI) as those are really cool UI components for text, button, etc.

I also dabbled a bit into VSCode for refactoring, editor splitting, etc.

This article collects a bunch of "got cha's" I picked up along the way.

Next step is to do much [refactoring to make it modular](Y:\gitroot2\documentations_gitroot2\edx\Harvard_CS50\react_todo_custom\README-REFACTORING.md).

## MUI

* ```
  $ yarn add @material-ui/core
  ```

  brought in a lot more code that meets the eye.  **flexbox** is in one of the pulled in libraries "@material-ui/system", and flexbox is used by material-ui to layout components. Should spend some time to learn **flexbox**

* ```
  <Grid container ...>
  ```

  the **container** keyword must be used when Grid is inside a Container.  If not, the layout will not be as regular.

* onClick parameter is an underlining syntax of DOM elements, so all through MUI documentation, onClick was never discussed.

## React and react hooks

* React hooks can only be used inside a functional component (as opposed to a class component).  Together with the use of arrow function, the use of **this** can be avoided and without the problem of binding this to the right context.

* ```
  const [state, setState] = useState(init)
  ```

  **useState** takes an initial state and returns an array of two, the first being the **state** and the second a function (a callback) to set the **state**.  Typically, the destructuring of the return into an array of two is how you set up using useState.

* **state** can be any data structure, and because of the fact that the **setState** overwrites the internal state, make sure that the complete state is passed into  the setState call.  Typically, you use the spread syntax to ensure the object or array retained the previous state, and then augment with new properties to write over the previous data, as follows if the state is an object:

  ```
  setState({
        ...state,   // this is the previous state
        id: id,
        count: count,
        todos: todos,
      });
  ```

* The TODO app is now converted to use React and MUI, with addition and deletion implemented.

## Use of modern Javascript syntax

* use arrow function extensively.
* anonymous arrow function to be the callback from onClick setup.
* using map and filter to handle array operations.

## DevTools

Even though by running in development mode, debugging can be done.  But there are always a couple of errors about not finding the sourcemaps.

* need to setup webpack.config.js for devtool as follows:

  ```
  devtool: 'inline-source=-maps'
  ```

  then the errors gone.

* Setting up for debugging is automatic when running in development mode.
  * ctrl-p
  * it's going to be tough to scroll down to find the file you want to debug.  just type in the file name, and pick it.
  * then setting up breakpoints and all the good stuff is just there.
  * regardless whether the devtool line in webpack.config.js is there or not.

## Summary

* Currently, the sub components are defined inside the app component, thus very intertwined, not at all decomposed.
* The code should be refactored properly as a future exercise.
* Maybe also convert it to use **typescript**.
* Maybe beautify the UI a bit more, learn how to use **flexbox**, and how to set up some kind of a theme for your own use and applied to all private components.