# Knex.js

Um construtor de consultas com vários dialetos (MSSQL, MySQL, PostgreSQL, SQLite3, Oracle

# Instalação

```bash
npm install knex --save

# Then add one of the following (adding a --save) flag:
npm install pg
npm install sqlite3
npm install mysql
npm install mysql2
npm install oracledb
npm install mssql
```

# Configuração

```js
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  }
});
```

# Execução

# Usabilidade

```bash
knex init
```
Cria o kinexfile.js - tem toda a configuração do banco de dados
voce pode ter varias conecções com banco de dados
uma para desenvolvimento outra para produção

criar config/db.js
```js
const config = require('../knexfile.js')
const knex = require('knex')(config)

module.exports = knex
```

```js
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './data.db',
  },
});
```

#### Create a table
```js
knex.schema.createTable('users', function(table) {
    table.increments('id');
    table.string('user_name');
  })
```

#### ...and another
```js
  .createTable('accounts', function(table) {
    table.increments('id');
    table.string('account_name');
    table.integer('user_id')
      	 .unsigned()
      	 .references('users.id');
  })
```

#### Then query the table...
```js
  .then(function() {
    return knex('users').insert({ user_name: 'Tim' });
  })
```

#### ...and using the insert id, insert into the other table.
```js
  .then(function(rows) {
    return knex('accounts').insert({ account_name: 'knex', user_id: rows[0] });
  })
```

#### Query both of the rows.
```js
  .then(function() {
    return knex('users')
      .join('accounts', 'users.id', 'accounts.user_id')
      .select('users.user_name as user', 'accounts.account_name as account');
  })
```

#### .map over the results
```js
  .map(function(row) {
    console.log(row);
  })
```

#### Finally, add a .catch handler for the promise chain
```js
  .catch(function(e) {
    console.error(e);
  });
```

# Documentação curta

