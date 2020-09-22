# SWAPI serverless

>   A porting of [swapi.dev](https://swapi.dev) using JavaScript serverless 
    functions for the JSON APIs and Next.js statically generated pages for the 
    front-end.

### Goals
1.  Achieve feature parity of [swapi.dev](https://swapi.dev) site, (previously 
    known as [swapi.co](swapi.co), not maintained anymore) as a JamStack site, 
    with some back-end logic as serverless lambda functions

2.  Restore the original swapi.co site or build a brand new swapi site, possibly 
    hosted on [Netlify](www.netlify.com)

### Data
All the data are loaded at request time from JSON fixture files, copied from 
the original repo https://github.com/phalt/swapi/tree/master/resources/fixtures.

In addition to that, some data coming from open PRs on the original unmaintained
repo have been added manually (e.g. some data regarding the 7th film of the 
saga, *The Force Awakens*).

Of course, in a real world application, data would be stored and fetched
from a datastore (a RDBMS or a NoSQL database like MongoDB or FaunaDB).

In the original project (based on Django framework), those JSON files were
intended to be loaded into a database by using the python utility `loaddata`.

But due to the limited amount of data to manage, we're not using any database,
on purpose. Instead we're loading and manipulating the needed information at 
request time, with apparently no visible delay (a benchmark would be helpful, 
though).

Updates to the data will be done directly in the fixture files. 
(Please open a PR if you find some error or missing data)

### How to run it locally
Run it locally with:
```
npm run dev
```

Navigate to `http://localhost:4000/api/films` for the JSON APIs

Navigate to `http://localhost:3000/` for the human-friendly frontend

### Tests (NOT IMPLEMENTED, YET)

```
npm run test
```
