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
