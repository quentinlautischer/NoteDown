## Run
Navigate to root directory

Make sure ANDROID_HOME environment variable is set: ```export ANDROID_HOME=${HOME}/Library/Android/sdk```

If you do not already have devices (real or virtual) set up, see the [documentation](https://facebook.github.io/react-native/docs/getting-started.html).

For AVD, set additional environment variables:
* ```export PATH=${PATH}:${ANDROID_HOME}/tools```
* ```export PATH=${PATH}:${ANDROID_HOME}/platform-tools```

Run android: <code>react-native run-android</code>

Run iOS: ```react-native run-ios```

## Additional info
index.android.js and index.android.js are the entry points and render the ```Navigator```s, which in turn cause the proper scenes to be displayed based on user actions.  All scenes as well as the ```Navigate``` component (contains the ```Navigator```s) are located in the scenes/ directory.  All scenes/ code is shared between the Android and iOS implementations.

### Helpful for debugging
If you want to use ```console.log``` to debug, run the following from a terminal after the app has been launched:

Android: ```react-native log-android```

iOS: ```react-native log-ios```
