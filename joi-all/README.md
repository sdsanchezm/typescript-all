# notes

## Libraries

### Morgan

-   HTTP request logger middleware for node.js [https://www.npmjs.com/package/morgan]

### joi

-   powerful schema description language and data validator for JavaScript. [https://www.npmjs.com/package/joi]

### lodash

-   Lodash makes JavaScript easier by working with arrays, numbers, objects, strings, etc.
    -   Iterating arrays, objects, & strings
    -   Manipulating & testing values
    -   Creating composite functions
-   npm: [https://www.npmjs.com/package/lodash]

### Body-parser

-   Parse incoming request bodies in a middleware before handlers
-   It's available under the req.body property. [https://www.npmjs.com/package/body-parser]
-

## Typescript

### packages

-   dependencies

    -   nodemon
    -   ts-node
    -   prettier
    -   typescript

-   Dev dependencies `npm install chalk@^4.1.2 dotenv express joi mongoose`

    -   chalk (color to the console)
    -   dotenv (load env vars)
    -   express (api node)
    -   joi (data validation)
    -   mongoose (access mongodb)

-   Typescript dev dependencies
    -   `npm install --save-dev typescript @types/express`

### initials

-   Locally `npx tsc --init` or globally `tsc --init`
-   vscode extensions: '.env', "prettier", "vscode-icons"
    -   prettier configuration documentation: [https://prettier.io/docs/en/configuration.html]

### folder

-   src
    -   config
    -   controllers
    -   library
    -   middleware
    -   models
    -   routers

### issues and solutions

-   issues when connecting to mongodb, version:

    -   the `const databaseURL = 'mongodb://localhost:27017/qwe';` uses ipv6 and is not enabled by default
    -   solution: use `const databaseURL = 'mongodb://127.0.0.1:27017/qwe';` or use `.\mongod.exe --ipv6` source:
    -   solution: use `family: 4` as one of the options in the mongoose setup
    -   [https://stackoverflow.com/questions/69840504/mongooseserverselectionerror-connect-econnrefused-127017]

-   issue when using chalk

    -   Error: code: 'ERR_REQUIRE_ESM'
    -   solution: use chalk version 4, with typescript.
        -   `npm install chalk@^4.1.2`
    -   source: [https://stackoverflow.com/questions/70309135/chalk-error-err-require-esm-require-of-es-module]

-   http.CreateServer() instead of app.listen(): Here are some reasons why you might choose to use http.createServer() over app.listen:

    -   Additional Configurations: With http.createServer(), you can set additional configurations for the HTTP server before attaching the Express app. For example, you can enable HTTPS, set custom
        headers, or handle low-level server events.

    -   Advanced Middleware: If you need to use low-level middleware that requires access to the raw HTTP server (e.g., WebSocket), using http.createServer() gives you the flexibility to attach these
        middlewares before attaching the Express app.

    -   Modularity: Creating the server separately from the Express app makes the code more modular and allows you to organize the server setup separately from the app's route handling.

    -   Unit Testing: When writing unit tests for your Express app, using http.createServer() allows you to create and test the server instance independently, which can make testing easier and more
        isolated.
    -   the following code allows to combine Express and the http.createServer() capabilities

        ```
          const http = require('http');
          const express = require('express');
          const router = require('./router');

          const app = express();
          app.use(router);

          const server = http.createServer(app);

          server.listen(config.server.port, () => {
            Logging.info(`Server up on port ${config.server.port}`);
          });
        ```
