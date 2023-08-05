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

### Notes

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

-
