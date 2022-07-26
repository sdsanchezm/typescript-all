# Typescript Basics

## Workspace Setup



## Install

- Install only for the actual project
```
npm install typescript --save-dev 
```
- Verify (npx executes locally (local packages), not globaly):
```
npx tsc --version
```
- Create the .gitignore file (include windows, mac, linux and node in gitignore.io)
- Create the .editorconfig file (ext Editor Config in VsCode required):
```
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```
- In order to obtain the resulted js file in a spefici folder using es6:
- can also be specified in tsconfig.json
```
npm tsc src/index.ts --outDir dist --target es6
```
- `deno` is a technology that is growing!
- Innitiate the `tsconfig.json` file:
```
tsc --init
```
- Important lines:
```
"rootDir": "./src",
"outDir": "./dist",
```
- Execute the local `tsc`:
```
npx tsc
```
- Execute watch:
```
npx tsc --watch
```



### Lessons:



#### From Google Code Review

1. Layer 1: Static Code Analysis
2. Layer 2: Unit Tests
3. Layer 3: Integration Test (how everything works together)
4. Layer 4: Code Review, takes a few hours to validate you are following standard norms and practices for your team

