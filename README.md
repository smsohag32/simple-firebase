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
