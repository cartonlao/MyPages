# Using Other Libraries

React is a UI library to create meaningful, reusable components.  For controlling state of a component, **useState** is used.

MUI stands for Material-UI, a library for beautiful UI components specifically designed for React, maybe.

## MUI Installation

* $ yarn add @material-ui/core
* With it comes with a whole bunch of stuff, and the two libraries that I used for the ToDo project are the **core** and **system**
  * core contains a whole bunch of UI components, such as Container, Grid, Typography, and Button
  * system contains the flexbox, which is used to layout the components.

## Import useState

* **useState** also resides in "React", but not as default export, thus it has to be required separately with the proper name.

  ```
  import React, {useState} from "react"
  ```

* useState has to be in a function component.  extending from React.Component class is actually not recommended.

* the way **useState** works is as follows:

  * the syntax usage is

    ```
    const [count, setCount] = useState(init)
    ```

    useState returns an array, the first is the payload (in this example, it's just a number), and the second is the function that will be used to change the payload.

    since the payload is just a number, therefore the calling sequence for the returned function will take one parameter that should be a number.

    thus, further in the code, the anonymous callback function for the onClick on the button is set up as

    ```
    onClick={()=>setCount(count+1)}
    ```

## QED

