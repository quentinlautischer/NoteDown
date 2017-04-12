# Setup

Node.js must first be installed.  See [Node.js Downloads](https://nodejs.org/en/download/).
```bash
npm install -g electron

npm install -g react-native-cli
```

# Running your code
Scripts are defined in Scripts/
To run any scripts defined in package.json.
```bash
  npm run <script_name>
```

## Instantiate the project
From root:
```bash
  npm run massinstall
```

## Running the Desktop App
```bash
  npm run desktop

  sudo gem install sass
  sass --watch // Will compile .scss into .css

  OR

  npm run watch_sass // compiles .sass to .css

  cd desktop
  npm run dev // Debugger for desktop app (webpack --watch)
```

## Running the Mac App (OSX only)
```bash
  npm run ios

  npm run watch_sass // compiles .sass to .css
  npm run mobile_watch_css // compiles .css to .js for mobile style
```

## Running the Mobile App

Additional setup information can be found [here](https://facebook.github.io/react-native/docs/getting-started.html) if necessary.

### Android  (AVD must be running or device connected)

Make sure ANDROID_HOME environment variable is set:
```bash
export ANDROID_HOME=${HOME}/Library/Android/sdk
```

For AVD, set additional environment variables:
```bash
export PATH=${PATH}:${ANDROID_HOME}/tools

export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```

```bash
  npm run android
```

### iOS (Mac only)
```bash
  npm run ios
```

## Running the Server
This is for local mode only and requires changing the host & port in code.  Also, MongoDB must be installed.

```bash
  npm run server
```

## Running the DB
This is for local mode only and requires changing the host & port in code.  Also, MongoDB must be installed.

```bash
  npm run db
```
