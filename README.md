# Hello GraphQL

## Configure Typescript and nodemon
 * https://bjdejongblog.nl/nodejs-using-typescript-with-nodemon/

## Mongodb
* https://www.thepolyglotdeveloper.com/2019/01/getting-started-mongodb-docker-container-deployment/

1. Instalation
    ```shell
    docker pull mongo:4.2.5
    ```
2. Start
    ```shell
    docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:4.2.5
    ```
3. Connect as client
    ```shell
    docker exec -it mongodb bash
    ```
    ```shell
    mongo
    ```

## Execution of project
**NOTE:** The project use by default the port 3000

1. Install dependencies
    ```shell
    npm i
    ```
2. Build
    ```shell
    npm run build
    ```
3. Start
    ```shell
    npm start
    ```
4. Start in custom port
    ```shell
    PORT=4000 npm start
    ```
5. Start in dev mode (hot reload)
    ```shell
    npm run dev:w
    ```