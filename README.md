# Setup 
```bash
npm install -g electron-prebuilt
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
## Running the Server
```bash
  npm run server
```
## Running the DB
```bash
  npm run db
```

## Running the Mac App (OSX only)
```bash
  npm run ios

  npm run watch_sass // compiles .sass to .css
  npm run mobile_watch_css // compiles .css to .js for mobile style
```

## Running the Android App (AVD must be running)
```bash
  npm run android
```
