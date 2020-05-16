# React Todo Custom

This is a copy of a custom built system for tttv2 and is based on babel and webpack.  As such, webpack.config.js is very important, and basically overarches package.json.

There's a series of articles, taking the transformation from plain javascript, to react, to react with mui, and more.  And [here is the link](Y:\gitroot2\documentations_gitroot2\edx\Harvard_CS50\react_todo_custom\README-REACT-MUI.md) to start the journey.

## Important Aspects Of webpack

The most important setup to start an **React App** is two things:

* index.html - that is the root of all the happenings for a React App, and for that matter, any Web App.  Key items in the file:

  * an empty **div** with an id, typically called **root**, so that the React App can find the **div** to attach to.  Found them out by grep'ing root under the folder as shown

    ```
    $ grep -nr root *
    public/index.html:13:    <div id="root"></div>
    src/index.js:13:  document.getElementById ("root")
    ```

    It's clear the root file is index.html with an empty div, and it is referenced by index.js.

  * a main component of the React App to be attached to the root div.  They are all connected in webpack config file as shown

    ```
    $ grep -nr index *
    package.json:6:  "main": "index.js",
    webpack.config.js:5:  entry: "./src/index.js",
    webpack.config.js:8:    filename: "index_bundle.js"
    webpack.config.js:77:      template: "./public/index.html",
    webpack.config.js:78:      filename: "./index.html"
    ```

    Of course, the filenames of index.html and index.js are basically a de facto standard, and can be customized, I'm sure.  So long they are connected inside **webpack.config.js** appropriately.

    The main items in **webpack.config.js** thus are as follows:

    * entry: "./src/index.js"
    * output: production version will be in :./dist/index_bundle.js"
    * loader: "babel-loader" to transpile all the .js files required.  Similarly for html-loader, style-loader, css-loader, ttf-loader, file-loader, url-loader, img-loader (depending on the facilities required by the React App)
    * plugins: to specify the index.html file.

* After making the simplest editing of index.js, the React App should be deployable.

## Important Aspects Of .babelrc

This is the simplest to ensure transpiling to ES5 will be successful.

```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
}
```

## Important Aspects Of package.json

This controls the dependencies of the project, the keys are:

* homepage: "." to set it to the root, that is, http://domain, such as locally is http://localhost, while on the public interface will be http://ip_address/.  There are no sub-domains.  This can be customized, I'm sure.
* main: "index.js", I think it's basically ignored.  webpack gets it from config file.
* scripts: to start/build for development/production respectively.

## Setting Up

* Edit **App.js** to simply display a message

* $ yarn install - to install all the dependencies.  Of course, it is way more than is necessary, but who cares for now.

  ```
  $  yarn install
  yarn install v1.21.1
  info No lockfile found.
  [1/4] Resolving packages...
  warning popper.js@1.16.1: You can find the new Popper v2 at @popperjs/core, this package is dedicated to the legacy v1
  warning ttf-loader > babel-runtime > core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
  warning webpack > watchpack > chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
  warning webpack > watchpack > chokidar > fsevents@1.2.12: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
  warning webpack > micromatch > snapdragon > source-map-resolve > resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
  warning webpack > micromatch > snapdragon > source-map-resolve > urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
  warning webpack-dev-server > chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
  [2/4] Fetching packages...
  info fsevents@1.2.12: The platform "win32" is incompatible with this module.
  info "fsevents@1.2.12" is an optional dependency and failed compatibility check. Excluding it from installation.
  [3/4] Linking dependencies...
  warning " > img-loader@3.0.1" has unmet peer dependency "imagemin@^5.0.0 || ^6.0.0".
  warning " > ttf-loader@1.0.2" has incorrect peer dependency "file-loader@^1.1.6".
  [4/4] Building fresh packages...
  success Saved lockfile.
  Done in 106.45s.
  ```

* Start up in development mode:

  ```
  $ yarn start
  $ ...
  ERROR in ./src/index.js
  Module not found: Error: Can't resolve './js/App' in 'Y:\react_todo_custom\src'
   @ ./src/index.js 6:0-27 7:50-53
  ```

  The js folder was slotted in the wrong folder structure.  Corrected it.

  Got a blank page at http://localhost:8080 (perfect), and using the DevTools (F12), the error was 

  ```
  Uncaught ReferenceError: React is not defined
  at App (App.js:3)
  ```

  Missing the import statement to get **react**.

  Voila, the page is displayed with the message.

  This concludes the testing of the dev process.

* Build App in production mode:

  ```
  $ yarn build
  yarn run v1.21.1
  $ webpack --mode production
  Hash: 33f9b0f9158e8aa6bc63
  Version: webpack 4.43.0
  Time: 4172ms
  Built at: 04/24/2020 5:49:08 PM
            Asset       Size  Chunks                    Chunk Names
     ./index.html  436 bytes          [emitted]
  index_bundle.js    289 KiB       0  [emitted]  [big]  main
  Entrypoint main [big] = index_bundle.js
  [12] ./src/index.js + 1 modules 562 bytes {0} [built]
       | ./src/index.js 346 bytes [built]
       | ./src/js/App.js 201 bytes [built]
      + 12 hidden modules
  
  WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
  This can impact web performance.
  Assets:
    index_bundle.js (289 KiB)
  
  WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
  Entrypoints:
    main (289 KiB)
        index_bundle.js
  
  
  WARNING in webpack performance recommendations:
  You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
  For more info visit https://webpack.js.org/guides/code-splitting/
  Child html-webpack-plugin for "index.html":
       1 asset
      Entrypoint undefined = ./index.html
      [0] ./node_modules/html-webpack-plugin/lib/loader.js!./public/index.html 442 bytes {0} [built]
  Done in 5.72s.
  ```

  Ignoring the performance recommendations (to be dealt with later)

  Navigated to the **build** folder and double-clicked the **index.html** there.

  The page came up properly.

  * This concludes the testing of the production build process.

## Summary

This is a very simple project, but at least the scaffolding is OK.

The folder structure is thus as follows:

```
project_root:
  dist
    index.html (generated)
    index_bundle.js (generated)
  node_modules (generated by $yarn install)
  public
    index.html
  src
    assets (not used)
    js
      App.js
    styles (not used)
    index.js
  .babelrc
  package.json
  README.md (this file)
  webpack.config.js
  yarn.lock (generated)
```

