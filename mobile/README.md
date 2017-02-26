## Run
Navigate to root directory

Make sure ANDROID_HOME environment variable is set: <code>export ANDROID_HOME=${HOME}/Library/Android/sdk</code>

If you do not already have devices (real or virtual) set up, see the [documentation](https://facebook.github.io/react-native/docs/getting-started.html).

Run android: <code>react-native run-android</code>

Run iOS: <code>react-native run-ios</code>

## Additional info
index.android.js and index.android.js are the entry points and render the <code>Navigator</code>s, which in turn cause the proper scenes to be displayed based on user actions.  All scenes as well as the <code>Navigate</code> component (contains the <code>Navigator</code>s) are located in the scenes/ directory.  All scenes/ code is shared between the Android and iOS implementations.

### Helpful for debugging
If you want to use <code>console.log</code> to debug, run the following from a terminal after the app has been launched:

Android: <code>react-native log-android</code>

iOS: <code>react-native log-ios</code>
