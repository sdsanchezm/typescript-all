# Typescript react App

## cra install 
- `npx create-react-app ts-react-app1 --template typescript`
- a

## To add ts to a new project

- `yarn add typescript @types/node @types/react @types/react-dom @types/jest`

## To start the project

- Check the package.json (inside of src) for commands, it is `npm start`


## Install typescript without CRA in a project

- `npm install typescript --save-dev`
- `@types/node`
- Example of tsconfig.json:
    ```
    {
        "compilerOptions": {
            "module": "NodeNext",
            "moduleResolution": "NodeNext",
            "target": "ES2020",
            "sourceMap": true,
            "outDir": "dist",
        },
        "include": ["src/**/*"],
    }
    ```
