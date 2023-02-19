# Node.js project with MySQL and Knex

This is a simple Node.js project that uses MySQL as a database and Knex as an ORM. The project is built with Node.js and Express.

## Setup

To set up the project, follow these steps:

1. Clone the repository.
2. Install the dependencies by running `npm install`.
3. Create a MySQL database and update the `knexfile.js` file with the appropriate database configuration.

```javascript
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'database-name'
    }
  }
}
```
4. Run the migrations by running `npx knex migrate:latest`.
5. Start the server by running `npm start`.


### Project Structure

├── config/
│   ├── knexfile.js
│   └── ...
├── migrations/
│   ├── 20220101000000_create_users_table.js
│   └── ...
├── models/
│   ├── user.js
│   └── ...
├── routes/
│   ├── index.js
│   └── users.js
├── app.js
├── package.json
├── README.md
└── ...

```
