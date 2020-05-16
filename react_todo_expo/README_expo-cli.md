```
$ cd Y:\gitroot2\edx\Harvard_CS50\react_todo_expo\expotodo
$ yarn android
```

## expo-cli

Finally succumb to the fact that if I customized (install locally) of some subsystem, the process would be difficult to fix.

Start up with the right foot by using **npm**, instead of **yarn**.

The expo-cli website has a very good tutorial to get a simple React Native app going.

Summary:

1. Make sure run the emulator successfully.  Read [my journey with Android Studio](Y:\gitroot2\documentations_gitroot2\edx\Harvard_CS50\react_todo_expo\README_Android_Studio.md).  And the problem and the [fixes to get the emulator going](Y:\gitroot2\documentations_gitroot2\edx\Harvard_CS50\react_todo_expo\README_adb_problem.md).

   ```
   $ emulator -avd Pixel_2_XL_API_29
   ```

2. After expo-cli is globally installed by 

   ```
   $ npm install -g expo-cli
   $ expo-cli -V
   // however, the usage will be just $ expo [options] [command]
   ```

3. ```
   $ expo init AwesomeProject
   ```

   will generate a boilerplate working project.

4. ```
   $ expo start
   ```

   Two processes started with the above

   * Expo server
   * Metro bundler

   ```
   expo start                                        Starting project at Y:\gitroot2\edx\Harvard_CS50\react_native_sideproj\AwesomeProject
   Expo DevTools is running at http://localhost:19002
   Opening DevTools in the browser... (press shift-d to disable)
   Starting Metro Bundler on port 19001.
   Successfully ran `adb reverse`. Localhost URLs should work on the connected Android device.
   Tunnel ready.
   
     exp://192.168.2.18:19000
     
     [Here is a QR Code... not sure how to use it though]
     [direct using it doesn't work at all]
   
     To run the app with live reloading, choose one of:
     • Scan the QR code above with the Expo app (Android) or the Camera app (iOS).
     • Press a for Android emulator, or w to run on web.
     • Press e to send a link to your phone with email.
     • Press s to sign in and enable more options.
   
    Expo  Press ? to show a list of all available commands.
   Logs for your project will appear below. Press Ctrl+C to exit.
   ```
```
   

   
5. On the Metro bundler on a browser (localhost:19002), you can instruct where the project bundle will be shipped to.
Got it working for both the **emulator** and using **tunnel** (via the QR code) directly from **my phone**.
   
   Any changes to App.js reflected on both devices always instantly.
   
```
   Two things can happen that may caused the connection to the bundler failed and thus no updates.  Timeout will cause connection, and then you have to try to re-connect, and sometimes, that's painful.

   One time, I had switch to web bundling, and then back to android, and that caused the re-compiling happening again.

   The tunneling for the actual phone seems to be more stable than the emulator.
   ```
Discovered that if either the emulator or the phone lost connection somehow, it will not recognize a restart from the Metro Bundler.  Just have to get rid of that instance and restart the QR code for the phone, or just start another instance from the Metro.
   
   ```

## Conclusion

The expo-cli experimentation is now finished.