# Welcome to flight Service
## Project Setup
- clone the project on your local
- Excecute `npm install` on the same path as of your root directory
-  Create a `.env` file in the root directory and add the following  environment variable
    - PORT=<3000>
- Inside the `src\config` folder create a new file `config.json` and then add the following piece of json
    ```{
        "development": {
            "username": <root/Your db login name>,
            "password": <Password>
            "database": "database name",
            "host": "127.0.0.1",
            "dialect": "mysql"
            }
        }
    ```
- Once you have added your db config as listed above, go to src folder and  excecute `npx sequelize db:create`