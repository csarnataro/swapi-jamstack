# SWAPI serverless

> A porting of [swapi.dev](https://swapi.dev) JSON API in JavaScript as serverless functions

### Goals
Port the whole [swapi.dev](https://swapi.dev) site, (previously known as [swapi.co](swapi.co), not maintained anymore) as a JamStack site, with some back-end logic as serverless lambda functions


### How to test locally
Test locally with:
```
NODE_ENV=local node ./test-rest-api-locally.js
```
Navigate to `http://localhost:4000/api/films`