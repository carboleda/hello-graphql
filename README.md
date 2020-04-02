# Hello GraphQL

## Configure typescript and nodemon
https://bjdejongblog.nl/nodejs-using-typescript-with-nodemon/

## Mongodb
https://www.thepolyglotdeveloper.com/2019/01/getting-started-mongodb-docker-container-deployment/

1. Instalation
    ```shell
    docker pull mongo
    ```
2. Start
    ```shell
    docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:latest
    ```

## Execution
1. Install dependencies
    ```shell
    npm i
    ```
2. Start
    ```shell
    npm run build
    npm start
    ```
2. Start in dev mode
    ```shell
    npm run dev:w
    ```