![screenshot1](src/images/example.png)

# react-spotify-player

**_What does it do?_** For now, this project gives you 2 options (after login):

- You can find this app on your own Spotify app list of **devices** and stream music to it, just look for _Broadcast to React Spotify Player_, this uses the Spotify's client-side JavaScript library: Web Playback SDK.
- See a list of your favourite albums/songs.
- Play 30 seconds samples of each song from your 'favourite songs list' or your 'favourite albums list'.

**(Playlists length currently limited to 15)**

## Running the Sample Code

Before getting started, you'll need to create a project on [Spotify's website](https://developer.spotify.com/dashboard/login).
You'll then receive a `clientId` and a `clientSecret`.

Now, the server for this project is in [this reopsitory](https://github.com/giltayar/alt-spotify).
Follow the instructions, and don't forget to set environment variables as depicted in the text by the awesome [_@giltayar_](https://github.com/giltayar).\
Here's an example for running the server on Git Bash (UNIX-like):

```sh
CLIENT_ID=something CLIENT_SECRET=something
PORT=3001 BASE_URL=http://localhost:3001 npm run start:backend
```

**One last thing:**

Go to your [Dashboard](https://developer.spotify.com/dashboard/applications) on Spotify's developers website, click on the app and then on **_Edit Settings_**, choose a redirect URI.\
Considering the example above you should write:

```sh
http://localhost:3001/spotify-callback?redirect=http://localhost:3000/receive-token
```

![screenshot2](src/images/screenshot-spotify.png)

![screenshot3](src/images/screenshot-spotify3.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
