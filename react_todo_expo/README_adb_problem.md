```
$ cd Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo
$ yarn android
```

## react-native run-android

yarn android
yarn run v1.21.1
$ react-native run-android
info Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
Jetifier found 1161 file(s) to forward-jetify. Using 4 workers...
info Starting JS server...
**'adb' is not recognized as an internal or external command,**

```
require putting path into PATH
stems from the fact that I never properly followed Android Studio instructions when handling PATH.

NOTE: this is fixed.  By putting in the PATH the proper folders, and by creating a new one called ANDROID_SDK_ROOT.
```

operable program or batch file.
info Launching emulator...
**error Failed to launch emulator. Reason: No emulators found as an output of `emulator -list-avds`.**

```
Similarly as above, once the PATH was set up correctly.  The error went away, as it should.
```

warn Please launch an emulator manually or connect a device. Otherwise app may fail to launch.
info Installing the app...
Starting a Gradle Daemon (subsequent builds will be faster)

> Configure project :app

Installing unimodules:
 unimodules-core@5.1.2 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\@unimodules\core
 unimodules-react-native-adapter@5.2.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\@unimodules\react-native-adapter
 expo-constants@9.0.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-constants
 expo-error-recovery@1.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-error-recovery
 expo-file-system@8.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-file-system
 expo-font@8.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-font
 expo-image-loader@1.0.1 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-image-loader
 expo-keep-awake@8.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-keep-awake
 expo-linear-gradient@8.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-linear-gradient
 expo-location@8.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-location
 expo-permissions@8.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-permissions
 expo-sqlite@8.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-sqlite
 expo-updates@0.1.3 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-updates
 expo-web-browser@8.2.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-web-browser
 unimodules-app-loader@1.0.2 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-app-loader
 unimodules-barcode-scanner-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-barcode-scanner-interface
 unimodules-camera-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-camera-interface
 unimodules-constants-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-constants-interface
 unimodules-face-detector-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-face-detector-interface
 unimodules-file-system-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-file-system-interface
 unimodules-font-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-font-interface
 unimodules-image-loader-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-image-loader-interface
 unimodules-permissions-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-permissions-interface
 unimodules-sensors-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-sensors-interface
 unimodules-task-manager-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-task-manager-interface

FAILURE: Build failed with an exception.

* Where:
Build file 'Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\react-native-reanimated\android\build.gradle' line: 89

* **What went wrong:**
  **A problem occurred configuring project ':react-native-reanimated'.**

  **SDK location not found. Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file at 'Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\android\local.properties'.**

  ```
  Again, once the variable was defined, the error went away.
  ```
* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 2m 1s

error Failed to install the app. Make sure you have the Android development environment set up: https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment. Run CLI with --verbose flag for more details.

```
Android development environment not set up properly.
Now that it is more setup than previously, the build was properly progressing till the JAVA proble.
```

Error: Command failed: gradlew.bat app:installDebug -PreactNativeDevServerPort=8081

FAILURE: Build failed with an exception.

* Where:
Build file 'Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\react-native-reanimated\android\build.gradle' line: 89

* What went wrong:
A problem occurred configuring project ':react-native-reanimated'.
> SDK location not found. Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file at 'Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\android\local.properties'.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 2m 1s

    at checkExecSyncError (child_process.js:621:11)
    at execFileSync (child_process.js:639:15)
    at runOnAllDevices (Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\@react-native-community\cli-platform-android\build\commands\runAndroid\runOnAllDevices.js:94:39)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

## react-native run-android (continued)

react-native run-android
info Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
Jetifier found 1173 file(s) to forward-jetify. Using 4 workers...
info JS server already running.
info Installing the app...
Starting a Gradle Daemon (subsequent builds will be faster)

> Configure project :app

Installing unimodules:
 unimodules-core@5.1.2 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\@unimodules\core
 unimodules-react-native-adapter@5.2.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\@unimodules\react-native-adapter
 expo-constants@9.0.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-constants
 expo-error-recovery@1.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-error-recovery
 expo-file-system@8.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-file-system
 expo-font@8.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-font
 expo-image-loader@1.0.1 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-image-loader
 expo-keep-awake@8.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-keep-awake
 expo-linear-gradient@8.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-linear-gradient
 expo-location@8.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-location
 expo-permissions@8.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-permissions
 expo-sqlite@8.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-sqlite
 expo-updates@0.1.3 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-updates
 expo-web-browser@8.2.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\expo-web-browser
 unimodules-app-loader@1.0.2 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-app-loader:app
 unimodules-barcode-scanner-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-barcode-scanner-interface
 unimodules-camera-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-camera-interface
 unimodules-constants-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-constants-interface
 unimodules-face-detector-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-face-detector-interface
 unimodules-file-system-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-file-system-interface
 unimodules-font-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-font-interface
 unimodules-image-loader-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-image-loader-interface
 unimodules-permissions-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-permissions-interface
 unimodules-sensors-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-sensors-interface
 unimodules-task-manager-interface@5.1.0 from Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\unimodules-task-manager-interface

> Task :unimodules-constants-interface:compileDebugJavaWithJavac FAILED
> 25 actionable tasks: 2 executed, 23 up-to-date

FAILURE: Build failed with an exception.

* What went wrong:
  Execution failed for task ':unimodules-constants-interface:compileDebugJavaWithJavac'.

  **Could not find tools.jar. Please check that C:\Program Files (x86)\Java\jre1.8.0_231 contains a valid JDK installation.**

  ```
  Uninstall that particular version, and install the latest 14.0.1.
  Now JAVA_HOME is not set...
  K... reboot time.
  
not quite so simple... actually has to set up environment variable path to contain ...Java\jdk-14.0.1\bin, and then remove the ...Oracle\javapath.
  
  then java is now available.
  ```
  
  

Try:

> * Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 52s

error Failed to install the app. Make sure you have the Android development environment set up: https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment. Run CLI with --verbose flag for more details.
Error: Command failed: gradlew.bat app:installDebug -PreactNativeDevServerPort=8081

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':unimodules-constants-interface:compileDebugJavaWithJavac'.
> Could not find tools.jar. Please check that C:\Program Files (x86)\Java\jre1.8.0_231 contains a valid JDK installation.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 52s

    at checkExecSyncError (child_process.js:621:11)
    at execFileSync (child_process.js:639:15)
    at runOnAllDevices (Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\@react-native-community\cli-platform-android\build\commands\runAndroid\runOnAllDevices.js:94:39)
    at buildAndRun (Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\@react-native-community\cli-platform-android\build\commands\runAndroid\index.js:179:41)
    at Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\@react-native-community\cli-platform-android\build\commands\runAndroid\index.js:133:12
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async Command.handleAction (Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo\node_modules\@react-native-community\cli\build\index.js:182:9)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

## react-native run-android (continued 2)

error Failed to install the app. Make sure you have the Android development environment set up: https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment. Run CLI with --verbose flag for more details.
Error: Command failed: gradlew.bat app:installDebug -PreactNativeDevServerPort=8081

```
Will check over all the environment variables and path.
```

