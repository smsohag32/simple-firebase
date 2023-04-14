# Simple firebase setup on react project.

## steps to build

- visit: console.firebase.google.com.
- create project (skip google analytics).
- register app (create config).
- install firebase: imp install firebase.
- add config file to your project.
- Danger: do not publish to public firebase config.
- Router setup.

- Visit: to go to Docs> build > Authentication > Web > Get Started
- export app from the firebase.config.js file: then export default app

### google popup login

- Login.jsx import getAuth from firebase/auth
- create const auth = getAuth()

- import googleAuthProvider and create a new provider.
- use singInWithPopUp and pass auth and provider.
- Activate sing-in method (google, facebook).
- vite: change 127.0.0.1 to localhost
- using singOut and pass only auth (then, catch)

### more auth provider

- activate the auth provider (create app, provide redirect url, client id, secret id,)
-
