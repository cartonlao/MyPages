When using react native build, I can put it on the browser.

but when i try to put it on an emulator... I need an emulator.

## Setting up Android Studio Emulator

For adb and emulator

Follow the instructions on https://docs.expo.io/workflow/android-studio-emulator/:

### step 1

Download Android Studio 3.

Start up a simple project (with Kotlin)

Click the settings (2nd icon in the upper right hand corner), instead of Preferences.

* Android SDK

* SDK Tools

* SDK Location C:\Users\Carton\AppData\Local\Android\Sdk

  * Android SDK Build-Tools 30-rc4
  * Android Emulator
  * Android SDK Platform-Tools
  * Intel x86 Emulator Accelerator (HAXM installer)

* adb location is

  ```
  C:\Users\Carton\AppData\Local\Android\Sdk\platform-tools
  ```

  May need to put this onto PATH so that in a terminal, type in adb to execute it.
  
  For now, I just created a shortcut to the executable.

### step 2

Click the AVD Manager icon (3rd icon in the upper right hand corner)

AVD Manager

* Create a virtual device.
* Choose x86 images - 
  * API Level 29, ABI x86_64, Target Android 10.0 (Google APIs) for Pixel 2 XL
  * API Level 25, ABI x86_64, Target Android 7.1.1 (Google APIs) for tablet
  * API Level 24, ABI x86_64, Target Android 7.0 (Google APIs) for Samsung phone.
* After all the images were selected, clicking finish will start to create an Android Virtual Device (AVD)
* The first default was named Pixel 2 XL API 29 and created.
* Then select tablet and named Nexus 9 API 25.
* The third was named Galaxy Nexus API 24.
* All of them require VT-x, which is disabled in BIOS.  Need to enable it.

### step 3

* Esc to get into bios.
* F10 to get into menu
* select system configuration
* enable virtualization
* edit environment path
* create new environment variable called ANDROID_SDK_LOCATION to be C:\Users\Carton\AppData\Local\Android\Sdk

### step 4

* to start an emulator, then do the following

  ```
  $ emulator -avd Pixel_2_XL_API_29
  Failed to open /qemu.conf, err: 2
  HAX is working and emulator runs in fast virt mode.
  Your emulator is out of date, please update by launching Android Studio:
   - Start Android Studio
   - Select menu "Tools > Android > SDK Manager"
   - Click "SDK Tools" tab
   - Check "Android Emulator" checkbox
   - Click "OK"
  ```

  