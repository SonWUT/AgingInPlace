## Technical stack:
Frontend: React (JSX)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Environment: Node 16
Backend: None
Database: None

## Development step
In the project directory, you can run:

### `npm install`

Common errors when install first time:
- If npm is not available install nodejs 16
- If version is not compatible, try to downgrade node version to 16
- If latest version of specific lib generates error, try to set early version in package.json

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>
You will also see any lint errors in the console.

(optional)
### `npm test`
Launches the test runner in the interactive watch mode.<br>


## Deploy step 

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed! Copy the build folder content to root folder of server. (Or copy the build folder then direct the server to serve index file inside)

