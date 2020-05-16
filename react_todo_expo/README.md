# React Native with expo

## Install expo locally

Instead of installing globally, which is recommended by all documentations, I would rather install locally in a local folder where React Native applications would be developed.

```
Remember to rename react_todo_expo to say expo_apps.
```

```
$ yarn init
$ yarn add expo-cli --dev
// there's a lot of warnings about xdl, 
// platform win32 and x64 architecture is incompatible
// eventually expo-cli 3.20.1 installed locally
// it's a huge app
```

```
$ edit package.json with
  "scripts": {
    "expo": "expo"
  },
// so that it can be run by doing
// $ yarn run expo init expotodo
```

## Setup expo todo

```
yarn run expo init expotodo // no special characters
... Choose blank template
```

The following instructions spewed out.

```
To run your project, navigate to the directory and run one of the following yarn commands.

- cd expotodo
- yarn android
- yarn ios # you need to use macOS to build the iOS project - use managed workflow if you need to do iOS development without a Mac
- yarn web

💡 You can also open up the projects in the ios and android directories with their respective IDEs.
🚀 Please note that expo-updates (​https://github.com/expo/expo/blob/master/packages/expo-updates/README.md​) has been configured in your project. Before you do a release build, make sure you run expo publish. Learn more. (​https://expo.fyi/release-builds-with-expo-updates​)
```

## Try "yarn web" first

Remember the expo-cli is a locally installed app, and thus the package.json for the script web needs to be updated.

Originally, it will default to run expo globally, it will fail.

This will resolve the problem

```
"web": "..\\node_modules\\.bin\\expo-cli start --web",
```

It generated 2 web apps:

* A Metro Bundler (localhost:19002), don't think I can do anything here because I don't have an Android device/emulator.
* The app itself (localhost:19006).

Success.  Anytime App.js is modified, the screen is refreshed.

## Try "yarn android"

Should be failing as there's no device or emulator.

It actually did a lot of things...

* a node window to run Metro Bundler
* the script continued to run to download gradle, and then eventually failed.

